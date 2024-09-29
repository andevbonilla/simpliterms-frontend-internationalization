import { AccountWraper } from "@/components/pages/AccountWraper";
import { useTranslations } from "next-intl";

const AccountPage = () => {

    const accounti18n = useTranslations('AccountPage');
    const footeri18n = useTranslations('Footer');
    const navbari18n = useTranslations('Navbar');

    return (
        <AccountWraper
            nameInput={accounti18n("nameInput")}
            emailInput={accounti18n("emailInput")}
            availableCreditsInput={accounti18n("availableCreditsInput")}
            summariesLanguage={accounti18n("summariesLanguage")}
            changeLanguageSummaries={accounti18n("changeLanguageSummaries")}
            cancelSubButton={accounti18n("cancelSubButton")}
            logOutButton={accounti18n("logOutButton")}
            changeLanguage={accounti18n("changeLanguage")}
            selectNewLanguage={accounti18n("selectNewLanguage")}

            homeLink={navbari18n("homeLink")}
            productLink={navbari18n("productLink")}
            pricingLink={navbari18n("pricingLink")}
            accountLink={navbari18n("accountLink")}

            copywright={footeri18n("copywright")}
            supportTitle={footeri18n("supportTitle")}
            supportLink1={footeri18n("supportLink1")}
            supportLink2={footeri18n("supportLink2")}
            companyTitle={footeri18n("companyTitle")}
            companytLink1={footeri18n("companytLink1")}
            companytLink2={footeri18n("companytLink2")}
        />

    )
};

export default AccountPage;