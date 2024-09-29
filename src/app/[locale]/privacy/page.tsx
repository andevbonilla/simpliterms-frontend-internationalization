import React from 'react';
import type { Metadata } from 'next';

import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Privacy"
}

const PrivacyPage = () => {

  const footeri18n = useTranslations('Footer');
  const navbari18n = useTranslations('Navbar');
  const privacyi18n = useTranslations('PrivacyPolicyPage');

  return (
    <>
      <Navbar
        changeLanguage={navbari18n("changeLanguage")}
        homeLink={navbari18n("homeLink")}
        productLink={navbari18n("productLink")}
        pricingLink={navbari18n("pricingLink")}
        accountLink={navbari18n("accountLink")}
      />
      <main className='px-[10%]'>
        <h1 className='font-bold text-3xl mt-4 text-[#5712DF]'>{privacyi18n("privacyPolicyTitle")}</h1>
        <p className='py-4'>{privacyi18n("privacyPolicyDescription")}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{privacyi18n("informationCollectedTitle")}</h2>
        <p className='py-4'>{privacyi18n("informationCollectedDescription")}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{privacyi18n("useOfCollectedInformationTitle")}</h2>
        <p className='py-4'>{privacyi18n("useOfCollectedInformationDescription")}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{privacyi18n("cookiesPolicyTitle")}</h2>
        <p className='py-4'>{privacyi18n("cookiesPolicyDescription")}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{privacyi18n("linksToThirdPartiesTitle")}</h2>
        <p className='py-4'>{privacyi18n("linksToThirdPartiesDescription")}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{privacyi18n("controlOfPersonalInformationTitle")}</h2>
        <p className='py-4'>{privacyi18n("controlOfPersonalInformationDescription")}</p>
      </main>
      <Footer
        copywright={footeri18n("copywright")}
        supportTitle={footeri18n("supportTitle")}
        supportLink1={footeri18n("supportLink1")}
        supportLink2={footeri18n("supportLink2")}
        companyTitle={footeri18n("companyTitle")}
        companytLink1={footeri18n("companytLink1")}
        companytLink2={footeri18n("companytLink2")}
      />
    </>

  )
}

export default PrivacyPage;
