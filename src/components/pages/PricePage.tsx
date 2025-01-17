"use client"
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import { PriceBox } from '../ui/PriceBox';
import { AuthRequest } from '@/helpers/requests/AuthRequest';
import { useState } from "react";
import { LoadingClient } from "../ui/loaders/LoadingClient";

interface PriceWraperInterface {
        boxOneTitle: string,
        boxTwoTitle: string,
        desc: string,
        bestValue: string,
        month: string,
        buyButton: string,
        listAdvantagesMonthPlan: Array<string>,
        listAdvantagesYearPlan: Array<string>,
}

export const PriceWraper = (
        {
                boxOneTitle,
                boxTwoTitle,
                desc,
                listAdvantagesMonthPlan,
                listAdvantagesYearPlan,
                bestValue,
                month,
                buyButton,
        }: PriceWraperInterface
) => {

        const router = useRouter();
        const [isLoading, setisLoading] = useState(false);

        const buyAccess = async (accessType: string) => {

                const token = Cookies.get("x-token");

                if (!token) {
                        router.push("/auth/register");
                        return;
                };

                setisLoading(true);

                try {

                        const response = await AuthRequest(token, "POST", "/api/payment/checkout", { accessType });
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

        if (isLoading) {
                return <LoadingClient />
        }

        return (
                <div className='md:flex-row md:px-4 md:justify-start md:items-start flex flex-col items-center justify-center'>
                        <PriceBox
                                bestValue={bestValue}
                                buyButton={buyButton}
                                type={"month"}
                                billedAnnually={false}
                                actionButton={buyAccess}
                                price={"4.99"}
                                textMonth={month}
                                characteristics={[
                                        listAdvantagesMonthPlan[0],
                                        listAdvantagesMonthPlan[1],
                                        listAdvantagesMonthPlan[2],
                                ]}
                                title={boxOneTitle}
                                desc={desc}
                        />
                        <PriceBox
                                bestValue={bestValue}
                                buyButton={buyButton}
                                type={"year"}
                                billedAnnually={true}
                                actionButton={buyAccess}
                                price={"2.99"}
                                textMonth={month}
                                characteristics={[
                                        listAdvantagesYearPlan[2],
                                        listAdvantagesYearPlan[0],
                                        listAdvantagesYearPlan[1],
                                        listAdvantagesYearPlan[3],
                                ]}
                                title={boxTwoTitle}
                                desc={desc}
                        />
                </div>
        )
}

