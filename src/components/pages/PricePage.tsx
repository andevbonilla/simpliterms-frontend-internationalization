"use client"
import { PriceBox } from '../ui/PriceBox';

export const PriceWraper = () => {

        const buyMonthAccess = () => {

        };

        const buyYearAccess = () => {

        };

        return (
                <div className='md:flex-row md:px-4 flex flex-col items-center justify-center'>
                        <PriceBox
                                billedAnnually={false}
                                actionButton={buyMonthAccess}
                                price={"4.99"}
                                textMonth={"month"}
                                characteristics={[
                                        "Privacy Policy Summaries for one month",
                                        "Terms of use Summaries for one month",
                                        "24/7 customer support"
                                ]}
                                title={"1-Month Access"}
                                desc={"Just one click on the extension will generate a very short automatic summary of the policies of the page you are on."}
                        />
                        <PriceBox
                                billedAnnually={true}
                                actionButton={buyYearAccess}
                                price={"2.99"}
                                textMonth={"month"}
                                characteristics={[
                                        "Privacy Policy Summaries for one year",
                                        "Terms of use Summaries for one year",
                                        "24/7 customer support"
                                ]}
                                title={"12-Month Access"}
                                desc={"Just one click on the extension will generate a very short automatic summary of the policies of the page you are on."}
                        />
                </div>
        )
}

