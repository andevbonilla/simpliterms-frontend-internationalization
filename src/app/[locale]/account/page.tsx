"use client"
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

import { googleLogout } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faLanguage, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { backendUri } from '@/helpers/url';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AskPopup } from '@/components/AskPopup';
import { LoadingComponent } from '@/components/Loading';

const AccountPage = () => {

    const notifyError = (message: string) => toast.error(message);
    const notifySuccess = (message: string) => toast.success(message);

    const [newLanguage, setNewLenguage] = useState("");
    const [showLanguagesWindow, setShowLanguagesWindow] = useState(false);

    const [userInfo, setuserInfo] = useState({
        username: 'Loading...',
        email: 'Loading...',
        credits: '0',
        planType: 'Loading...',
        uid: 'Loading...',
        summariesLanguage: ""
    });

    const [openPopup, setOpenPopup] = useState(false);
    const [texts, settexts] = useState({
        nameInput: "NAME: ",
        emailInput: "EMAIL: ",
        availableCreditsInput: "AVAILABLE CREDITS: ",
        summariesLanguage: "LANGUAGE OF SUMMARIES: ",
        changeLanguageSummaries: "Change Language of Summaries",
        cancelSubButton: "Cancel Subscription",
        logOutButton: "Log Out",
        changeLanguage: "Change Language",
        selectNewLanguage: "Select a New Language"

    })
    const [languageLink, setLanguageLink] = useState("");

    const [loading, setLoading] = useState(true);

    const obtainUserData = async () => {

        setuserInfo({
            username: Cookies.get("username") || "",
            email: Cookies.get("email") || "",
            credits: Cookies.get("credits") || "",
            planType: Cookies.get("plan-type") || "",
            uid: Cookies.get("uid") || "",
            summariesLanguage: Cookies.get("summaries-language") || ""
        })

    }

    const cardType = () => {

        if (userInfo.planType === "free") {

            return "bg-[#5712DF]";

        } else if (userInfo.planType === "basic") {

            return "bg-[#32EEB8]";

        } else if (userInfo.planType === "pro") {

            return "bg-black";

        } else {

            return "bg-gray-300";

        }

    }

    useEffect(() => {

        const language: any = localStorage.getItem("language");
        if (language !== null && language !== undefined) {
            setLanguageLink(language);
        }

        switch (language) {
            case "en":
                settexts({
                    nameInput: "NAME: ",
                    emailInput: "EMAIL: ",
                    availableCreditsInput: "AVAILABLE CREDITS: ",
                    summariesLanguage: "LANGUAGE OF SUMMARIES: ",
                    changeLanguageSummaries: "Change Language of Summaries",
                    cancelSubButton: "Cancel Subscription",
                    logOutButton: "Log Out",
                    changeLanguage: "Change Language",
                    selectNewLanguage: "Select a New Language"
                });
                break;
            case "ru":
                settexts({
                    nameInput: "ИМЯ: ",
                    emailInput: "ЭЛЕКТРОННАЯ ПОЧТА: ",
                    availableCreditsInput: "ДОСТУПНЫЕ КРЕДИТЫ: ",
                    summariesLanguage: "ЯЗЫК СУЖЕТОВ: ",
                    changeLanguageSummaries: "Изменить язык сюжетов",
                    cancelSubButton: "Отменить подписку",
                    logOutButton: "Выйти",
                    changeLanguage: "Изменить язык",
                    selectNewLanguage: "Выберите новый язык"
                });
                break;
            case "zh":
                settexts({
                    nameInput: "姓名: ",
                    emailInput: "电子邮件: ",
                    availableCreditsInput: "可用学分: ",
                    summariesLanguage: "摘要语言: ",
                    changeLanguageSummaries: "更改摘要语言",
                    cancelSubButton: "取消订阅",
                    logOutButton: "退出登录",
                    changeLanguage: "更改语言",
                    selectNewLanguage: "选择新语言"
                });
                break;
            case "fr":
                settexts({
                    nameInput: "NOM: ",
                    emailInput: "EMAIL: ",
                    availableCreditsInput: "CRÉDITS DISPONIBLES: ",
                    summariesLanguage: "LANGUE DES RÉSUMÉS: ",
                    changeLanguageSummaries: "Changer la langue des résumés",
                    cancelSubButton: "Annuler l'abonnement",
                    logOutButton: "Déconnexion",
                    changeLanguage: "Changer la langue",
                    selectNewLanguage: "Sélectionner une nouvelle langue"
                });
                break;
            case "po":
                settexts({
                    nameInput: "NOME: ",
                    emailInput: "E-MAIL: ",
                    availableCreditsInput: "CRÉDITOS DISPONÍVEIS: ",
                    summariesLanguage: "IDIOMA DOS RESUMOS: ",
                    changeLanguageSummaries: "Mudar Idioma dos Resumos",
                    cancelSubButton: "Cancelar Assinatura",
                    logOutButton: "Sair",
                    changeLanguage: "Mudar Idioma",
                    selectNewLanguage: "Selecionar um Novo Idioma"
                });
                break;
            case "es":
                settexts({
                    nameInput: "NOMBRE: ",
                    emailInput: "CORREO ELECTRÓNICO: ",
                    availableCreditsInput: "CRÉDITOS DISPONIBLES: ",
                    summariesLanguage: "IDIOMA DE LOS RESÚMENES: ",
                    changeLanguageSummaries: "Cambiar Idioma de Resúmenes",
                    cancelSubButton: "Cancelar Suscripción",
                    logOutButton: "Cerrar Sesión",
                    changeLanguage: "Cambiar Idioma",
                    selectNewLanguage: "Seleccionar un Nuevo Idioma"
                });
                break;
            case "ja":
                settexts({
                    nameInput: "名前: ",
                    emailInput: "Eメール: ",
                    availableCreditsInput: "利用可能なクレジット: ",
                    summariesLanguage: "要約の言語: ",
                    changeLanguageSummaries: "要約の言語を変更する",
                    cancelSubButton: "購読をキャンセル",
                    logOutButton: "ログアウト",
                    changeLanguage: "言語を変更",
                    selectNewLanguage: "新しい言語を選択"
                });
                break;
            case "hi":
                settexts({
                    nameInput: "नाम: ",
                    emailInput: "ईमेल: ",
                    availableCreditsInput: "उपलब्ध क्रेडिट: ",
                    summariesLanguage: "संक्षेप भाषा: ",
                    changeLanguageSummaries: "संक्षेप भाषा बदलें",
                    cancelSubButton: "सदस्यता रद्द करें",
                    logOutButton: "लॉग आउट",
                    changeLanguage: "भाषा बदलें",
                    selectNewLanguage: "नई भाषा का चयन करें"
                });
                break;
            default:
                break;
        }



        obtainUserData();

        setTimeout(() => {
            setLoading(false);
        }, 200);

    }, []);

    const logOut = () => {

        googleLogout();

        Cookies.remove('x-token', { path: '/account' });
        Cookies.remove('username', { path: '/account' });
        Cookies.remove('email', { path: '/account' });
        Cookies.remove('uid', { path: '/account' });
        Cookies.remove('plan-type', { path: '/account' });
        Cookies.remove('summaries-language', { path: '/account' });

        Cookies.remove('x-token', { path: '/' });
        Cookies.remove('username', { path: '/' });
        Cookies.remove('email', { path: '/' });
        Cookies.remove('uid', { path: '/' });
        Cookies.remove('plan-type', { path: '/' });
        Cookies.remove('summaries-language', { path: '/' });

        setTimeout(() => {
            window.location.reload();
        }, 200);

    }

    const cancelSubscription = async () => {

        if (userInfo.planType === "") {
            notifyError("There isn't a plan");
            return;
        }

        try {

            const { data: cancellationData } = await axios.put(`${backendUri}/api/payment/cancel/subscription`, {}, { headers: { 'Authorization': `Bearer ${(Cookies.get('x-token')) ? Cookies.get('x-token') : ''}` } });

            if (cancellationData.status && cancellationData.status === "success") {
                let creditsTransformed = addDotsToNumber(cancellationData.userDB.credits);
                setuserInfo({
                    ...userInfo,
                    username: cancellationData.userDB.username,
                    email: cancellationData.userDB.email,
                    credits: creditsTransformed,
                    planType: cancellationData.userDB.planType,
                    uid: cancellationData.userDB.uid,
                })
                notifySuccess("The plan has been successfully canceled");
            }

        } catch (error) {
            notifyError("Sorry there was an error trying to cancel the data");
        }

    }

    const changeSummariesLanguageDB = async () => {

        if (newLanguage === "") return;

        if (userInfo.planType === "") {
            notifyError("This option is not available for users without a plan.");
            return;
        }
        if (userInfo.planType === "free") {
            notifyError("if you have a free plan the summaries you will have are static so it will not be possible to change the language if you want to have real time summaries in more than 6 languages, upgrade to the pro or basic plan.");
            return;
        }

        try {

            const { data: languageData } = await axios.put(`${backendUri}/api/user/change-language`, { newLanguage }, { headers: { 'Authorization': `Bearer ${(Cookies.get('x-token')) ? Cookies.get('x-token') : ''}` } });

            if (languageData.status && languageData.status === "success") {
                setuserInfo({
                    ...userInfo,
                    summariesLanguage: languageData.userDB.summariesLanguage
                })
                notifySuccess(`Now all summaries you generate will be in: ${languageData.userDB.summariesLanguage}`);
                setShowLanguagesWindow(false);
            }

        } catch (error) {
            notifyError("Sorry there was an error trying to change the language");
        }
    }

    const changeSummariesLanguage = async () => {

        setShowLanguagesWindow(true);

    }

    const addDotsToNumber = (num: Number) => {
        let newArray = []
        let arrayDigits = num.toString().split('').reverse();
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
    }

    const showPopup = () => {
        setOpenPopup(true);
    }

    const hidePopup = () => {
        setOpenPopup(false);
    }

    const acceptCancel = () => {
        cancelSubscription();
        setOpenPopup(false);
    }

    const closeLanguagesWindow = () => {
        setShowLanguagesWindow(false);
    }

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
                openPopup && <AskPopup title={"Are you sure you want to cancel your subscription?"}
                    hidePopup={hidePopup}
                    acceptCancel={acceptCancel}
                />
            }

            {
                showLanguagesWindow && <div className='z-[997] fixed w-full top-0 bottom-0 left-0 bg-black bg-opacity-25 flex justify-center items-center'>
                    <div onClick={closeLanguagesWindow} className='cursor-pointer z-[998] fixed w-full top-0 bottom-0 left-0'></div>
                    <div className='bg-white p-10 rounded z-[999] overflow-y-scroll lg:overflow-hidden max-h-[80vh]'>
                        <h3 className='font-bold mb-8 text-xl'>{texts.selectNewLanguage}</h3>
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
                            <button onClick={changeSummariesLanguageDB} type='button' className={`${newLanguage === "" ? "bg-slate-300 text-black" : "bg-[#5712DF] text-white"} py-2 px-3 rounded`}>{texts.changeLanguage}</button>
                        </div>
                    </div>
                </div>
            }

            <ToastContainer
                pauseOnHover
                theme="colored"
            />

            <Navbar language={languageLink} />
            <main className="flex justify-center px-[10%]">

                <div className="md:w-[60%] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
                    <div className={`${cardType()} h-24 p-6`}>
                        <h1 className="text-white font-bold">{(userInfo.planType === "") ? "NO PLAN" : userInfo.planType.toUpperCase()}</h1>
                    </div>
                    <div className="p-6">
                        <div>
                            <span className="text-[0.8rem] opacity-50">{texts.nameInput}</span>
                            <p>{userInfo.username}</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-[0.8rem] opacity-50">{texts.emailInput}</span>
                            <p>{userInfo.email}</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-[0.8rem] opacity-50">{texts.availableCreditsInput}</span>
                            <p>{addDotsToNumber(Math.round(parseInt(userInfo.credits)))}</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-[0.8rem] opacity-50">{texts.summariesLanguage}</span>
                            <p>{modifyLenguageOfSummaries(userInfo.summariesLanguage)}</p>
                        </div>

                        <div className='flex flex-col items-start justify-start overflow-hidden '>
                            <button type='button' onClick={changeSummariesLanguage} className="text-[#5712DF] rounded-lg mb-4 text-start"><FontAwesomeIcon className='mr-1' icon={faLanguage} /> {texts.changeLanguageSummaries}</button>
                            {
                                (userInfo.planType !== "") && <button type='button' onClick={showPopup} className="text-[#5712DF] rounded-lg mb-4"><FontAwesomeIcon className='mr-1' width={20} height={20} icon={faBan} /> {texts.cancelSubButton}</button>
                            }
                            <button type='button' onClick={logOut} className="text-[#5712DF] rounded-lg"><FontAwesomeIcon className='mr-1' width={20} height={20} icon={faRightFromBracket} /> {texts.logOutButton}</button>
                        </div>

                    </div>
                </div>

            </main>

            <Footer language={languageLink} />
        </>

    )
}
export default AccountPage;