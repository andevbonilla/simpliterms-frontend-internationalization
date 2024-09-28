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
    actionButton: "SIGN UP",
    errorUsername: "Username is wrong.",
    errorUsernameRequired: "Username is required.",
    errorUsernameLong: "Username is too long",
    errorEmail: "Email is wrong.",
    errorEmailRequired: "Email is required.",
    errorEmailLong: "Email is too long",
    errorPassword: "Password must have at least 8 characters.",
    errorPasswordRequired: "Password is required.",
    errorPasswordLong: "Password is too long",
    errorCPassword: "Confirm Password must have at least 8 characters.",
    errorCPasswordRequired: "Confirm Password is required.",
    errorCPasswordLong: "Confirm Password is too long",
    errorCPasswordEqual: "Confirm Password must be equal to the password",
  });

  // form values
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const changeUsername = (value: string) => {
    const regexUsername = /^[A-Z.]+$/;
    setUsername(value);
    if (value.length > 100) {
      setUsernameError(texts.errorUsernameLong);
      return true;
    };
    if (value.length === 0) {
      setUsernameError(texts.errorUsernameRequired);
      return true;
    };
    if (!regexUsername.test(value)) {
      setUsernameError(texts.errorUsername);
      return true;
    };
    setUsernameError("");
    return false;
  };


  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const changeEmail = (value: string) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com)$/;
    setEmail(value);
    if (value.length > 100) {
      setEmailError(texts.errorEmailLong);
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
      setPasswordError(texts.errorPasswordLong);
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

  const [cpassword, setCPassword] = useState("");
  const [cpasswordError, setCPasswordError] = useState("");
  const changeConfirmPassword = (value: string) => {
    setCPassword(value);
    if (value !== password) {
      setCPasswordError(texts.errorCPasswordEqual);
      return true;
    };
    if (value.length > 100) {
      setCPasswordError(texts.errorCPasswordLong);
      return true;
    };
    if (value.length === 0) {
      setCPasswordError(texts.errorCPasswordRequired);
      return true;
    };
    if (value.length < 8) {
      setCPasswordError(texts.errorCPassword);
      return true;
    };
    setCPasswordError("");
    return false;
  };


  useEffect(() => {

    const language = localStorage.getItem("language");

    if (language !== null && language !== undefined) {
      setLanguageLink(language);
    }

    switch (language) {
      case "en":
        settexts({
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
          actionButton: "SIGN UP",
          errorUsername: "Username is wrong.",
          errorUsernameRequired: "Username is required.",
          errorUsernameLong: "Username is too long.",
          errorEmail: "Email is wrong.",
          errorEmailRequired: "Email is required.",
          errorEmailLong: "Email is too long.",
          errorPassword: "Password must have at least 8 characters.",
          errorPasswordRequired: "Password is required.",
          errorPasswordLong: "Password is too long.",
          errorCPassword: "Confirm Password must have at least 8 characters.",
          errorCPasswordRequired: "Confirm Password is required.",
          errorCPasswordLong: "Confirm Password is too long.",
          errorCPasswordEqual: "Confirm Password must be equal to the password.",
        });
        break;
      case "ru":
        settexts({
          signUp: "Регистрация с",
          googleButton: "Зарегистрироваться с помощью Google",
          namePlaceholder: "Имя",
          emailPlaceholder: "Электронная почта",
          passwordPlaceholder: "Пароль",
          repeatPasswordPlaceholder: "Подтвердите пароль",
          messageDownPartOne: "Нажимая для регистрации, вы принимаете следующие",
          messageDownPartTwo: "и",
          termsLink: "условия использования",
          privacyLink: "политику конфиденциальности",
          IFmessage: "Если у вас уже есть аккаунт: ",
          IFbutton: "Вход",
          actionButton: "РЕГИСТРАЦИЯ",
          errorUsername: "Имя пользователя неверно.",
          errorUsernameRequired: "Имя пользователя обязательно.",
          errorUsernameLong: "Имя пользователя слишком длинное.",
          errorEmail: "Электронная почта неверна.",
          errorEmailRequired: "Электронная почта обязательна.",
          errorEmailLong: "Электронная почта слишком длинная.",
          errorPassword: "Пароль должен содержать не менее 8 символов.",
          errorPasswordRequired: "Пароль обязателен.",
          errorPasswordLong: "Пароль слишком длинный.",
          errorCPassword: "Подтверждение пароля должно содержать не менее 8 символов.",
          errorCPasswordRequired: "Подтверждение пароля обязательно.",
          errorCPasswordLong: "Подтверждение пароля слишком длинное.",
          errorCPasswordEqual: "Подтверждение пароля должно совпадать с паролем.",
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
          actionButton: "注册",
          errorUsername: "用户名错误。",
          errorUsernameRequired: "需要用户名。",
          errorUsernameLong: "用户名太长。",
          errorEmail: "电子邮件错误。",
          errorEmailRequired: "需要电子邮件。",
          errorEmailLong: "电子邮件太长。",
          errorPassword: "密码必须至少有8个字符。",
          errorPasswordRequired: "需要密码。",
          errorPasswordLong: "密码太长。",
          errorCPassword: "确认密码必须至少有8个字符。",
          errorCPasswordRequired: "需要确认密码。",
          errorCPasswordLong: "确认密码太长。",
          errorCPasswordEqual: "确认密码必须与密码相同。",
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
          actionButton: "S'INSCRIRE",
          errorUsername: "Le nom d'utilisateur est incorrect.",
          errorUsernameRequired: "Le nom d'utilisateur est requis.",
          errorUsernameLong: "Le nom d'utilisateur est trop long.",
          errorEmail: "L'e-mail est incorrect.",
          errorEmailRequired: "L'e-mail est requis.",
          errorEmailLong: "L'e-mail est trop long.",
          errorPassword: "Le mot de passe doit comporter au moins 8 caractères.",
          errorPasswordRequired: "Le mot de passe est requis.",
          errorPasswordLong: "Le mot de passe est trop long.",
          errorCPassword: "Le mot de passe de confirmation doit comporter au moins 8 caractères.",
          errorCPasswordRequired: "La confirmation du mot de passe est requise.",
          errorCPasswordLong: "La confirmation du mot de passe est trop longue.",
          errorCPasswordEqual: "Le mot de passe de confirmation doit être identique au mot de passe.",
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
          actionButton: "INSCREVER-SE",
          errorUsername: "Nome de usuário está errado.",
          errorUsernameRequired: "Nome de usuário é obrigatório.",
          errorUsernameLong: "Nome de usuário é muito longo.",
          errorEmail: "E-mail está errado.",
          errorEmailRequired: "E-mail é obrigatório.",
          errorEmailLong: "E-mail é muito longo.",
          errorPassword: "A senha deve ter pelo menos 8 caracteres.",
          errorPasswordRequired: "Senha é obrigatória.",
          errorPasswordLong: "Senha é muito longa.",
          errorCPassword: "A confirmação da senha deve ter pelo menos 8 caracteres.",
          errorCPasswordRequired: "Confirmação da senha é obrigatória.",
          errorCPasswordLong: "Confirmação da senha é muito longa.",
          errorCPasswordEqual: "A confirmação da senha deve ser igual à senha.",
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
          actionButton: "REGISTRARSE",
          errorUsername: "El nombre de usuario es incorrecto.",
          errorUsernameRequired: "El nombre de usuario es obligatorio.",
          errorUsernameLong: "El nombre de usuario es demasiado largo.",
          errorEmail: "El correo electrónico es incorrecto.",
          errorEmailRequired: "El correo electrónico es obligatorio.",
          errorEmailLong: "El correo electrónico es demasiado largo.",
          errorPassword: "La contraseña debe tener al menos 8 caracteres.",
          errorPasswordRequired: "La contraseña es obligatoria.",
          errorPasswordLong: "La contraseña es demasiado larga.",
          errorCPassword: "La confirmación de la contraseña debe tener al menos 8 caracteres.",
          errorCPasswordRequired: "La confirmación de la contraseña es obligatoria.",
          errorCPasswordLong: "La confirmación de la contraseña es demasiado larga.",
          errorCPasswordEqual: "La confirmación de la contraseña debe ser igual a la contraseña.",
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
          actionButton: "サインアップ",
          errorUsername: "ユーザー名が間違っています。",
          errorUsernameRequired: "ユーザー名は必須です。",
          errorUsernameLong: "ユーザー名が長すぎます。",
          errorEmail: "メールアドレスが間違っています。",
          errorEmailRequired: "メールアドレスは必須です。",
          errorEmailLong: "メールアドレスが長すぎます。",
          errorPassword: "パスワードは8文字以上でなければなりません。",
          errorPasswordRequired: "パスワードは必須です。",
          errorPasswordLong: "パスワードが長すぎます。",
          errorCPassword: "確認用パスワードは8文字以上でなければなりません。",
          errorCPasswordRequired: "確認用パスワードは必須です。",
          errorCPasswordLong: "確認用パスワードが長すぎます。",
          errorCPasswordEqual: "確認用パスワードはパスワードと同じでなければなりません。",
        });
        break;
      case "hi":
        settexts({
          signUp: "के साथ साइन अप करें",
          googleButton: "Google के साथ साइन अप करें",
          namePlaceholder: "नाम",
          emailPlaceholder: "ईमेल",
          passwordPlaceholder: "पासवर्ड",
          repeatPasswordPlaceholder: "पासवर्ड की पुष्टि करें",
          messageDownPartOne: "रजिस्टर करने के लिए क्लिक करके आप निम्नलिखित को स्वीकार कर रहे हैं",
          messageDownPartTwo: "और",
          termsLink: "उपयोग की शर्तें",
          privacyLink: "गोपनीयता नीतियां",
          IFmessage: "यदि आपके पास पहले से ही एक खाता है: ",
          IFbutton: "लॉग इन करें",
          actionButton: "साइन अप करें",
          errorUsername: "उपयोगकर्ता नाम गलत है।",
          errorUsernameRequired: "उपयोगकर्ता नाम आवश्यक है।",
          errorUsernameLong: "उपयोगकर्ता नाम बहुत लंबा है।",
          errorEmail: "ईमेल गलत है।",
          errorEmailRequired: "ईमेल आवश्यक है।",
          errorEmailLong: "ईमेल बहुत लंबा है।",
          errorPassword: "पासवर्ड कम से कम 8 अक्षर का होना चाहिए।",
          errorPasswordRequired: "पासवर्ड आवश्यक है।",
          errorPasswordLong: "पासवर्ड बहुत लंबा है।",
          errorCPassword: "पुष्टि पासवर्ड कम से कम 8 अक्षर का होना चाहिए।",
          errorCPasswordRequired: "पुष्टि पासवर्ड आवश्यक है।",
          errorCPasswordLong: "पुष्टि पासवर्ड बहुत लंबा है।",
          errorCPasswordEqual: "पुष्टि पासवर्ड पासवर्ड के समान होना चाहिए।",
        });
        break;
      default:
        break;
    }


  }, [])


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const resultEmail = changeEmail(email);
    const resultUsername = changeUsername(username);
    const resultPassword = changePassword(password);
    const resultCpassword = changeConfirmPassword(cpassword);

    if (resultEmail || resultPassword || resultUsername || resultCpassword) {
      return;
    }

    setIsLogin(true);
    setError("");

    try {

      const { data: SignUpData } = await axios.post(`${backendUri}/api/user`, {
        email,
        password,
        username
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

          <form
            className="flex flex-col items-center mb-4 md:max-w-[50%] lg:max-w-[45%]"
            onSubmit={handleSubmit}
          >

            <button
              onClick={() => { GoogleLogin() }}
              type="button"
              className=" text-base text-[#3c4043] transition-all hover:bg-[#F8FAFF] justify-center font-bold w-full flex items-center rounded text-center py-3 bg-white border-2 border-[#dadce0]"
            >
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
                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full mt-8 w-full"
                type="text"
                name="username"
                placeholder={texts.namePlaceholder}
                value={username}
                onChange={(e) => { changeUsername(e.target.value) }}
              />
              {
                usernameError.length > 0 &&
                <p className="text-red-600 text-start ml-2 text-sm mt-2">{usernameError}</p>
              }
            </div>

            <div className="mb-8">
              <input
                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full w-full"
                type="email"
                name="email"
                placeholder={texts.emailPlaceholder}
                value={email}
                onChange={(e) => { changeEmail(e.target.value) }}
              />
              {
                emailError.length > 0 &&
                <p className="text-red-600 text-start ml-2 text-sm mt-2">{emailError}</p>
              }
            </div>

            <div className="mb-8">
              <input
                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full w-full"
                type="password"
                name="password"
                placeholder={texts.passwordPlaceholder}
                value={password}
                onChange={(e) => { changePassword(e.target.value) }}
              />
              {
                passwordError.length > 0 &&
                <p className="text-red-600 text-start ml-2 text-sm mt-2">{passwordError}</p>
              }
            </div>

            <div className="mb-8">
              <input
                className="border-black border-solid border-[0.08rem] py-2 px-4 rounded-full w-full"
                type="password"
                name="cpassword"
                placeholder={texts.repeatPasswordPlaceholder}
                value={cpassword}
                onChange={(e) => { changeConfirmPassword(e.target.value) }}
              />
              {
                cpasswordError.length > 0 &&
                <p className="text-red-600 text-start ml-2 text-sm mt-2">{cpasswordError}</p>
              }
            </div>


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