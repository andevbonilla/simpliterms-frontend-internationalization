import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react';


const ContactPage = () => {
    return (
        <>
            <Navbar language={""} />
            <main className='px-[10%]'>
                <h1 className='text-3xl font-bold text-[#5712DF]'>Contact Us</h1>
                <div className='mt-6'>
                    <h2 className='font-bold text-[#5712DF] text-opacity-80'>Email:</h2>
                    <p>You can contact us through the following email: <span className='font-bold'>contact@simpliterms.com</span></p>
                </div>
            </main>
            <Footer language={""} />
        </>
    )
}

export default ContactPage;