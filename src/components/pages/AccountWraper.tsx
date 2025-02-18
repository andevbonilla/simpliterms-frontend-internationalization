"use client"
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { googleLogout } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { LoadingComponent } from '@/components/ui/loaders/Loading';
import { AuthRequest } from '@/helpers/requests/AuthRequest';

export const AccountWraper = ({
    nameInput,
    emailInput,
    availableCreditsInput,
    summariesLanguage,
    changeLanguageSummaries,
    logOutButton,
    changeLanguage,
    selectNewLanguage,
    homeLink,
    productLink,
    pricingLink,
    accountLink,
    copywright,
    supportTitle,
    supportLink1,
    supportLink2,
    companyTitle,
    companytLink1,
    companytLink2,
}: {
    nameInput: string,
    emailInput: string,
    availableCreditsInput: string,
    summariesLanguage: string,
    changeLanguageSummaries: string,
    cancelSubButton: string,
    logOutButton: string,
    changeLanguage: string,
    selectNewLanguage: string,
    homeLink: string,
    productLink: string,
    pricingLink: string,
    accountLink: string,
    copywright: string,
    supportTitle: string,
    supportLink1: string,
    supportLink2: string,
    companyTitle: string,
    companytLink1: string,
    companytLink2: string
}) => {

    const notifyError = (message: string) => toast.error(message);
    const notifySuccess = (message: string) => toast.success(message);

    const [newLanguage, setNewLenguage] = useState("");
    const [showLanguagesWindow, setShowLanguagesWindow] = useState(false);

    const [userInfo, setuserInfo] = useState<any>({
        username: '',
        email: '',
        credits: '0',
        accessDate: null,
        uid: '',
        summariesLanguage: ""
    });

    const [loading, setLoading] = useState(true);

    const obtainUserData = async () => {

        setuserInfo({
            username: Cookies.get("username") || "",
            email: Cookies.get("email") || "",
            credits: Cookies.get("credits") || "",
            accessDate: Cookies.get("access-date") || "",
            uid: Cookies.get("uid") || "",
            summariesLanguage: Cookies.get("summaries-language") || ""
        });

    }

    const showAccessStatus = () => {

        const currentDate = new Date();

        if (userInfo.accessDate !== null && new Date(userInfo.accessDate) < currentDate) {

            return userInfo.accessDate.toISOString();

        } else {

            return "NO ACCESS";

        }

    }

    const cardType = () => {

        const currentDate = new Date();

        if (userInfo.accessDate !== null && new Date(userInfo.accessDate) < currentDate) {

            return "bg-[#5712DF]";

        } else {

            return "bg-gray-300";

        }

    }

    useEffect(() => {

        obtainUserData();

        setTimeout(() => {
            setLoading(false);
        }, 200);

    }, []);

    const logOut = () => {

        googleLogout();

        Cookies.remove('x-token', { path: '/' });
        Cookies.remove('username', { path: '/' });
        Cookies.remove('email', { path: '/' });
        Cookies.remove('uid', { path: '/' });
        Cookies.remove('access-date', { path: '/' });
        Cookies.remove('summaries-language', { path: '/' });

        setTimeout(() => {
            window.location.reload();
        }, 200);

    }


    const changeSummariesLanguageDB = async () => {

        if (newLanguage === "") return;

        const hasAccess = new Date(userInfo.accessDate) < new Date()
        if (!userInfo.accessDate || !hasAccess) {
            notifyError("This option is not available for users without acess to the tool.");
            return;
        }

        try {

            const token = (Cookies.get('x-token')) ? Cookies.get('x-token') : ''
            const resp = await AuthRequest(token, "PUT", "/api/user/change-language", { newLanguage });
            if (resp.isError && resp.isError.length > 0) {
                notifyError(resp.isError);
                return;
            }

            if (resp.data && resp.data.status === "success") {
                setuserInfo({
                    ...userInfo,
                    summariesLanguage: resp.data.userDB.summariesLanguage
                })
                notifySuccess(`Now all summaries you generate will be in: ${resp.data.userDB.summariesLanguage}`);
                setShowLanguagesWindow(false);
            }

        } catch (error) {
            console.log(error, "Changing the language");
            notifyError("Sorry there was an error trying to change the language");
        }

    }

    const changeSummariesLanguage = async () => {
        setShowLanguagesWindow(true);
    }

    const addDotsToNumber = (num: number) => {
        const newArray = []
        const arrayDigits = num.toString().split('').reverse();
        let i = 0;
        let amount = 0;
        for (const digit of arrayDigits) {
            newArray.push(digit);
            i++;
            amount++;
            if (i === 3 && arrayDigits.length > amount) {
                i = 0;
                newArray.push('.')
            }
        }
        return newArray.reverse().join("");
    };

    const closeLanguagesWindow = () => {
        setShowLanguagesWindow(false);
    };

    const modifyLenguageOfSummaries = (code: string) => {
        switch (code) {
            case "en":
                return "English"
            case "es":
                return "Español"
            case "fr":
                return "Français"
            case "zh":
                return "简体中文"
            case "ja":
                return "日本語"
            case "po":
                return "Português"
            case "hi":
                return "हिंदी"
            case "ru":
                return "Русский"
            default:
                return "English"
        }
    }


    if (loading) {
        return <LoadingComponent />
    }

    return (
        <>

            {
                showLanguagesWindow && <div className='z-[997] fixed w-full top-0 bottom-0 left-0 bg-black bg-opacity-25 flex justify-center items-center'>
                    <div onClick={closeLanguagesWindow} className='cursor-pointer z-[998] fixed w-full top-0 bottom-0 left-0'></div>
                    <div className='bg-white p-10 rounded z-[999] overflow-y-scroll lg:overflow-hidden max-h-[80vh]'>
                        <h3 className='font-bold mb-8 text-xl'>{selectNewLanguage}</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                            <button onClick={() => setNewLenguage("en")} className={`${(newLanguage === "en") ? "bg-[#5712DF] text-white" : "text-black hover:bg-slate-300"} transition-all p-4 rounded`}>
                                English
                            </button>
                            <button onClick={() => setNewLenguage("es")} className={`${(newLanguage === "es") ? "bg-[#5712DF] text-white" : "text-black hover:bg-slate-300"} transition-all p-4 rounded`}>
                                Español
                            </button>
                            <button onClick={() => setNewLenguage("fr")} className={`${(newLanguage === "fr") ? "bg-[#5712DF] text-white" : "text-black hover:bg-slate-300"} transition-all p-4 rounded`}>
                                Français
                            </button>
                            <button onClick={() => setNewLenguage("zh")} className={`${(newLanguage === "zh") ? "bg-[#5712DF] text-white" : "text-black hover:bg-slate-300"} transition-all p-4 rounded`}>
                                中文繁體
                            </button>
                            <button onClick={() => setNewLenguage("ja")} className={`${(newLanguage === "ja") ? "bg-[#5712DF] text-white" : "text-black hover:bg-slate-300"} transition-all p-4 rounded`}>
                                日本語
                            </button>
                            <button onClick={() => setNewLenguage("po")} className={`${(newLanguage === "po") ? "bg-[#5712DF] text-white" : "text-black hover:bg-slate-300"} transition-all p-4 rounded`}>
                                Português
                            </button>
                            <button onClick={() => setNewLenguage("hi")} className={`${(newLanguage === "hi") ? "bg-[#5712DF] text-white" : "text-black hover:bg-slate-300"} transition-all p-4 rounded`}>
                                हिंदी
                            </button>
                            <button onClick={() => setNewLenguage("ru")} className={`${(newLanguage === "ru") ? "bg-[#5712DF] text-white" : "text-black hover:bg-slate-300"} transition-all p-4 rounded`}>
                                Русский
                            </button>
                        </div>
                        <div className='flex justify-end items-end mt-6'>
                            <button onClick={changeSummariesLanguageDB} type='button' className={`${newLanguage === "" ? "bg-slate-300 text-black" : "bg-[#5712DF] text-white"} py-2 px-3 rounded`}>{changeLanguage}</button>
                        </div>
                    </div>
                </div>
            }

            <ToastContainer
                pauseOnHover
                theme="colored"
            />

            <Navbar
                changeLanguage={changeLanguage}
                homeLink={homeLink}
                productLink={productLink}
                pricingLink={pricingLink}
                accountLink={accountLink}
            />
            <main className="flex justify-center px-[10%]">

                <div className="md:w-[60%] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
                    <div className={`${cardType()} h-24 p-6`}>
                        <h1 className="text-white font-bold">{showAccessStatus()}</h1>
                    </div>
                    <div className="p-6">
                        <div>
                            <span className="text-[0.8rem] opacity-50">{nameInput}</span>
                            <p>{userInfo.username}</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-[0.8rem] opacity-50">{emailInput}</span>
                            <p>{userInfo.email}</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-[0.8rem] opacity-50">{availableCreditsInput}</span>
                            <p>{addDotsToNumber(Math.round(parseInt(userInfo.credits)))}</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-[0.8rem] opacity-50">{summariesLanguage}</span>
                            <p>{modifyLenguageOfSummaries(userInfo.summariesLanguage)}</p>
                        </div>

                        <div className='flex flex-col items-start justify-start overflow-hidden '>
                            <button type='button' onClick={changeSummariesLanguage} className="text-[#5712DF] rounded-lg mb-4 text-start"><FontAwesomeIcon className='mr-1' icon={faLanguage} /> {changeLanguageSummaries}</button>
                            <button type='button' onClick={logOut} className="text-[#5712DF] rounded-lg"><FontAwesomeIcon className='mr-1' width={20} height={20} icon={faRightFromBracket} /> {logOutButton}</button>
                        </div>

                    </div>
                </div>

            </main>

            <Footer
                copywright={copywright}
                supportTitle={supportTitle}
                supportLink1={supportLink1}
                supportLink2={supportLink2}
                companyTitle={companyTitle}
                companytLink1={companytLink1}
                companytLink2={companytLink2}
            />
        </>

    )
};