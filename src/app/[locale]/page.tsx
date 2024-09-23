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


export default function HomePage() {

    const navbari18n = useTranslations('Navbar');
    const part1i18n = useTranslations('Part1');
    const summaryExamplei18n = useTranslations('SummariesPart');
    const howitworksi18n = useTranslations('HowItWorksPart');
    const advantagesi18n = useTranslations('AdvantagesPart');

    return (
        <>
            <Navbar
                changeLanguage={navbari18n("changeLanguage")}
                homeLink={navbari18n("homeLink")}
                productLink={navbari18n("productLink")}
                pricingLink={navbari18n("pricingLink")}
                accountLink={navbari18n("accountLink")}
            />
            <main className='px-[10%]'>

                <h2 className={`mb-5 mt-14 text-5xl font-bold text-center ${bebas.className}`} id="home">
                    {part1i18n("TitlePart1")} <span className="text-[#5712DF]">{part1i18n("TitlePart2")}</span> {part1i18n("TitlePart3")} <span className="text-[#5712DF]">{part1i18n("TitlePart4")}</span> {part1i18n("TitlePart5")} <span className="text-[#5712DF]">{part1i18n("TitlePart6")}</span> {part1i18n("TitlePart7")}
                </h2>

                <p className="my-10 text-lg text-center opacity-60 mx-[5%] lg:mx-[15%]">
                    {part1i18n("Subtitle")}
                </p>

                <div className="flex justify-center mb-12">
                    <Link title="Extension Link" target="_blank" href={"https://chrome.google.com/webstore/detail/simpliterms/fnobmoedmogehbcdcmjojaebjhegalce"} className="hover:bg-[#6324DF] transition-all rounded bg-[#5712DF] text-white font-bold border-none px-6 py-4 text-xl brightness">{part1i18n("ButtonStart")}</Link>
                </div>

                <div className="md:grid-cols-2 grid grid-cols-1 gap-4">
                    <div className="md:mr-2">
                        <BoxExample
                            summarieText1={summaryExamplei18n("summarieText1")}
                            summarieHeader1={summaryExamplei18n("summarieHeader1")}
                            summarieText2={summaryExamplei18n("summarieText2")}
                            summarieHeader2={summaryExamplei18n("summarieHeader2")}
                            summarieText3={summaryExamplei18n("summarieText3")}
                            summarieHeader3={summaryExamplei18n("summarieHeader3")}
                            summarieText4={summaryExamplei18n("summarieText4")}
                            summarieHeader4={summaryExamplei18n("summarieHeader4")}
                            summarieText5={summaryExamplei18n("summarieText5")}
                            summarieHeader5={summaryExamplei18n("summarieHeader5")}
                            summarieText6={summaryExamplei18n("summarieText6")}
                            summarieHeader6={summaryExamplei18n("summarieHeader6")}
                            title={summaryExamplei18n("header1")}
                            iframa="https://policies.google.com/terms?gl=CO&hl=es"
                        />
                    </div>
                    <BoxExample
                        summarieText1={summaryExamplei18n("summarieText1")}
                        summarieHeader1={summaryExamplei18n("summarieHeader1")}
                        summarieText2={summaryExamplei18n("summarieText2")}
                        summarieHeader2={summaryExamplei18n("summarieHeader2")}
                        summarieText3={summaryExamplei18n("summarieText3")}
                        summarieHeader3={summaryExamplei18n("summarieHeader3")}
                        summarieText4={summaryExamplei18n("summarieText4")}
                        summarieHeader4={summaryExamplei18n("summarieHeader4")}
                        summarieText5={summaryExamplei18n("summarieText5")}
                        summarieHeader5={summaryExamplei18n("summarieHeader5")}
                        summarieText6={summaryExamplei18n("summarieText6")}
                        summarieHeader6={summaryExamplei18n("summarieHeader6")}
                        title={summaryExamplei18n("header2")}
                        iframa=""
                    />
                </div>

                <div className="pt-12 flex flex-col items-center md:px-[20%]" id="product">
                    <h3 className={`font-bold text-3xl pt-6 pb-6 text-center ${bebas.className} underline decoration-[#5712DF] underline-offset-8`}>{howitworksi18n("title")}</h3>
                    <iframe loading="lazy" className="w-full h-[12rem] md:h-[20rem]" src="https://www.youtube.com/embed/NRxX0Wjjrpk?si=6MF0aHGxmCFjOfr7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className="pt-12 pb-6 lg:mx-[10%]">
                    <h3 className={`mb-10 font-bold text-3xl pt-6 text-center ${bebas.className} underline decoration-[#5712DF] underline-offset-8`}>{advantagesi18n("title")}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <Advantage id={1}
                            title={advantagesi18n("Advantage1Title")}
                            text={advantagesi18n("Advantage1Text")}
                        />
                        <Advantage id={2}
                            title={advantagesi18n("Advantage2Title")}
                            text={advantagesi18n("Advantage2Text")}
                        />
                        <Advantage id={3}
                            title={advantagesi18n("Advantage3Title")}
                            text={advantagesi18n("Advantage3Text")}
                        />
                        <Advantage id={4}
                            title={advantagesi18n("Advantage4Title")}
                            text={advantagesi18n("Advantage4Text")}
                        />

                    </div>

                    <div className="flex justify-center">
                        <Link title="Extension Link" target="_blank" href={"https://chrome.google.com/webstore/detail/simpliterms/fnobmoedmogehbcdcmjojaebjhegalce"} className="hover:bg-[#6324DF] mt-20 transition-all rounded bg-[#5712DF] text-white font-bold border-none px-6 py-4 text-xl brightness">{advantagesi18n("buttonDownload")}</Link>
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