import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


export const Footer = (
  {
    language
  }: any) => {

  let texts = {
    copyright: "SimpliTerms © All rights reserved.",
    header1: "SUPPORT",
    link1Header1: "Contact Us",
    link2Header1: "FAQs",
    header2: "COMPANY",
    link1Header2: "Privacy",
    link2Header2: "Terms of Use",
  }

  switch (language) {
    case "ru":
      texts = {
        copyright: "SimpliTerms © Все права защищены.",
        header1: "ПОДДЕРЖКА",
        link1Header1: "Свяжитесь с нами",
        link2Header1: "Часто задаваемые вопросы",
        header2: "КОМПАНИЯ",
        link1Header2: "Конфиденциальность",
        link2Header2: "Условия использования",
      };
      break;
    case "zh":
      texts = {
        copyright: "SimpliTerms © 版权所有。",
        header1: "支持",
        link1Header1: "联系我们",
        link2Header1: "常见问题",
        header2: "公司",
        link1Header2: "隐私政策",
        link2Header2: "使用条款",
      };
      break;
    case "fr":
      texts = {
        copyright: "SimpliTerms © Tous droits réservés.",
        header1: "SUPPORT",
        link1Header1: "Nous contacter",
        link2Header1: "FAQ",
        header2: "ENTREPRISE",
        link1Header2: "Confidentialité",
        link2Header2: "Conditions d'utilisation",
      };
      break;
    case "po":
      texts = {
        copyright: "SimpliTerms © Todos os direitos reservados.",
        header1: "SUPORTE",
        link1Header1: "Entre em contato",
        link2Header1: "Perguntas frequentes",
        header2: "EMPRESA",
        link1Header2: "Privacidade",
        link2Header2: "Termos de Uso",
      };
      break;
    case "es":
      texts = {
        copyright: "SimpliTerms © Todos los derechos reservados.",
        header1: "SOPORTE",
        link1Header1: "Contáctenos",
        link2Header1: "Preguntas frecuentes",
        header2: "EMPRESA",
        link1Header2: "Privacidad",
        link2Header2: "Términos de uso",
      };
      break;
    case "ja":
      texts = {
        copyright: "SimpliTerms © すべての権利を保有しています。",
        header1: "サポート",
        link1Header1: "お問い合わせ",
        link2Header1: "よくある質問",
        header2: "企業",
        link1Header2: "プライバシー",
        link2Header2: "利用規約",
      };
      break;
    case "hi":
      texts = {
        copyright: "SimpliTerms © सभी अधिकार सुरक्षित हैं।",
        header1: "समर्थन",
        link1Header1: "संपर्क करें",
        link2Header1: "पूछे जाने वाले प्रश्न",
        header2: "कंपनी",
        link1Header2: "गोपनीयता",
        link2Header2: "उपयोग की शर्तें",
      };
      break;
    default:
      break;
  }



  return (
    <footer className='bg-[#5712DF] text-white flex flex-col md:flex-row py-16 px-[10%] mt-20'>
      <div className='flex flex-col md:mr-20 items-start'>
        <h3 className='text-2xl font-bold'>SimpliTerms</h3>
        <p className='text-base'>{texts.copyright}</p>
        <div className='flex mt-6 mb-10'>

          <Link href={'https://www.instagram.com/simpliterms/'}
            title='instagram link'
            target='_blank'>
            <FontAwesomeIcon className='mr-[2.5rem] text-3xl w-[2.5rem] h-[2.5rem]' icon={faInstagram} />
          </Link>
          <Link href={'https://twitter.com/simpliterms'}
            title='twitter link'
            target='_blank'>
            <FontAwesomeIcon className='mr-[2.5rem] text-3xl w-[2.5rem] h-[2.5rem]' icon={faTwitter} />
          </Link>
          <Link href={'https://www.youtube.com/channel/UCDDpPZVsq9J7DfLrbuWkmlA'}
            title='youtube channel link'
            target='_blank'>
            <FontAwesomeIcon className='mr-[2.5rem] text-3xl w-[2.5rem] h-[2.5rem]' icon={faYoutube} />
          </Link>
          <Link href={'https://www.linkedin.com/company/simpliterms'}
            title='linkedin link'
            target='_blank'>
            <FontAwesomeIcon className='text-3xl w-[2.5rem] h-[2.5rem]' icon={faLinkedin} />
          </Link>


        </div>
      </div>
      <div className='flex flex-col mb-10 md:mr-14'>
        <h4 className='font-bold pb-[0.35rem]'>{texts.header1}</h4>
        <Link title='Contact Us' className='my-[0.35rem]' href={`/contact/${language}`} aria-label="Contact Us">{texts.link1Header1}</Link>
        <Link title='FQAs' className='my-[0.35rem]' href={`/${language}#fqas`} aria-label="View our Most Frequently questions">{texts.link2Header1}</Link>
      </div>
      <div className='flex flex-col'>
        <h4 className='font-bold pb-[0.35rem]'>{texts.header2}</h4>
        <Link title='Privacy' className='my-[0.35rem]' href={`/privacy/${language}`} aria-label="Our privacy policy">{texts.link1Header2}</Link>
        <Link title='Terms of use' className='my-[0.35rem]' href={`/terms-of-use/${language}`} aria-label="Our Terms of use">{texts.link2Header2}</Link>
      </div>
    </footer>
  )
}
