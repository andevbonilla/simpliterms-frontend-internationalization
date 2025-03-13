interface BoxExampleInterface {
  title: string,
  iframa: string,
  ExplanationText: string,
  title1: string,
  desc1: string,
  title2: string,
  desc2: string,
  title3: string,
  desc3: string,
  title4: string,
  desc4: string,
}

export const BoxExample = (
  {
    title,
    iframa,
    ExplanationText,
    title1,
    desc1,
    title2,
    desc2,
    title3,
    desc3,
    title4,
    desc4,
  }: BoxExampleInterface) => {


  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-gray-100 border-cyan-950 border-2 border-solid rounded-md">
      <h3 className={`font-bold ${(iframa.length === 0) ? 'bg-[#5712DF] text-white' : 'bg-gray-300'} px-4 py-3 text-lg`}>{title}</h3>
      {(iframa.length > 0) && <iframe title="Google's Terms of service" className="h-[25rem] w-full overflow-scroll pb-4" src="https://policies.google.com/terms"></iframe>}
      {(iframa.length === 0) &&
        <div className="h-[25rem] overflow-scroll p-8 text-base">

          {/* odometer */}
          <div className="flex justify-center items-center bg-[#dddddd] rounded-[2rem] py-[1.2rem] px-[2rem] w-auto">
            {/* taffic light */}
            <div className="bg-black rounded-[1rem] py-[.5rem] px-[.8rem]">
              <div className="w-[1.3rem] h-[1.3rem] rounded-full opacity-50 mb-[.4rem] bg-[red]" id="red-ball"></div>
              <div className="w-[1.3rem] h-[1.3rem] rounded-full opacity-50 mb-[.4rem] yellow-light-ball-active" id="yellow-ball"></div>
              <div className="w-[1.3rem] h-[1.3rem] rounded-full opacity-50 bg-[#00B600]" id="green-ball"></div>
            </div>
            {/* grade esplanation */}
            <div className="ml-[2rem]">
              <h2 className="text-[1rem] font-bold mb-[.2rem] text-yellow-600">
                Moderate
              </h2>
              <p className="text-[.9rem]">
                {ExplanationText}
              </p>
            </div>
          </div>

          <ul id="simpli-summary-terms" className="simpli-summary">
            <div className="mb-3">
              <h3 className="font-bold text-[.8rem]">{title1}</h3>
              <p>{desc1}</p>
            </div>
            <div className="mb-3">
              <h3 className="font-bold text-[.8rem]">{title2}</h3>
              <p>{desc2}</p>
            </div>
            <div className="mb-3">
              <h3 className="font-bold text-[.8rem]">{title3}</h3>
              <p>{desc3}</p>
            </div>
            <div className="mb-3">
              <h3 className="font-bold text-[.8rem]">{title4}</h3>
              <p>{desc4}</p>
            </div>
          </ul>

        </div>
      }

    </div>
  )
}
