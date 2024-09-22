import React from 'react';
import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Terms of Use"
}

const TermsOfUse = () => {
  return (
    <>
      <Navbar language={""} />
      <main className='px-[10%]'>
        <h1 className='font-bold text-3xl mt-4 text-[#5712DF]'>Terms and Conditions of Use</h1>
        <p className='py-4'>It is a necessary requirement for the acquisition of the products offered on this site, that you read and accept the following Terms and Conditions that are written below. The use of our services as well as the purchase of our products It will imply that you have read and accepted the Terms and Conditions of Use in this document. All the products that are offered by our website could be created, charged, sent or presented by a third website and in such case they would be subject to their own Terms and Conditions. In some cases, to acquire a product, the user will need to register, with the entry of reliable personal data and definition of a password. The user can choose and change the password for his account administration access at any time, if he has registered and that is necessary for the purchase of any of our products. https://simpliterms.com/ does not assume responsibility in the event that you give said password to third parties. All purchases and transactions carried out through this website are subject to a confirmation and verification process, which could include verification of the stock and product availability, validation of the form of payment, validation of the invoice (if any) and compliance with the conditions required by the selected means of payment. In some cases, verification by email may be required. The prices of the products offered in this Online Store are valid only for purchases made on this website.</p>

        <h2 className='font-bold text-2xl text-[#5712DF]'>LICENCE</h2>
        <p className='py-4'>Simpliterms Through its website it grants a license for users to use the products that are sold on this website in accordance with the Terms and Conditions described in this document.</p>

        <h2 className='font-bold text-2xl text-[#5712DF]'>UNAUTHORIZED USE</h2>
        <p className='py-4'>If applicable (for sale of software, templates, or other design and programming product) you may not place one of our products, modified or unmodified, on a CD, website or any other medium and offer them for redistribution. or resale of any kind.</p>

        <h2 className='font-bold text-2xl text-[#5712DF]'>PROPERTY</h2>
        <p className='py-4'>You cannot declare intellectual or exclusive property to any of our products, modified or unmodified. All products are the property of the content providers. Unless otherwise specified, our products are provided   without any kind of warranty, express or implied. In no way will this company be liable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses resulting from the use or inability to use our products.</p>

        <h2 className='font-bold text-2xl text-[#5712DF]'>REFUND AND GUARANTEE POLICY</h2>
        <p className='py-4'>Refunds will be approved as long as the reason for the refund is because the program you subscribed to was fraud or misleading information, otherwise there will be no refund.</p>

      </main>
      <Footer language={""} />
    </>
  )
}

export default TermsOfUse;