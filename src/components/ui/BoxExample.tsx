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

              <div className="flex mt-[2rem] justify-center items-center bg-[#F5F5F5] rounded-[2rem] py-[1rem] px-[2rem]">
                
                <div className="bg-black rounded-[1rem] py-[.5rem] px-[.8rem]">
                  <div className="w-[]" id="red-ball"></div>
                  <div className="w-[]" id="yellow-ball"></div>
                  <div className="w-[]" id="green-ball"></div>
                </div>

                <div className="grade-explanation">
                  <h2 id="grade-level"></h2>
                  <p id="grade-text"></p>
                </div>

              </div>

              <ul id="simpli-summary-terms" className="simpli-summary">  
              </ul>

        </div>
      }

    </div>
  )
}
