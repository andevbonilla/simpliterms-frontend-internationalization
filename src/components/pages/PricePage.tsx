"use client"
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import { PriceBox } from '../ui/PriceBox';
import { AuthJsonRequest } from '@/helpers/requests/AuthJsonRequest';
import { useState } from "react";
import { LoadingClient } from "../ui/loaders/LoadingClient";

export const PriceWraper = () => {

        const router = useRouter();
        const [isLoading, setisLoading] = useState(false);

        const buyMonthAccess = async () => {

                const token = Cookies.get("x-token");

                if (!token) {
                        router.push("/auth/register");
                        return;
                };

                setisLoading(true);

                try {

                        const response = await AuthJsonRequest(token, "POST", "/api/payment/checkout", {});
                        if (response.isError !== "") {
                                // show error alert
                                setisLoading(false);
                                return;
                        };

                        // show success alert
                        setisLoading(false);
                        if (response.data.url && response.data.url.length > 0) {
                                router.push(response.data.url);
                        }

                } catch (error) {
                        console.log(error, "error buy monthly access.");
                        setisLoading(false);
                }

        };

        const buyYearAccess = () => {

        };

        if (isLoading) {
                return <LoadingClient />
        }

        return (
                <div className='md:flex-row md:px-4 md:justify-start md:items-start flex flex-col items-center justify-center'>
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
                                        "Saves $24",
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

