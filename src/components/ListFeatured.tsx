import Image from 'next/image'
import React from 'react'
import logoToolify from "../assets/logo-toolify.png"

export const ListFeatured = () => {
    return (
        <div className="flex flex-col justify-center items-center my-8 md:flex-row md:mt-0">
            <a title="product hunt logo" href="https://www.producthunt.com/products/simpliterms" target="_blank">
                <svg className="w-52 md:mr-10 mb-12 md:mb-0" viewBox="0 0 171 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#LogoWord_svg__clip0_1_188)"><path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="#FF6154"></path><path fillRule="evenodd" clipRule="evenodd" d="M22.6667 19.9999L17 20.0001V14.0001H22.6667C24.3235 14.0001 25.6667 15.3431 25.6667 16.9999C25.6667 18.6568 24.3235 19.9999 22.6667 19.9999ZM22.6667 9.99993H13V29.9999H17V24.0001H22.6667C26.5327 24.0001 29.6667 20.8659 29.6667 16.9999C29.6667 13.1339 26.5327 9.99993 22.6667 9.99993Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M53.3333 26.6667V13.3333H59.4588C62.3064 13.3333 63.8573 15.2577 63.8573 17.5553C63.8573 19.833 62.2873 21.7572 59.4588 21.7572H56.1217V26.6667H53.3333ZM71.0716 16.711V19.1453C70.8941 19.1062 70.6783 19.087 70.3841 19.087C69.5591 19.087 68.4589 19.5578 68.0464 20.1672V26.6667H65.5538V16.9462H68.0464V18.2228C68.7339 17.3978 69.8933 16.711 71.0716 16.711ZM77.0243 16.711C80.1663 16.711 82.0513 18.9887 82.0513 21.6788C82.0513 24.369 80.1663 26.6667 77.0243 26.6667C73.9018 26.6667 72.0166 24.369 72.0166 21.6788C72.0166 18.9887 73.9018 16.711 77.0243 16.711ZM59.0669 15.7877C60.1654 15.7877 61.0113 16.4552 61.0113 17.5553C61.0113 18.6353 60.1654 19.3028 59.0669 19.3028H56.1217V15.7877H59.0669ZM92.9559 13.3333V26.6667H90.4424V25.2133C89.6958 26.1558 88.6756 26.6667 87.5164 26.6667C85.1404 26.6667 83.3144 24.8598 83.3144 21.6788C83.3144 18.5962 85.1021 16.711 87.5164 16.711C88.6356 16.711 89.6958 17.1818 90.4424 18.1637V13.3333H92.9559ZM77.0243 18.9295C78.5944 18.9295 79.4594 20.2063 79.4594 21.6788C79.4594 23.1715 78.5944 24.4473 77.0243 24.4473C75.4718 24.4473 74.6084 23.1715 74.6084 21.6788C74.6084 20.2063 75.4718 18.9295 77.0243 18.9295ZM97.9301 16.9462V22.6998C97.9301 24.0157 98.6176 24.4473 99.6778 24.4473C100.64 24.4473 101.406 23.9173 101.838 23.3673V16.9462H104.332V26.6667H101.838V25.2332C101.19 25.94 100.052 26.6667 98.5009 26.6667C96.4191 26.6667 95.4374 25.5275 95.4374 23.6815V16.9462H97.9301ZM119.621 14.3542V16.9462H121.544V19.1262H119.621V23.3873C119.621 23.9957 119.934 24.4473 120.484 24.4473C120.857 24.4473 121.212 24.3098 121.348 24.1532L121.879 26.0575C121.506 26.3917 120.838 26.6667 119.797 26.6667C118.049 26.6667 117.127 25.7633 117.127 24.0548V19.1262H115.557V16.9462H117.127V14.3542H119.621ZM131.332 13.3333V18.4778H137.518V13.3333H140.326V26.6667H137.518V20.913H131.332V26.6667H128.545V13.3333H131.332ZM145.342 16.9462V22.6998C145.342 24.0157 146.029 24.4473 147.089 24.4473C148.052 24.4473 148.818 23.9173 149.25 23.3673V16.9462H151.744V26.6667H149.25V25.2332C148.602 25.94 147.464 26.6667 145.913 26.6667C143.831 26.6667 142.849 25.5275 142.849 23.6815V16.9462H145.342ZM168.604 14.3542V16.9462H170.528V19.1262H168.604V23.3873C168.604 23.9957 168.918 24.4473 169.468 24.4473C169.84 24.4473 170.195 24.3098 170.333 24.1532L170.862 26.0575C170.49 26.3917 169.821 26.6667 168.78 26.6667C167.033 26.6667 166.11 25.7633 166.11 24.0548V19.1262H164.54V16.9462H166.11V14.3542H168.604ZM111.231 16.711C113.176 16.711 114.354 17.5553 114.983 18.4195L113.352 19.9505C112.901 19.2828 112.213 18.9295 111.35 18.9295C109.837 18.9295 108.777 20.0295 108.777 21.6788C108.777 23.3282 109.837 24.4473 111.35 24.4473C112.213 24.4473 112.901 24.0548 113.352 23.4065L114.983 24.9383C114.354 25.8025 113.176 26.6667 111.231 26.6667C108.325 26.6667 106.205 24.6048 106.205 21.6788C106.205 18.7728 108.325 16.711 111.231 16.711ZM160.036 16.711C162.137 16.711 163.138 17.8887 163.138 19.7345V26.6667H160.624V20.6972C160.624 19.3812 159.938 18.9295 158.877 18.9295C157.895 18.9295 157.15 19.4795 156.717 20.0295V26.6667H154.224V16.9462H156.717V18.1637C157.326 17.457 158.504 16.711 160.036 16.711ZM88.3014 18.9295C89.1266 18.9295 90.0299 19.3812 90.4424 20.0097V23.3673C90.0299 23.9957 89.1266 24.4473 88.3014 24.4473C86.8689 24.4473 85.8871 23.3282 85.8871 21.6788C85.8871 20.0488 86.8689 18.9295 88.3014 18.9295Z" fill="#FF6154"></path></g><defs><clipPath id="LogoWord_svg__clip0_1_188"><rect width="171" height="40" fill="white"></rect></clipPath></defs></svg>
            </a>
            <a title="product hunt logo" href="https://www.toolify.ai/tool/simpliterms" target="_blank">
                <Image
                    src={logoToolify}
                    alt='Simpliterms Reviews: Details, Pricing, Core features, Use cases, Simpliterms alternatives'
                    width={200}
                    height={200}
                />
            </a>
        </div>
    )
}
