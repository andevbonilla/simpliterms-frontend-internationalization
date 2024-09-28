import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


export const Footer = (
  {
    copywright,
    supportTitle,
    supportLink1,
    supportLink2,
    companyTitle,
    companytLink1,
    companytLink2
  }: {
    copywright: string,
    supportTitle: string,
    supportLink1: string,
    supportLink2: string,
    companyTitle: string,
    companytLink1: string,
    companytLink2: string
  }) => {


  return (
    <footer className='bg-[#5712DF] text-white flex flex-col md:flex-row py-16 px-[10%] mt-20'>
      <div className='flex flex-col md:mr-20 items-start'>
        <h3 className='text-2xl font-bold'>SimpliTerms</h3>
        <p className='text-base'>{copywright}</p>
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
        <h4 className='font-bold pb-[0.35rem]'>{supportTitle}</h4>
        <Link title='Contact Us' className='my-[0.35rem]' href={`/contact`} aria-label="Contact Us">{supportLink1}</Link>
        <Link title='FQAs' className='my-[0.35rem]' href={`/#fqas`} aria-label="View our Most Frequently questions">{supportLink2}</Link>
      </div>
      <div className='flex flex-col'>
        <h4 className='font-bold pb-[0.35rem]'>{companyTitle}</h4>
        <Link title='Privacy' className='my-[0.35rem]' href={`/privacy`} aria-label="Our privacy policy">{companytLink1}</Link>
        <Link title='Terms of use' className='my-[0.35rem]' href={`/terms-of-use`} aria-label="Our Terms of use">{companytLink2}</Link>
      </div>
    </footer>
  )
}
