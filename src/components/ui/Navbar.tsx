"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLanguage, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation';

interface NavbarInterface {
    changeLanguage: any,
    homeLink: any,
    productLink: any,
    pricingLink: any,
    accountLink: any
};

export const Navbar = ({
    changeLanguage,
    homeLink,
    productLink,
    pricingLink,
    accountLink
}: NavbarInterface) => {

    const router = useRouter();

    const [menuActive, setmenuActive] = useState(false);
    const [currentCode, setcurrentCode] = useState("en");
    const [showLenguageMenu, setshowLenguageMenu] = useState(false);

    useEffect(() => {
        setcurrentCode(localStorage.getItem("lang-code") || "en")
    }, []);


    const handleMenu = () => {
        setmenuActive(!menuActive)
    }

    const goToLink = () => {
        setmenuActive(false)
    }

    const closeMenuWindow = () => {
        setshowLenguageMenu(false);
    }

    const openMenuWindow = () => {
        setshowLenguageMenu(true);
    }

    const setNewLenguage = (link: string, code: string) => {
        router.replace(link);
        localStorage.setItem("lang-code", code);
        setcurrentCode(code);
    }

    return (
        <>
            <nav className='flex justify-between items-center w-full py-12 px-[10%] z-50'>

                {
                    showLenguageMenu && <div className='z-[997] fixed w-full top-0 bottom-0 left-0 bg-black bg-opacity-25 flex justify-center items-center'>
                        <div onClick={closeMenuWindow} className='cursor-pointer z-[998] fixed w-full top-0 bottom-0 left-0'></div>
                        <div className='bg-white p-10 rounded z-[999] overflow-y-scroll lg:overflow-hidden max-h-[80vh]'>
                            <h3 className='font-bold mb-8 text-xl'>{changeLanguage}</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                                <button onClick={() => setNewLenguage("/en", "en")} className={`${(location.pathname === "/en") ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                    English
                                </button>
                                <button onClick={() => setNewLenguage("/es", "es")} className={`${(location.pathname === "/es") ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                    Español
                                </button>
                                <button onClick={() => setNewLenguage("/fr", "fr")} className={`${(location.pathname === "/fr") ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                    Français
                                </button>
                                <button onClick={() => setNewLenguage("/zh", "zh")} className={`${(location.pathname === "/zh") ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                    中文繁體
                                </button>
                                <button onClick={() => setNewLenguage("/ja", "ja")} className={`${(location.pathname === "/ja") ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                    日本語
                                </button>
                                <button onClick={() => setNewLenguage("/pt", "pt")} className={`${(location.pathname === "/po") ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                    Português
                                </button>
                                <button onClick={() => setNewLenguage("/hi", "hi")} className={`${(location.pathname === "/hi") ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                    हिंदी
                                </button>
                                <button onClick={() => setNewLenguage("/ru", "ru")} className={`${(location.pathname === "/ru") ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                    Русский
                                </button>
                            </div>
                        </div>
                    </div>
                }

                <Link href={`/${currentCode}`} title='logo'>
                    <Image
                        src={require('../../assets/simpliterms-logo.png')}
                        alt='logo image'
                        width={60}
                        height={60}
                        className='rounded-full'
                    />
                </Link>

                <div className='hidden md:block'>
                    <ul className='flex items-center text-[#5712DF]'>
                        <li className='pr-5'>
                            <Link onClick={goToLink} className='text-xl font-bold' href={`/#home`}>{homeLink}</Link>
                        </li>
                        <li className='pr-5'>
                            <Link onClick={goToLink} className='text-xl font-bold' href={`/#product`}>{productLink}</Link>
                        </li>
                        <li className='pr-5'>
                            <Link onClick={goToLink} className='text-xl font-bold' href={`/#pricing`}>{pricingLink}</Link>
                        </li>
                        <li className='mr-4'>
                            <Link onClick={goToLink} className='text-xl font-bold' href={`${currentCode}/account`}>{accountLink}</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className='cursor-pointer' icon={faLanguage} size='2x' onClick={openMenuWindow} />
                        </li>
                    </ul>
                </div>

                <div className='md:hidden flex items-center'>
                    <FontAwesomeIcon className='cursor-pointer text-[#5712DF] mr-4' icon={faLanguage} size='2x' onClick={openMenuWindow} />
                    <FontAwesomeIcon icon={faBars}
                        className='text-[3rem] text-[#5712DF] cursor-pointer'
                        onClick={handleMenu}
                    />
                </div>

                {menuActive && (
                    <div className='bg-[#5712DF] w-full z-50 fixed top-0 left-0 h-screen flex justify-center items-center'>
                        <ul className='flex flex-col items-center text-white'>
                            <li>
                                <FontAwesomeIcon icon={faXmark}
                                    className='text-[3rem] cursor-pointer'
                                    onClick={handleMenu}
                                />
                            </li>
                            <li className='py-4'>
                                <Link onClick={goToLink} className='text-2xl font-bold' href={`/#home`}>{homeLink}</Link>
                            </li>
                            <li className='py-4'>
                                <Link onClick={goToLink} className='text-2xl font-bold' href={`/#pricing`}>{productLink}</Link>
                            </li>
                            <li className='py-4'>
                                <Link onClick={goToLink} className='text-2xl font-bold' href={`/#product`}>{pricingLink}</Link>
                            </li>
                            <li className='py-4'>
                                <Link onClick={goToLink} className='text-2xl font-bold' href={`${currentCode}/account`}>{accountLink}</Link>
                            </li>
                        </ul>
                    </div>
                )}

            </nav>
        </>
    )
}
