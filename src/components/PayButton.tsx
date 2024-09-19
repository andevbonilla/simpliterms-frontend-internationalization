import { PayPalButtons } from '@paypal/react-paypal-js'
import React from 'react'

export const PayButton = ({token, subscribe, approve, goToLogin}: any) => {
  return (
    <div>

            {
              (token !== '') && <PayPalButtons createSubscription={subscribe} onApprove={approve} style={{ layout: "vertical", color: "gold", label: "subscribe" }} />                                           
            }
            {
              (token === '') && <button onClick={goToLogin} className="hover:bg-[#6324DF] transition-all bg-[#5712DF] w-full text-white py-2 mt-4 rounded">Subscribe now</button>
            }

    </div>
  )
}
