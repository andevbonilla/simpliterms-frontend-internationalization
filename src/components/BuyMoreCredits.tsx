import Link from 'next/link';

export const BuyMoreCredits = () => {

    return (
        
        <div className='w-full md:grid md:grid-cols-2 md:gap-2'>

            <Link href={"/buy-credits/amateur"}  className={`bg-gradient-to-br from-[#5712DF] to-[#7F4EDF] text-white mt-4 w-full p-4 rounded-lg flex flex-col items-center cursor-pointer`}>
                <h3 className='font-bold mb-2'>Amateur</h3>
                <div className='flex items-center'>
                    <h4 className='font-bold text-2xl'>20.000</h4>
                    <p className='ml-2 mb-2'>credits</p>
                </div>
            </Link>

            <Link href={"/buy-credits/rich"}  className={`bg-gradient-to-br from-[#5712DF] to-[#7F4EDF] text-white mt-4 w-full p-4 rounded-lg flex flex-col items-center cursor-pointer`}>
                <h3 className='font-bold mb-2'>Rich <span className='bg-[#4EDFAC] text-sm rounded-full py-1 px-3 ml-1 text-white'>Popular</span></h3>
                <div className='flex items-center'>
                    <h4 className='font-bold text-2xl'>50.000</h4>
                    <p className='ml-2 mb-2'>credits</p>
                </div>
            </Link>

            <Link href={"/buy-credits/millionarie"}  className={`bg-gradient-to-br from-[#5712DF] to-[#7F4EDF] text-white mt-4 w-full p-4 rounded-lg flex flex-col items-center cursor-pointer`}>
                <h3 className='font-bold mb-2'>Millionarie</h3>
                <div className='flex items-center'>
                    <h4 className='font-bold text-2xl'>100.000</h4>
                    <p className='ml-2 mb-2'>credits</p>
                </div>
            </Link>

            <Link href={"/buy-credits/billionarie"}  className={`bg-gradient-to-br from-[#5712DF] to-[#7F4EDF] text-white mt-4 w-full p-4 rounded-lg flex flex-col items-center cursor-pointer`}>
                <h3 className='font-bold mb-2'>Billionarie <span className='bg-[#4EDFAC] text-sm rounded-full py-1 px-3 ml-1 text-white'>Best Offer</span></h3>
                <div className='flex items-center'>
                    <h4 className='font-bold text-2xl'>1.000.000</h4>
                    <p className='ml-2 mb-2'>credits</p>
                </div>
            </Link>

        </div>

    )
}
