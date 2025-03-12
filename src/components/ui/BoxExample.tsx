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
        <div className="h-[25rem] overflow-scroll p-8 text-base">

          {/* odometer */}
          <div className="flex mt-[2rem] justify-center items-center bg-[#dddddd] rounded-[2rem] py-[1.2rem] px-[2rem] w-auto">
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
                Estas políticas imponen obligaciones estrictas y precisas que regulan la relación entre el usuario y Google, lo que implica un compromiso serio.
              </p>
            </div>
          </div>

          <ul id="simpli-summary-terms" className="simpli-summary">
            <div className="mb-3">
              <h3 className="font-bold text-[.8rem]">Requisitos de Edad y Responsabilidad</h3>
              <p>Es obligatorio cumplir con la edad mínima para gestionar una Cuenta de Google; si no se cumple, se requiere permiso de un tutor legal, quien será responsable del uso del servicio. Algunos servicios tienen requisitos adicionales.</p>
            </div>
            <div className="mb-3">
              <h3 className="font-bold text-[.8rem]">Relación y Expectativas</h3>
              <p>Define lo que el usuario puede esperar de Google y las obligaciones que debe cumplir, estableciendo un marco contractual claro.</p>
            </div>
            <div className="mb-3">
              <h3 className="font-bold text-[.8rem]">Contenido y Propiedad Intelectual</h3>
              <p>Regula los derechos sobre el contenido generado, tanto por el usuario como por Google, y establece licencias y restricciones.</p>
            </div>
            <div className="mb-3">
              <h3 className="font-bold text-[.8rem]">Conducta y Uso Prohibido</h3>
              <p>Establece normas estrictas que prohíben abusos, fraudes, hacking y comportamientos dañinos, garantizando un entorno seguro.</p>
            </div>
          </ul>

        </div>
      }

    </div>
  )
}
