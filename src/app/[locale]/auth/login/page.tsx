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
    actionButton: "LOGIN"
  })

  useEffect(() => {
    const language = localStorage.getItem("language");

    if (language !== null && language !== undefined) {
      setLanguageLink(language);
    }

    switch (language) {
      case "en":
        settexts({
          signIn: "Sign In With",
          googleButton: "Continue With Google",
          emailPlaceholder: "Email",
          passwordPlaceholder: "Password",
          IFmessage: "If you don't have an account yet: ",
          IFbutton: "Create account",
          actionButton: "LOGIN"
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
          actionButton: "ВХОД"
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
          actionButton: "登录"
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
          actionButton: "CONNEXION"
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
          actionButton: "ENTRAR"
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
          actionButton: "INICIAR SESIÓN"
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
          actionButton: "ログイン"
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
          actionButton: "लॉग इन करें"
        });
        break;
      default:
        break;
    }

  }, [])


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userInfo = {
      email: formData.get('email') || '',
      password: formData.get('password') || ''
    }

    if (userInfo.email?.length === 0) {
      setError('The email is required');
      return;
    }

    let EmailRegexValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if (EmailRegexValidator.test(userInfo.email?.toString())) {
      setError('The email is invalid');
      return;
    }

    if (userInfo.password?.length < 8) {
      setError("The password must contain at least 8 characters");
      return;
    }

    setIsLogin(true);
    setError("");


    try {

      const { data: SignUpData } = await axios.post(`${backendUri}/api/auth/login`, {
        email: userInfo.email,
        password: userInfo.password,
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

          <form className="flex flex-col items-center mb-4 md:max-w-[60%]" onSubmit={handleSubmit}>


            <button onClick={() => { GoogleLogin() }} type="button" className=" text-base text-[#3c4043] transition-all hover:bg-[#F8FAFF] justify-center font-bold w-full flex items-center rounded text-center py-3 px-[2rem] bg-white border-2 border-[#dadce0]">
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

            <input className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full mb-8 mt-8 w-full" type="email" name="email" placeholder={texts.emailPlaceholder} />

            <input className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full mb-8 w-full" type="password" name="password" placeholder={texts.passwordPlaceholder} />

            <button className="bg-[#5712DF] text-white py-2 px-4 rounded-full w-full" type="submit">{texts.actionButton}</button>

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