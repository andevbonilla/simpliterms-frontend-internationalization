import { LoginWraper } from "@/components/pages/auth/LoginWraper";
import { useTranslations } from "next-intl";

const LoginPage = () => {

  const loginPagei18n = useTranslations('LoginPage');

  return ( 
    // the login wraper of the app
    <LoginWraper
      signIn={loginPagei18n("signIn")}
      googleButton={loginPagei18n("googleButton")}
      emailPlaceholder={loginPagei18n("emailPlaceholder")}
      passwordPlaceholder={loginPagei18n("passwordPlaceholder")}
      IFmessage={loginPagei18n("IFmessage")}
      IFbutton={loginPagei18n("IFbutton")}
      actionButton={loginPagei18n("actionButton")}
      errorEmail={loginPagei18n("errorEmail")}
      errorEmailRequired={loginPagei18n("errorEmailRequired")}
      errorEmailToolong={loginPagei18n("errorEmailToolong")}
      errorPassword={loginPagei18n("errorPassword")}
      errorPasswordRequired={loginPagei18n("errorPasswordRequired")}
      errorPasswordToolong={loginPagei18n("errorPasswordToolong")}
    />
  );

}

export default LoginPage;