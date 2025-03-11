interface BoxExampleInterface {
  title: string,
  iframa: string
}

export const BoxExample = (
  {
    title,
    iframa,
  }: BoxExampleInterface) => {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-gray-100 border-cyan-950 border-2 border-solid rounded-md">
      <h3 className={`font-bold ${(iframa.length === 0) ? 'bg-[#5712DF] text-white' : 'bg-gray-300'} px-4 py-3 text-lg`}>{title}</h3>
      {(iframa.length > 0) && <iframe title="Google's Terms of service" className="h-[25rem] w-full overflow-scroll pb-4" src="https://policies.google.com/terms"></iframe>}
      {(iframa.length === 0) &&
        <div className="h-[25rem] overflow-scroll pb-4 text-base">

              {/* odometer */}
              <div className="flex mt-[2rem] justify-center items-center bg-[#F5F5F5] rounded-[2rem] py-[1rem] px-[2rem]">        
                {/* taffic light */}
                <div className="bg-black rounded-[1rem] py-[.5rem] px-[.8rem]">
                  <div className="w-[1.3rem] h-[1.3rem] rounded-full opacity-50 mb-[.4rem] bg-[red]" id="red-ball"></div>
                  <div className="w-[1.3rem] h-[1.3rem] rounded-full opacity-50 mb-[.4rem] bg-[yellow]" id="yellow-ball"></div>
                  <div className="w-[1.3rem] h-[1.3rem] rounded-full opacity-50 bg-[#00B600]" id="green-ball"></div>
                </div>
                {/* grade esplanation */}
                <div className="ml-[2rem]">
                  <h2 className="text-[.9rem] font-bold mb-[.1rem]">
                      Moderate
                  </h2>
                  <p>
                    
                  </p>
                </div>
              </div>

              <ul id="simpli-summary-terms" className="simpli-summary">
                <div>
                  <h3>HGJDHGJ</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid repellendus, vero expedita quis, illum enim officia eos eveniet necessitatibus ratione eligendi sint repudiandae doloremque.</p>
                </div>  
                <div>
                  <h3>HGJDHGJ</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid repellendus, vero expedita quis, illum enim officia eos eveniet necessitatibus ratione eligendi sint repudiandae doloremque.</p>
                </div>
                <div>
                  <h3>HGJDHGJ</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid repellendus, vero expedita quis, illum enim officia eos eveniet necessitatibus ratione eligendi sint repudiandae doloremque.</p>
                </div>
              </ul>

        </div>
      }

    </div>
  )
}
