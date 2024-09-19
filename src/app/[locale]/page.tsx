import Image from 'next/image';
import PricePage from '@/components/PricePage';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Navbar } from '@/components/Navbar';
import { BoxExample } from '@/components/BoxExample';
import { Advantage } from '@/components/Advantage';
import { ListFeatured } from '@/components/ListFeatured';
import { BuyMoreCredits } from '@/components/BuyMoreCredits';
import { Fqas } from '@/components/Fqas';
import { Footer } from '@/components/Footer';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
    weight: ["400"], // bold de la fuente
    subsets: ["latin"],
    display: 'swap'
});

const termsSummaryExample = [
    {
        subtitle: "Provider and Location",
        text: "Google's services are provided by Google LLC, a company registered in Delaware, USA, headquartered in Mountain View, California."
    },
    {
        subtitle: "Minimum Age and Responsibility",
        text: "If you're under 18, you need parental permission to use the services. Parents are responsible for their children's activities."
    },
    {
        subtitle: "Relationship with Google",
        text: "These terms define your relationship with Google, allowing you to use its services under certain conditions."
    },
    {
        subtitle: "Service Offerings",
        text: "Google offers various services, including apps, platforms, and devices designed to work together for an improved user experience."
    },
    {
        subtitle: "Your Responsibility",
        text: "Comply with terms, policies, laws, and respect intellectual property. Avoid abusing services or causing harm."
    },
    {
        subtitle: "Permission to Use Your Content",
        text: "When using services that involve sharing content, you grant Google a license to use your content based on specific terms and restrictions."
    },
    {
        subtitle: "Using Your Account",
        text: "You can create a Google account if you meet age requirements. You're responsible for its use and security."
    },
    {
        subtitle: "Disputes and Responsibilities",
        text: "Google provides services with reasonable competency, and both parties have rights and responsibilities in case of issues."
    }
];

export default function HomePage() {

    const t = useTranslations('HomePage');

    return (
        <>
            <Navbar language={""} />
            <main className='px-[10%]'>

                <h2 className={`mb-5 mt-14 text-5xl font-bold text-center ${bebas.className}`} id="home">
                    Do not blindly accept <span className="text-[#5712DF]">terms</span> and <span className="text-[#5712DF]">privacy policies</span> again. <span className="text-[#5712DF]">SimpliTerms</span> summarizes what&apos;s <span className="text-[#5712DF]">important</span>.
                </h2>

                <p className="my-10 text-lg text-center opacity-60 mx-[5%] lg:mx-[15%]">
                    Privacy and Usage terms usually range from 3,000 to 10,000+ words. SimpliTerms generates summaries of 100-300 words, highlighting crucial points for user acceptance.
                </p>

                <div className="flex justify-center mb-12">
                    <Link title="Extension Link" target="_blank" href={"https://chrome.google.com/webstore/detail/simpliterms/fnobmoedmogehbcdcmjojaebjhegalce"} className="hover:bg-[#6324DF] transition-all rounded bg-[#5712DF] text-white font-bold border-none px-6 py-4 text-xl brightness">Start for FREE!</Link>
                </div>

                <div className="md:grid-cols-2 grid grid-cols-1 gap-4">
                    <div className="md:mr-2">
                        <BoxExample summary={termsSummaryExample}
                            date={'10 de agosto'}
                            host={'policies.google.com'}
                            title="Original"
                            iframa="https://policies.google.com/terms?gl=CO&hl=es"
                        />
                    </div>
                    <BoxExample summary={termsSummaryExample}
                        date={'10 de agosto'}
                        host={'policies.google.com'}
                        title="Summary by SimpliTerms"
                        iframa=""
                    />
                </div>

                <div className="pt-12 flex flex-col items-center md:px-[20%]" id="product">
                    <h3 className={`font-bold text-3xl pt-6 pb-6 text-center ${bebas.className} underline decoration-[#5712DF] underline-offset-8`}>HOW IT WORKS?</h3>
                    <iframe loading="lazy" className="w-full h-[12rem] md:h-[20rem]" src="https://www.youtube.com/embed/NRxX0Wjjrpk?si=6MF0aHGxmCFjOfr7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className="pt-12 pb-6 lg:mx-[10%]">
                    <h3 className={`mb-10 font-bold text-3xl pt-6 text-center ${bebas.className} underline decoration-[#5712DF] underline-offset-8`}>Advantages of using SimpliTerms</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <Advantage id={1}
                            title={"Saves time"}
                            text={"Find out what you agree to without having to spend hours reading privacy policies and terms of use."}
                        />
                        <Advantage id={2}
                            title={"Avoid problems"}
                            text={"Avoid having legal problems with a company for accepting policies that you would not have wanted to accept."}
                        />
                        <Advantage id={3}
                            title={"Protect your privacy"}
                            text={"Find out what data each website extracts from you with just one click."}
                        />
                        <Advantage id={4}
                            title={"Easy to use"}
                            text={"By simply clicking on the simpliterms extension you will get a summary of the policies of the page you are on."}
                        />

                    </div>

                    <div className="flex justify-center">
                        <Link title="Extension Link" target="_blank" href={"https://chrome.google.com/webstore/detail/simpliterms/fnobmoedmogehbcdcmjojaebjhegalce"} className="hover:bg-[#6324DF] mt-20 transition-all rounded bg-[#5712DF] text-white font-bold border-none px-6 py-4 text-xl brightness">Download now the extension</Link>
                    </div>

                </div>


                <div className="pt-12 pb-6" id="pricing">
                    <h3 className={`font-bold text-3xl pt-6 text-center ${bebas.className} underline decoration-[#5712DF] underline-offset-8`}>PRICING</h3>
                </div>

                <PricePage language={"en"} />

                <div className="md:px-[15%]">
                    <h2 className={`font-bold text-3xl py-16 text-center ${bebas.className} underline decoration-[#5712DF] underline-offset-8`}>Featured on</h2>
                    <ListFeatured />
                </div>

                <div className="md:px-[15%] flex flex-col items-center justify-center">
                    <h2 className={`font-bold text-3xl py-16 text-center ${bebas.className} underline decoration-[#5712DF] underline-offset-8`}>Example of use</h2>
                    <Image
                        src={require('@/assets/example.png')}
                        alt='example'
                        width={700}
                        height={700}
                    />
                </div>

                <div id="buycredits"></div>
                <div className="pt-12 flex flex-col items-center md:px-[20%]">
                    <h3 className={`font-bold text-3xl pt-6 pb-6 text-center ${bebas.className} underline decoration-[#5712DF] underline-offset-8`}>DO YOU NEED MORE CREDITS?</h3>
                    <BuyMoreCredits />
                </div>


                <div className="md:px-[15%]" id="fqas">
                    <h2 className={`font-bold text-3xl py-16 text-center ${bebas.className} underline decoration-[#5712DF] underline-offset-8`}>Frequently asked questions</h2>
                    <Fqas language={""} />
                </div>


            </main>
            <Footer language={""} />
        </>
    )
}