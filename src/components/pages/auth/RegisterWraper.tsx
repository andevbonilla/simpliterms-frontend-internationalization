'use client'
import { FormEvent, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from 'js-cookie';

import { backendUri } from "@/helpers/url";
import { useGoogleLogin } from '@react-oauth/google';
import { LoadingComponent } from "@/components/Loading";

export const RegisterWraper = ({
    signUp,
    googleButton,
    namePlaceholder,
    emailPlaceholder,
    passwordPlaceholder,
    repeatPasswordPlaceholder,
    messageDownPartOne,
    messageDownPartTwo,
    termsLink,
    privacyLink,
    IFmessage,
    IFbutton,
    actionButton,
    errorUsername,
    errorUsernameRequired,
    errorUsernameLong,
    errorEmail,
    errorEmailRequired,
    errorEmailLong,
    errorPassword,
    errorPasswordRequired,
    errorPasswordLong,
    errorCPassword,
    errorCPasswordRequired,
    errorCPasswordLong,
    errorCPasswordEqual
}:
    {
        signUp: string,
        googleButton: string,
        namePlaceholder: string,
        emailPlaceholder: string,
        passwordPlaceholder: string,
        repeatPasswordPlaceholder: string,
        messageDownPartOne: string,
        messageDownPartTwo: string,
        termsLink: string,
        privacyLink: string,
        IFmessage: string,
        IFbutton: string,
        actionButton: string,
        errorUsername: string,
        errorUsernameRequired: string,
        errorUsernameLong: string,
        errorEmail: string,
        errorEmailRequired: string,
        errorEmailLong: string,
        errorPassword: string,
        errorPasswordRequired: string,
        errorPasswordLong: string,
        errorCPassword: string,
        errorCPasswordRequired: string,
        errorCPasswordLong: string,
        errorCPasswordEqual: string

    }) => {

    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    // form values
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const changeUsername = (value: string) => {
        const regexUsername = /^[A-Z.]+$/;
        setUsername(value);
        if (value.length > 100) {
            setUsernameError(errorUsernameLong);
            return true;
        };
        if (value.length === 0) {
            setUsernameError(errorUsernameRequired);
            return true;
        };
        if (!regexUsername.test(value)) {
            setUsernameError(errorUsername);
            return true;
        };
        setUsernameError("");
        return false;
    };


    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const changeEmail = (value: string) => {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com)$/;
        setEmail(value);
        if (value.length > 100) {
            setEmailError(errorEmailLong);
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
            setPasswordError(errorPasswordLong);
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

    const [cpassword, setCPassword] = useState("");
    const [cpasswordError, setCPasswordError] = useState("");
    const changeConfirmPassword = (value: string) => {
        setCPassword(value);
        if (value !== password) {
            setCPasswordError(errorCPasswordEqual);
            return true;
        };
        if (value.length > 100) {
            setCPasswordError(errorCPasswordLong);
            return true;
        };
        if (value.length === 0) {
            setCPasswordError(errorCPasswordRequired);
            return true;
        };
        if (value.length < 8) {
            setCPasswordError(errorCPassword);
            return true;
        };
        setCPasswordError("");
        return false;
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const resultEmail = changeEmail(email);
        const resultUsername = changeUsername(username);
        const resultPassword = changePassword(password);
        const resultCpassword = changeConfirmPassword(cpassword);

        if (resultEmail || resultPassword || resultUsername || resultCpassword) {
            return;
        }

        setIsLogin(true);
        setError("");

        try {

            const { data: SignUpData } = await axios.post(`${backendUri}/api/user`, {
                email,
                password,
                username
            });

            if (SignUpData) {
                setIsLogin(false);
            }

            if (SignUpData.status === "success") {
                Cookies.set('x-token', SignUpData.token, { path: '/' });
                Cookies.set('username', SignUpData.userDB.username, { path: '/' });
                Cookies.set('email', SignUpData.userDB.email, { path: '/' });
                Cookies.set('plan-type', SignUpData.userDB.planType, { path: '/' });
                Cookies.set('credits', SignUpData.userDB.credits, { path: '/' });
                setTimeout(() => {
                    setIsLogin(false);
                    window.location.reload();
                }, 100);
            }

        } catch (error: any) {
            setIsLogin(false);
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else if (error.request) {
                setError("No response from server please try again later");
            } else {
                setError("There was an error in the server please try again later");
            }
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
                Cookies.set('plan-type', SignUpData.userDB.planType, { path: '/' });

                // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
                Cookies.set('credits', SignUpData.userDB.credits, { path: '/' });

                window.location.reload();
            }
        },
        onError: err => setError('There was an error in google authentication, please try again.')
    });

    if (isLogin) {

        return <LoadingComponent />

    } else {

        return (
            <main className="flex justify-center items-center w-full text-center overflow-scroll">

                <div className="flex flex-col items-center md:max-w-[60%] lg:max-w-[45%] max-w-[75%] xl:scale-90 mt-[3rem] min-w-[40%]">

                    <div className="flex flex-col items-center">
                        <Link href={`/`} title='logo' className="mb-4">
                            <Image
                                src={require('@/assets/simpliterms-logo.png')}
                                alt='logo image'
                                width={60}
                                height={60}
                                className='rounded-full'
                            />
                        </Link>
                        <h1 className="mb-8 font-bold text-xl text-[#5712DF]">{signUp}</h1>
                    </div>

                    <form
                        className="flex flex-col items-center mb-4 md:max-w-[50%] lg:max-w-[45%]"
                        onSubmit={handleSubmit}
                    >

                        <button
                            onClick={() => { GoogleLogin() }}
                            type="button"
                            className=" text-base text-[#3c4043] transition-all hover:bg-[#F8FAFF] justify-center font-bold w-full flex items-center rounded text-center py-3 bg-white border-2 border-[#dadce0]"
                        >
                            <Image
                                src={require('@/assets/google-svgrepo-com.svg')}
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
                                type="text"
                                name="username"
                                placeholder={namePlaceholder}
                                value={username}
                                onChange={(e) => { changeUsername(e.target.value) }}
                            />
                            {
                                usernameError.length > 0 &&
                                <p className="text-red-600 text-start ml-2 text-sm mt-2">{usernameError}</p>
                            }
                        </div>

                        <div className="mb-8">
                            <input
                                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full w-[18rem]"
                                type="email"
                                name="email"
                                placeholder={emailPlaceholder}
                                value={email}
                                onChange={(e) => { changeEmail(e.target.value) }}
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
                                placeholder={passwordPlaceholder}
                                value={password}
                                onChange={(e) => { changePassword(e.target.value) }}
                            />
                            {
                                passwordError.length > 0 &&
                                <p className="text-red-600 text-start ml-2 text-sm mt-2">{passwordError}</p>
                            }
                        </div>

                        <div className="mb-8">
                            <input
                                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full w-[18rem]"
                                type="password"
                                name="cpassword"
                                placeholder={repeatPasswordPlaceholder}
                                value={cpassword}
                                onChange={(e) => { changeConfirmPassword(e.target.value) }}
                            />
                            {
                                cpasswordError.length > 0 &&
                                <p className="text-red-600 text-start ml-2 text-sm mt-2">{cpasswordError}</p>
                            }
                        </div>


                        <p className="text-base opacity-70 mb-6 px-2">
                            {messageDownPartOne} <Link className="text-[#5712DF] font-bold pl-1" href={'/terms-of-use'}>{termsLink}</Link> {messageDownPartTwo}
                            <Link className="text-[#5712DF] font-bold pl-1" href={'/privacy'}>{privacyLink}</Link>
                        </p>

                        <button className="bg-[#5712DF] text-white py-2 px-4 rounded-full w-full" type="submit">{actionButton}</button>

                        {error && <span className="text-red-500 mt-4">{error}</span>}

                    </form>

                    <p className="text-base opacity-70 px-8 lg:px-10">
                        {IFmessage}
                        <Link className="text-[#5712DF] font-bold pl-2" href={'/auth/login'}>{IFbutton}</Link>
                    </p>

                </div>

            </main>
        )
    }

}
