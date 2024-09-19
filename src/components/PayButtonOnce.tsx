"use client"
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import React from 'react'

export const PayButtonOnce = ({createOrder, onApprove}:any) => {

    const [{ isPending, isResolved, isRejected }] = usePayPalScriptReducer();
    
    return (
        <>

                {
                    isPending && <p>Loading...</p>
                }

                {
                    isRejected && <p>There was an error loading the paypal button</p>
                }

                {
                    isResolved && <PayPalButtons 
                                    style={{ layout: "vertical", color: "gold", label: "buynow"  }} 
                                    createOrder={createOrder}
                                    onApprove={onApprove}
                                />
                }

        </>
    )
}
