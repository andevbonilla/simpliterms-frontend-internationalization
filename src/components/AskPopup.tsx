import React from 'react';

export const AskPopup = ({title, hidePopup, acceptCancel}:any) => {
    
  return (
    <div className='fixed h-screen w-full bg-black bg-opacity-70 overflow-hidden flex justify-center items-center z-40 px-[10%] md:px-[30%]'>

        <div className='bg-white rounded-2xl p-10 text-center z-50'>

            <h3 className='font-bold text-2xl pb-10'>{title}</h3>

            <div>
                <button 
                  onClick={hidePopup} 
                  className='bg-red-500 text-white py-2 px-4 mr-10'>
                    Cancel
                </button>
                <button 
                  onClick={acceptCancel} 
                  className='bg-[#5712DF] text-white py-2 px-4'>
                    Accept
                </button>
            </div>

        </div>

    </div>
  )

}
