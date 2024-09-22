'use client'
import { FormEvent, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { backendUri } from "@/helpers/url";
import Cookies from 'js-cookie';

import { useGoogleLogin } from '@react-oauth/google';
import { LoadingComponent } from "@/components/Loading";

const SigninPage = () => {

  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const [languageLink, setLanguageLink] = useState("")
  const [texts, settexts] = useState({
    signUp: "Sign Up With",
    googleButton: "Continue With Google",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    repeatPasswordPlaceholder: "Confirm Password",
    messageDownPartOne: "By clicking to register you are accepting the following",
    messageDownPartTwo: "and",
    termsLink: "terms of use",
    privacyLink: "privacy policies",
    IFmessage: "If you already have an account: ",
    IFbutton: "Login",
    actionButton: "SIGN UP"
  })

  useEffect(() => {

    const language = localStorage.getItem("language");

    if (language !== null && language !== undefined) {
      setLanguageLink(language);
    }

    switch (language) {
      case "ru":
        settexts({
          signUp: "Регистрация с",
          googleButton: "Зарегистрироваться с помощью Google",
          namePlaceholder: "Имя",
          emailPlaceholder: "Электронная почта",
          passwordPlaceholder: "Пароль",
          repeatPasswordPlaceholder: "Подтвердите пароль",
          messageDownPartOne: "Нажимая для регистрации, вы принимаете следующее",
          messageDownPartTwo: "и",
          termsLink: "условия использования",
          privacyLink: "политику конфиденциальности",
          IFmessage: "Если у вас уже есть аккаунт: ",
          IFbutton: "Вход",
          actionButton: "РЕГИСТРАЦИЯ"
        });
        break;
      case "zh":
        settexts({
          signUp: "注册",
          googleButton: "使用Google注册",
          namePlaceholder: "姓名",
          emailPlaceholder: "电子邮件",
          passwordPlaceholder: "密码",
          repeatPasswordPlaceholder: "确认密码",
          messageDownPartOne: "点击注册即表示您接受以下内容",
          messageDownPartTwo: "和",
          termsLink: "使用条款",
          privacyLink: "隐私政策",
          IFmessage: "如果您已经有帐户：",
          IFbutton: "登录",
          actionButton: "注册"
        });
        break;
      case "fr":
        settexts({
          signUp: "S'inscrire avec",
          googleButton: "S'inscrire avec Google",
          namePlaceholder: "Nom",
          emailPlaceholder: "E-mail",
          passwordPlaceholder: "Mot de passe",
          repeatPasswordPlaceholder: "Confirmer le mot de passe",
          messageDownPartOne: "En cliquant pour vous inscrire, vous acceptez les conditions suivantes",
          messageDownPartTwo: "et",
          termsLink: "conditions d'utilisation",
          privacyLink: "politiques de confidentialité",
          IFmessage: "Si vous avez déjà un compte : ",
          IFbutton: "Connexion",
          actionButton: "S'INSCRIRE"
        });
        break;
      case "po":
        settexts({
          signUp: "Inscreva-se com",
          googleButton: "Inscreva-se com o Google",
          namePlaceholder: "Nome",
          emailPlaceholder: "E-mail",
          passwordPlaceholder: "Senha",
          repeatPasswordPlaceholder: "Confirmar senha",
          messageDownPartOne: "Ao clicar para se registrar, você está aceitando o seguinte",
          messageDownPartTwo: "e",
          termsLink: "termos de uso",
          privacyLink: "políticas de privacidade",
          IFmessage: "Se você já tem uma conta: ",
          IFbutton: "Login",
          actionButton: "INSCREVER-SE"
        });
        break;
      case "es":
        settexts({
          signUp: "Registrarse con",
          googleButton: "Registrarse con Google",
          namePlaceholder: "Nombre",
          emailPlaceholder: "Correo electrónico",
          passwordPlaceholder: "Contraseña",
          repeatPasswordPlaceholder: "Confirmar contraseña",
          messageDownPartOne: "Al hacer clic para registrarte, aceptas lo siguiente",
          messageDownPartTwo: "y",
          termsLink: "términos de uso",
          privacyLink: "políticas de privacidad",
          IFmessage: "Si ya tienes una cuenta: ",
          IFbutton: "Iniciar sesión",
          actionButton: "REGISTRARSE"
        });
        break;
      case "ja":
        settexts({
          signUp: "でサインアップ",
          googleButton: "Googleでサインアップ",
          namePlaceholder: "名前",
          emailPlaceholder: "メールアドレス",
          passwordPlaceholder: "パスワード",
          repeatPasswordPlaceholder: "パスワードの確認",
          messageDownPartOne: "登録するには以下をクリックしてください",
          messageDownPartTwo: "および",
          termsLink: "利用規約",
          privacyLink: "プライバシーポリシー",
          IFmessage: "すでにアカウントをお持ちの場合：",
          IFbutton: "ログイン",
          actionButton: "サインアップ"
        });
        break;
      case "hi":
        settexts({
          signUp: "के साथ साइन अप करें",
          googleButton: "Google के साथ साइन अप करें",
          namePlaceholder: "नाम",
          emailPlaceholder: "ईमेल",
          passwordPlaceholder: "पासवर्ड",
          repeatPasswordPlaceholder: "पासवर्ड की पुनरावृत्ति",
          messageDownPartOne: "रजिस्टर करने के लिए क्लिक करके आप निम्नलिखित को स्वीकार कर रहे हैं",
          messageDownPartTwo: "और",
          termsLink: "उपयोग की शर्तें",
          privacyLink: "गोपनीयता नीतियां",
          IFmessage: "यदि आपके पास पहले से ही एक खाता है: ",
          IFbutton: "लॉग इन करें",
          actionButton: "साइन अप करें"
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
      username: formData.get('username') || '',
      email: formData.get('email') || '',
      password: formData.get('password') || '',
      cpassword: formData.get('cpassword') || ''
    }

    if (userInfo.email?.length === 0) {
      setError('The email is required');
      return;
    }

    let EmailRegexValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    if (EmailRegexValidator.test(userInfo.email?.toString())) {
      setError("the email is invalid");
      return;
    }

    if (userInfo.username?.length === 0) {
      setError("The username must contain at least 1 character");
      return;
    }

    const notAllowedCharacters = ["/", ":", "-", "~", "(", ")", "%", "^", "*", "|", "<", ">", "+", `""`];
    for (let i = 0; i < notAllowedCharacters.length; i++) {
      if (userInfo.username?.toString().includes(notAllowedCharacters[i])) {
        setError(`The character ${notAllowedCharacters[i]} is not allowed.`);
        return;
      }
    }

    if (userInfo.password?.length < 8) {
      setError("the password must contain at least 8 characters");
      return;
    }

    if (userInfo.cpassword?.toString() !== userInfo.password?.toString()) {
      setError("the password don't match");
      return;
    }

    setIsLogin(true);
    setError("");

    try {

      const { data: SignUpData } = await axios.post(`${backendUri}/api/user`, {
        email: userInfo.email,
        password: userInfo.password,
        username: userInfo.username,
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
      <main className="flex justify-center items-center w-full text-center overflow-scroll">

        <div className="flex flex-col items-center md:max-w-[60%] lg:max-w-[45%] max-w-[75%] xl:scale-90 mt-[3rem] min-w-[40%]">

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
            <h1 className="mb-8 font-bold text-xl text-[#5712DF]">{texts.signUp}</h1>
          </div>

          <form className="flex flex-col items-center mb-4 md:max-w-[50%] lg:max-w-[45%]" onSubmit={handleSubmit}>

            <button onClick={() => { GoogleLogin() }} type="button" className=" text-base text-[#3c4043] transition-all hover:bg-[#F8FAFF] justify-center font-bold w-full flex items-center rounded text-center py-3 bg-white border-2 border-[#dadce0]">
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

            <input className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full mb-8 mt-8 w-full" type="text" name="username" placeholder={texts.namePlaceholder} />

            <input className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full mb-8 w-full" type="email" name="email" placeholder={texts.emailPlaceholder} />

            <input className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full mb-8 w-full" type="password" name="password" placeholder={texts.passwordPlaceholder} />

            <input className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full mb-8 w-full" type="password" name="cpassword" placeholder={texts.repeatPasswordPlaceholder} />

            <p className="text-base opacity-70 mb-6 px-2">
              {texts.messageDownPartOne} <Link className="text-[#5712DF] font-bold pl-1" href={'/terms-of-use'}>{texts.termsLink}</Link> {texts.messageDownPartTwo}
              <Link className="text-[#5712DF] font-bold pl-1" href={'/privacy'}>{texts.privacyLink}</Link>
            </p>

            <button className="bg-[#5712DF] text-white py-2 px-4 rounded-full w-full" type="submit">{texts.actionButton}</button>

            {error && <span className="text-red-500 mt-4">{error}</span>}

          </form>

          <p className="text-base opacity-70 px-8 lg:px-10">
            {texts.IFmessage}
            <Link className="text-[#5712DF] font-bold pl-2" href={'/auth/login'}>{texts.IFbutton}</Link>
          </p>

        </div>

      </main>
    )
  }

}

export default SigninPage;