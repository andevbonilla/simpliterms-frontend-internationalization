import { RegisterWraper } from "@/components/auth/RegisterWraper";
import { useTranslations } from "next-intl";

const SigninPage = () => {

  const registerPagei18n = useTranslations('RegisterPage');

  return (
    <RegisterWraper
      signUp={registerPagei18n("signUp")}
      googleButton={registerPagei18n("googleButton")}
      namePlaceholder={registerPagei18n("namePlaceholder")}
      emailPlaceholder={registerPagei18n("emailPlaceholder")}
      passwordPlaceholder={registerPagei18n("passwordPlaceholder")}
      repeatPasswordPlaceholder={registerPagei18n("repeatPasswordPlaceholder")}
      messageDownPartOne={registerPagei18n("messageDownPartOne")}
      messageDownPartTwo={registerPagei18n("messageDownPartTwo")}
      termsLink={registerPagei18n("termsLink")}
      privacyLink={registerPagei18n("privacyLink")}
      IFmessage={registerPagei18n("IFmessage")}
      IFbutton={registerPagei18n("IFbutton")}
      actionButton={registerPagei18n("actionButton")}
      errorUsername={registerPagei18n("errorUsername")}
      errorUsernameRequired={registerPagei18n("errorUsernameRequired")}
      errorUsernameLong={registerPagei18n("errorUsernameLong")}
      errorEmail={registerPagei18n("errorEmail")}
      errorEmailRequired={registerPagei18n("errorEmailRequired")}
      errorEmailLong={registerPagei18n("errorEmailLong")}
      errorPassword={registerPagei18n("errorPassword")}
      errorPasswordRequired={registerPagei18n("errorPasswordRequired")}
      errorPasswordLong={registerPagei18n("errorPasswordLong")}
      errorCPassword={registerPagei18n("errorCPassword")}
      errorCPasswordRequired={registerPagei18n("errorCPasswordRequired")}
      errorCPasswordLong={registerPagei18n("errorCPasswordLong")}
      errorCPasswordEqual={registerPagei18n("errorCPasswordEqual")}
    />
  );

}

export default SigninPage;