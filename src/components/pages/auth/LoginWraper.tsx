'use client'
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from 'js-cookie';

import { backendUri } from "@/helpers/url";
import { useGoogleLogin } from '@react-oauth/google';
import { LoadingComponent } from "@/components/ui/loaders/Loading";
import { NotAuthRequest } from "@/helpers/requests/NotAuthRequest";
import { useRouter } from "next/navigation";
import simplitermsLogo from "../../../assets/simpliterms-logo.png"
import googleLogo from "@/assets/google-svgrepo-com.svg"


export const LoginWraper = ({
    signIn,
    googleButton,
    emailPlaceholder,
    passwordPlaceholder,
    IFmessage,
    IFbutton,
    actionButton,
    errorEmail,
    errorEmailRequired,
    errorEmailToolong,
    errorPassword,
    errorPasswordRequired,
    errorPasswordToolong
}: {
    signIn: string,
    googleButton: string,
    emailPlaceholder: string,
    passwordPlaceholder: string,
    IFmessage: string,
    IFbutton: string,
    actionButton: string,
    errorEmail: string,
    errorEmailRequired: string,
    errorEmailToolong: string,
    errorPassword: string,
    errorPasswordRequired: string,
    errorPasswordToolong: string
}) => {

    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const router = useRouter();

    // form values
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const changeEmail = (value: string) => {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com)$/;
        setEmail(value);
        if (value.length > 100) {
            setEmailError(errorEmailToolong);
            return true;
        };
        if (value.length === 0) {
            setEmailError(errorEmailRequired);
            return true;
        };
        if (!regexEmail.test(value)) {
            setEmailError(errorEmail);
            return true;
        };
        setEmailError("");
        return false;
    };

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const changePassword = (value: string) => {
        setPassword(value);
        if (value.length > 100) {
            setPasswordError(errorPasswordToolong);
            return true;
        };
        if (value.length === 0) {
            setPasswordError(errorPasswordRequired);
            return true;
        };
        if (value.length < 8) {
            setPasswordError(errorPassword);
            return true;
        };
        setPasswordError("");
        return false;
    };

    // change disable fucntion of button
    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        if (email.length > 0 || password.length > 0) {
            const resultEmail = changeEmail(email);
            const resultPassword = changePassword(password);
            if (resultEmail === false && resultPassword === false) {
                setButtonDisabled(false);
            } else {
                setButtonDisabled(true);
            }
        }
    }, [email, password]);


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const resultEmail = changeEmail(email);
        const resultPassword = changePassword(password);

        if (resultEmail || resultPassword) {
            return;
        }

        setIsLogin(true);
        setError("");

        try {

            const userForValidation = {
                email,
                password
            }
            const resp = await NotAuthRequest("POST", "/api/auth/login", userForValidation);
            if (resp.isError && resp.isError.length > 0) {
                setIsLogin(false);
                setError(resp.isError);
                return;
            }

            if (resp.data && resp.data.status === "success") {
                Cookies.set('x-token', resp.data.token, { path: '/' });
                Cookies.set('username', resp.data.userDB.username, { path: '/' });
                Cookies.set('email', resp.data.userDB.email, { path: '/' });
                if (resp.data.userDB.accessDate) {
                    Cookies.set('access-date', new Date(resp.data.userDB.accessDate).toISOString(), { path: '/' });
                }
                Cookies.set('credits', resp.data.userDB.credits, { path: '/' });
                router.push("/account");
            }

        } catch (error) {
            console.log(error, "error trying to login")
            setIsLogin(false);
            setError("There was an error in the server please try again later");
        }

    }

    const GoogleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const { data: SignUpData } = await axios.post(`${backendUri}/api/auth/google-login`, {
                access_token: tokenResponse.access_token
            });
            if (SignUpData.status === "success") {

                // Cookies.set('x-token', SignUpData.token, {path: '/account'});
                Cookies.set('x-token', SignUpData.token, { path: '/' });

                // Cookies.set('uid', SignUpData.userDB.uid, {path: '/account'});
                Cookies.set('uid', SignUpData.userDB.uid, { path: '/' });

                // Cookies.set('username', SignUpData.userDB.username, {path: '/account'});
                Cookies.set('username', SignUpData.userDB.username, { path: '/' });

                // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
                Cookies.set('email', SignUpData.userDB.email, { path: '/' });

                // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
                if (SignUpData.userDB.accessDate) {
                    Cookies.set('access-date', new Date(SignUpData.userDB.accessDate).toISOString(), { path: '/' });
                };

                // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
                Cookies.set('credits', SignUpData.userDB.credits, { path: '/' });

                window.location.reload();
            }
        },
        onError: error => {
            console.log(error, "error from google Auth");
            setError('There was an error in google authentication, please try again.')
        }
    });

    if (isLogin) {

        return <LoadingComponent />

    } else {

        return (
            <main className="flex justify-center items-center w-full h-screen text-center">

                <div className="flex flex-col items-center min-w-[40%]">

                    <div className="flex flex-col items-center">
                        <Link href={`/`} title='logo' className="mb-4">
                            <Image
                                src={simplitermsLogo}
                                alt='logo image'
                                width={60}
                                height={60}
                                className='rounded-full'
                            />
                        </Link>
                        <h1 className="mb-8 font-bold text-xl text-[#5712DF]">{signIn}</h1>
                    </div>

                    {/* login form */}
                    <form className="flex flex-col items-center mb-4 md:max-w-[60%]" onSubmit={handleSubmit}>

                        <button
                            onClick={() => { GoogleLogin() }}
                            type="button"
                            className=" text-base text-[#3c4043] transition-all hover:bg-[#F8FAFF] justify-center font-bold w-full flex items-center rounded text-center py-3 px-[2rem] bg-white border-2 border-[#dadce0]">
                            <Image
                                src={googleLogo}
                                alt='google svg icon'
                                width={25}
                                height={25}
                                className="mr-2"
                            />
                            {googleButton}
                        </button>

                        <div className="border-t-2 border-solid border-[rgba(0,0,0,.3)] w-full mt-8"></div>

                        <div className="mb-8">
                            <input
                                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full mt-8 w-[18rem]"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => changeEmail(e.target.value)}
                                placeholder={emailPlaceholder}
                            />
                            {
                                emailError.length > 0 &&
                                <p className="text-red-600 text-start ml-2 text-sm mt-2">{emailError}</p>
                            }
                        </div>

                        <div className="mb-8">
                            <input
                                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full w-[18rem]"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => changePassword(e.target.value)}
                                placeholder={passwordPlaceholder}
                            />
                            {
                                passwordError.length > 0 &&
                                <p className="text-red-600 text-start ml-2 text-sm mt-2">{passwordError}</p>
                            }
                        </div>


                        <button
                            disabled={buttonDisabled}
                            className={`${buttonDisabled ? "bg-opacity-50 text-opacity-50" : ""} bg-[#5712DF] text-white py-2 px-4 rounded-full w-[18rem]`}
                            type="submit"
                        >
                            {actionButton}
                        </button>

                        {error && <span className="text-red-500 mt-4">{error}</span>}

                    </form>

                    <p className="text-sm text-center opacity-70 px-20 md:max-w-[80%]">
                        {IFmessage}
                        <Link className="text-[#5712DF] font-bold pl-2" href={'/auth/register'}>{IFbutton}</Link>
                    </p>

                </div>

            </main>
        )

    }


}

