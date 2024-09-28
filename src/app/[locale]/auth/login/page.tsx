'use client'
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from 'js-cookie';

import { backendUri } from "@/helpers/url";
import { useGoogleLogin } from '@react-oauth/google';
import { LoadingComponent } from "@/components/Loading";


const SigninPage = () => {

  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const [languageLink, setLanguageLink] = useState("")
  const [texts, settexts] = useState({
    signIn: "Sign In With",
    googleButton: "Continue With Google",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    IFmessage: "If you don't have an account yet: ",
    IFbutton: "Create account",
    actionButton: "LOGIN",
    errorEmail: "Email is wrong.",
    errorEmailRequired: "Email is required.",
    errorEmailToolong: "Email is too long.",
    errorPassword: "Password must have at least 8 chracters.",
    errorPasswordRequired: "Password is required.",
    errorPasswordToolong: "Password is too long.",
  })

  // form values
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const changeEmail = (value: string) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com)$/;
    setEmail(value);
    if (value.length > 100) {
      setEmailError(texts.errorEmailToolong);
      return true;
    };
    if (value.length === 0) {
      setEmailError(texts.errorEmailRequired);
      return true;
    };
    if (!regexEmail.test(value)) {
      setEmailError(texts.errorEmail);
      return true;
    };
    setEmailError("");
    return false;
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const changePassword = (value: string) => {
    setPassword(value);
    if (value.length > 100) {
      setPasswordError(texts.errorPasswordToolong);
      return true;
    };
    if (value.length === 0) {
      setPasswordError(texts.errorPasswordRequired);
      return true;
    };
    if (value.length < 8) {
      setPasswordError(texts.errorPassword);
      return true;
    };
    setPasswordError("");
    return false;
  };

  useEffect(() => {

    const language = localStorage.getItem("language");

    if (language !== null && language !== undefined) {
      setLanguageLink(language);
    }

    // change languages
    switch (language) {
      case "en":
        settexts({
          signIn: "Sign In With",
          googleButton: "Continue With Google",
          emailPlaceholder: "Email",
          passwordPlaceholder: "Password",
          IFmessage: "If you don't have an account yet: ",
          IFbutton: "Create account",
          actionButton: "LOGIN",
          errorEmail: "Email is wrong.",
          errorEmailRequired: "Email is required.",
          errorEmailToolong: "Email is too long.",
          errorPassword: "Password must have at least 8 characters.",
          errorPasswordRequired: "Password is required.",
          errorPasswordToolong: "Password is too long.",
        });
        break;
      case "de":
        settexts({
          signIn: "Anmelden mit",
          googleButton: "Mit Google fortfahren",
          emailPlaceholder: "E-Mail",
          passwordPlaceholder: "Passwort",
          IFmessage: "Falls Sie noch kein Konto haben: ",
          IFbutton: "Konto erstellen",
          actionButton: "ANMELDEN",
          errorEmail: "E-Mail ist falsch.",
          errorEmailRequired: "E-Mail ist erforderlich.",
          errorEmailToolong: "E-Mail ist zu lang.",
          errorPassword: "Das Passwort muss mindestens 8 Zeichen lang sein.",
          errorPasswordRequired: "Passwort ist erforderlich.",
          errorPasswordToolong: "Passwort ist zu lang.",
        });
        break;
      case "ru":
        settexts({
          signIn: "Вход с помощью",
          googleButton: "Продолжить с Google",
          emailPlaceholder: "Электронная почта",
          passwordPlaceholder: "Пароль",
          IFmessage: "Если у вас еще нет учетной записи: ",
          IFbutton: "Создать аккаунт",
          actionButton: "ВХОД",
          errorEmail: "Электронная почта введена неправильно.",
          errorEmailRequired: "Требуется электронная почта.",
          errorEmailToolong: "Электронная почта слишком длинная.",
          errorPassword: "Пароль должен содержать не менее 8 символов.",
          errorPasswordRequired: "Требуется пароль.",
          errorPasswordToolong: "Пароль слишком длинный.",
        });
        break;
      case "zh":
        settexts({
          signIn: "使用以下方式登录",
          googleButton: "继续使用Google",
          emailPlaceholder: "电子邮件",
          passwordPlaceholder: "密码",
          IFmessage: "如果您还没有帐户：",
          IFbutton: "创建帐户",
          actionButton: "登录",
          errorEmail: "电子邮件错误。",
          errorEmailRequired: "需要电子邮件。",
          errorEmailToolong: "电子邮件太长。",
          errorPassword: "密码必须至少有8个字符。",
          errorPasswordRequired: "需要密码。",
          errorPasswordToolong: "密码太长。",
        });
        break;
      case "fr":
        settexts({
          signIn: "Se connecter avec",
          googleButton: "Continuer avec Google",
          emailPlaceholder: "E-mail",
          passwordPlaceholder: "Mot de passe",
          IFmessage: "Si vous n'avez pas encore de compte : ",
          IFbutton: "Créer un compte",
          actionButton: "CONNEXION",
          errorEmail: "L'e-mail est incorrect.",
          errorEmailRequired: "L'e-mail est requis.",
          errorEmailToolong: "L'e-mail est trop long.",
          errorPassword: "Le mot de passe doit comporter au moins 8 caractères.",
          errorPasswordRequired: "Le mot de passe est requis.",
          errorPasswordToolong: "Le mot de passe est trop long.",
        });
        break;
      case "po":
        settexts({
          signIn: "Entrar com",
          googleButton: "Continuar com o Google",
          emailPlaceholder: "E-mail",
          passwordPlaceholder: "Senha",
          IFmessage: "Se você ainda não tem uma conta: ",
          IFbutton: "Criar conta",
          actionButton: "ENTRAR",
          errorEmail: "E-mail está errado.",
          errorEmailRequired: "E-mail é obrigatório.",
          errorEmailToolong: "E-mail é muito longo.",
          errorPassword: "A senha deve ter pelo menos 8 caracteres.",
          errorPasswordRequired: "Senha é obrigatória.",
          errorPasswordToolong: "Senha é muito longa.",
        });
        break;
      case "es":
        settexts({
          signIn: "Iniciar sesión con",
          googleButton: "Continuar con Google",
          emailPlaceholder: "Correo electrónico",
          passwordPlaceholder: "Contraseña",
          IFmessage: "Si aún no tienes una cuenta: ",
          IFbutton: "Crear cuenta",
          actionButton: "INICIAR SESIÓN",
          errorEmail: "El correo electrónico es incorrecto.",
          errorEmailRequired: "Se requiere correo electrónico.",
          errorEmailToolong: "El correo electrónico es demasiado largo.",
          errorPassword: "La contraseña debe tener al menos 8 caracteres.",
          errorPasswordRequired: "Se requiere contraseña.",
          errorPasswordToolong: "La contraseña es demasiado larga.",
        });
        break;
      case "ja":
        settexts({
          signIn: "次でサインイン",
          googleButton: "Googleで続行",
          emailPlaceholder: "メールアドレス",
          passwordPlaceholder: "パスワード",
          IFmessage: "まだアカウントがない場合：",
          IFbutton: "アカウントを作成",
          actionButton: "ログイン",
          errorEmail: "メールアドレスが間違っています。",
          errorEmailRequired: "メールアドレスが必要です。",
          errorEmailToolong: "メールアドレスが長すぎます。",
          errorPassword: "パスワードは8文字以上でなければなりません。",
          errorPasswordRequired: "パスワードが必要です。",
          errorPasswordToolong: "パスワードが長すぎます。",
        });
        break;
      case "hi":
        settexts({
          signIn: "के साथ साइन इन करें",
          googleButton: "Google के साथ जारी रखें",
          emailPlaceholder: "ईमेल",
          passwordPlaceholder: "पासवर्ड",
          IFmessage: "यदि आपके पास अभी तक खाता नहीं है: ",
          IFbutton: "खाता बनाएं",
          actionButton: "लॉग इन करें",
          errorEmail: "ईमेल गलत है।",
          errorEmailRequired: "ईमेल आवश्यक है।",
          errorEmailToolong: "ईमेल बहुत लंबा है।",
          errorPassword: "पासवर्ड कम से कम 8 अक्षर का होना चाहिए।",
          errorPasswordRequired: "पासवर्ड आवश्यक है।",
          errorPasswordToolong: "पासवर्ड बहुत लंबा है।",
        });
        break;
      default:
        break;
    }

  }, [])


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const resultEmail = changeEmail(email);
    const resultPassword = changePassword(password);

    if (resultEmail || resultPassword) {
      return;
    }

    setIsLogin(true);
    setError("");

    try {

      const { data: SignUpData } = await axios.post(`${backendUri}/api/auth/login`, {
        email,
        password,
      });

      if (SignUpData) {
        setIsLogin(false);
      }

      if (SignUpData.status === "success") {
        Cookies.set('x-token', SignUpData.token, { path: '/' });
        Cookies.set('username', SignUpData.userDB.username, { path: '/' });
        Cookies.set('email', SignUpData.userDB.email, { path: '/' });
        Cookies.set('plan-type', SignUpData.userDB.planType, { path: '/' });
        Cookies.set('credits', SignUpData.userDB.credits, { path: '/' });
        setTimeout(() => {
          setIsLogin(false);
          window.location.reload();
        }, 100);
      }

    } catch (error: any) {
      setIsLogin(false);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError("No response from server please try again later");
      } else {
        setError("There was an error in the server please try again later");
      }
    }
  }

  const GoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { data: SignUpData } = await axios.post(`${backendUri}/api/auth/google-login`, {
        access_token: tokenResponse.access_token
      });
      if (SignUpData.status === "success") {

        // Cookies.set('x-token', SignUpData.token, {path: '/account'});
        Cookies.set('x-token', SignUpData.token, { path: '/' });

        // Cookies.set('uid', SignUpData.userDB.uid, {path: '/account'});
        Cookies.set('uid', SignUpData.userDB.uid, { path: '/' });

        // Cookies.set('username', SignUpData.userDB.username, {path: '/account'});
        Cookies.set('username', SignUpData.userDB.username, { path: '/' });

        // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
        Cookies.set('email', SignUpData.userDB.email, { path: '/' });

        // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
        Cookies.set('plan-type', SignUpData.userDB.planType, { path: '/' });

        // Cookies.set('email', SignUpData.userDB.email, {path: '/account'});
        Cookies.set('credits', SignUpData.userDB.credits, { path: '/' });

        window.location.reload();
      }
    },
    onError: err => setError('There was an error in google authentication, please try again.')
  });

  if (isLogin) {

    return <LoadingComponent />

  } else {

    return (
      <main className="flex justify-center items-center w-full h-screen text-center">

        <div className="flex flex-col items-center min-w-[40%]">

          <div className="flex flex-col items-center">
            <Link href={`/${languageLink}`} title='logo' className="mb-4">
              <Image
                src={require('@/assets/simpliterms-logo.png')}
                alt='logo image'
                width={60}
                height={60}
                className='rounded-full'
              />
            </Link>
            <h1 className="mb-8 font-bold text-xl text-[#5712DF]">{texts.signIn}</h1>
          </div>

          {/* login form */}
          <form className="flex flex-col items-center mb-4 md:max-w-[60%]" onSubmit={handleSubmit}>

            <button
              onClick={() => { GoogleLogin() }}
              type="button"
              className=" text-base text-[#3c4043] transition-all hover:bg-[#F8FAFF] justify-center font-bold w-full flex items-center rounded text-center py-3 px-[2rem] bg-white border-2 border-[#dadce0]">
              <Image
                src={require('@/assets/google-svgrepo-com.svg')}
                alt='google svg icon'
                width={25}
                height={25}
                className="mr-2"
              />
              {texts.googleButton}
            </button>

            <div className="border-t-2 border-solid border-[rgba(0,0,0,.3)] w-full mt-8"></div>

            <div className="mb-8">
              <input
                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full mt-8 w-[18rem]"
                type="email"
                name="email"
                value={email}
                onChange={(e) => changeEmail(e.target.value)}
                placeholder={texts.emailPlaceholder}
              />
              {
                emailError.length > 0 &&
                <p className="text-red-600 text-start ml-2 text-sm mt-2">{emailError}</p>
              }
            </div>

            <div className="mb-8">
              <input
                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full w-[18rem]"
                type="password"
                name="password"
                value={password}
                onChange={(e) => changePassword(e.target.value)}
                placeholder={texts.passwordPlaceholder}
              />
              {
                passwordError.length > 0 &&
                <p className="text-red-600 text-start ml-2 text-sm mt-2">{passwordError}</p>
              }
            </div>


            <button
              className="bg-[#5712DF] text-white py-2 px-4 rounded-full w-[18rem]"
              type="submit"
            >
              {texts.actionButton}
            </button>

            {error && <span className="text-red-500 mt-4">{error}</span>}

          </form>

          <p className="text-sm text-center opacity-70 px-20 md:max-w-[80%]">
            {texts.IFmessage}
            <Link className="text-[#5712DF] font-bold pl-2" href={'/auth/register'}>{texts.IFbutton}</Link>
          </p>

        </div>

      </main>
    )

  }


}

export default SigninPage;