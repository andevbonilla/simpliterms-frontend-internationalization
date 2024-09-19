import React from 'react'

export const FreePayButton = ({ planType, token, goToLogin, freeSubscription }: any) => {
  return (
    <div>

      {
        (token !== '' && (planType.toLowerCase() === "" || planType.toLowerCase() === "free")) && <button onClick={freeSubscription} className="hover:bg-[#EEB632] transition-all bg-[#ffc439] w-full text-[#625531ff] py-2 mt-4 rounded">Subscribe now</button>
      }
      {
        (token === '') && <button onClick={goToLogin} className="hover:bg-[#6324DF] transition-all bg-[#5712DF] w-full text-white py-2 mt-4 rounded">Subscribe now</button>
      }

    </div>
  )
}
