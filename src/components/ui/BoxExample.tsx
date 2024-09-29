interface BoxExampleInterface {
  title: string,
  iframa: string,
  summarieText1: string,
  summarieHeader1: string,
  summarieText2: string,
  summarieHeader2: string,
  summarieText3: string,
  summarieHeader3: string,
  summarieText4: string,
  summarieHeader4: string,
  summarieText5: string,
  summarieHeader5: string,
  summarieText6: string,
  summarieHeader6: string,
}

export const BoxExample = (
  {
    title,
    iframa,
    summarieText1,
    summarieHeader1,
    summarieText2,
    summarieHeader2,
    summarieText3,
    summarieHeader3,
    summarieText4,
    summarieHeader4,
    summarieText5,
    summarieHeader5,
    summarieText6,
    summarieHeader6,
  }: BoxExampleInterface) => {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-gray-100 border-cyan-950 border-2 border-solid rounded-md">
      <h3 className={`font-bold ${(iframa.length === 0) ? 'bg-[#5712DF] text-white' : 'bg-gray-300'} px-4 py-3 text-lg`}>{title}</h3>
      {(iframa.length > 0) && <iframe title="Google's Terms of service" className="h-[25rem] w-full overflow-scroll pb-4" src="https://policies.google.com/terms"></iframe>}
      {(iframa.length === 0) &&
        <div className="h-[25rem] overflow-scroll pb-4 text-base">

          <div className="px-4 py-[0.40rem]">
            <h2 className="font-bold">{summarieHeader1}</h2>
            <p>{summarieText1}</p>
          </div>

          <div className="px-4 py-[0.40rem]">
            <h2 className="font-bold">{summarieHeader2}</h2>
            <p>{summarieText2}</p>
          </div>

          <div className="px-4 py-[0.40rem]">
            <h2 className="font-bold">{summarieHeader3}</h2>
            <p>{summarieText3}</p>
          </div>

          <div className="px-4 py-[0.40rem]">
            <h2 className="font-bold">{summarieHeader4}</h2>
            <p>{summarieText4}</p>
          </div>

          <div className="px-4 py-[0.40rem]">
            <h2 className="font-bold">{summarieHeader5}</h2>
            <p>{summarieText5}</p>
          </div>

          <div className="px-4 py-[0.40rem]">
            <h2 className="font-bold">{summarieHeader6}</h2>
            <p>{summarieText6}</p>
          </div>

        </div>
      }

    </div>
  )
}
