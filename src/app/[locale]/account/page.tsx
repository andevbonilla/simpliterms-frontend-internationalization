import { AccountWraper } from "@/components/pages/AccountWraper";
import { useTranslations } from "next-intl";

const AccountPage = () => {

    const accounti18n = useTranslations('AccountPage');

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
            homeLink={accounti18n("homeLink")}
            productLink={accounti18n("productLink")}
            pricingLink={accounti18n("pricingLink")}
            accountLink={accounti18n("accountLink")}
            copywright={accounti18n("copywright")}
            supportTitle={accounti18n("supportTitle")}
            supportLink1={accounti18n("supportLink1")}
            supportLink2={accounti18n("supportLink2")}
            companyTitle={accounti18n("companyTitle")}
            companytLink1={accounti18n("companytLink1")}
            companytLink2={accounti18n("companytLink2")}
        />

    )
};

export default AccountPage;