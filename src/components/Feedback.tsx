"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceAngry, faFaceFrown, faFaceLaughBeam, faFaceMeh, faFaceSmile, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { backendUri } from '@/helpers/url';
import Cookies from 'js-cookie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Feedback = () => {

    const [userToken, setUserToken] = useState("");
    const [satisFactionLevel, setsatisFactionLevel] = useState(-1);
    const [feedText, setfeedText] = useState("")
    const [showFeedbackBox, setShowFeedbackBox] = useState(false);
    const [isFeedbackSent, setisFeedbackSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const [texts, settexts] = useState({
        titleFeedback: "Feedback",
        sadMessage: "😔 We are sorry to hear that you did not have a good experience with simpliterms.",
        normalMessage: "🫡 We see that you are neither satisfied nor dissatisfied with the service.",
        happyMessage: "😄 We are glad to hear that you had a good service with simpliterm. ",
        questionSatisfaction: "What is your level of satisfaction using simpliterms?",
        questionWhy: "Why?",
        answerPlaceholder: "Your answer",
        actionButton: "Send",
        whyImportant: "Thanks to your feedback we will work to improve the service. Have a great day."

    })

    const notifyError = (message: string) => toast.error(message);

    const router = useRouter();

    useEffect(() => {

        const language = localStorage.getItem("language");

        switch (language) {
            case "ru":
                settexts({
                    titleFeedback: "Обратная связь",
                    sadMessage: "😔 Мы сожалеем слышать, что у вас не был хороший опыт с simpliterms.",
                    normalMessage: "🫡 Мы видим, что вы не удовлетворены и не не удовлетворены обслуживанием.",
                    happyMessage: "😄 Мы рады слышать, что у вас было хорошее обслуживание с simpliterms.",
                    questionSatisfaction: "Каков ваш уровень удовлетворенности использованием simpliterms?",
                    questionWhy: "Почему?",
                    answerPlaceholder: "Ваш ответ",
                    actionButton: "Отправить",
                    whyImportant: "Благодаря вашим отзывам мы будем работать над улучшением сервиса. Хорошего дня!"
                });
                break;
            case "zh":
                settexts({
                    titleFeedback: "反馈",
                    sadMessage: "😔 很抱歉听到您在simpliterms上没有一个好的经验。",
                    normalMessage: "🫡 我们看到您对服务既不满意也不不满意。",
                    happyMessage: "😄 很高兴听到您在simpliterms上有一个很好的服务。",
                    questionSatisfaction: "您对使用simpliterms的满意程度如何？",
                    questionWhy: "为什么？",
                    answerPlaceholder: "您的答案",
                    actionButton: "发送",
                    whyImportant: "由于您的反馈，我们将努力改善服务。祝您有美好的一天！"
                });
                break;
            case "fr":
                settexts({
                    titleFeedback: "Retour d'information",
                    sadMessage: "😔 Nous sommes désolés d'apprendre que vous n'avez pas eu une bonne expérience avec simpliterms.",
                    normalMessage: "🫡 Nous constatons que vous n'êtes ni satisfait ni insatisfait du service.",
                    happyMessage: "😄 Nous sommes heureux d'apprendre que vous avez eu un bon service avec simpliterms.",
                    questionSatisfaction: "Quel est votre niveau de satisfaction en utilisant simpliterms?",
                    questionWhy: "Pourquoi?",
                    answerPlaceholder: "Votre réponse",
                    actionButton: "Envoyer",
                    whyImportant: "Grâce à votre retour, nous travaillerons à améliorer le service. Passez une excellente journée !"
                });
                break;
            case "po":
                settexts({
                    titleFeedback: "Feedback",
                    sadMessage: "😔 Sentimos saber que você não teve uma boa experiência com o simpliterms.",
                    normalMessage: "🫡 Vemos que você não está nem satisfeito nem insatisfeito com o serviço.",
                    happyMessage: "😄 Ficamos felizes em saber que você teve um bom serviço com o simpliterms.",
                    questionSatisfaction: "Qual é o seu nível de satisfação ao usar o simpliterms?",
                    questionWhy: "Por quê?",
                    answerPlaceholder: "Sua resposta",
                    actionButton: "Enviar",
                    whyImportant: "Graças ao seu feedback, vamos trabalhar para melhorar o serviço. Tenha um ótimo dia!"
                });
                break;
            case "es":
                settexts({
                    titleFeedback: "Feedback",
                    sadMessage: "😔 Lamentamos saber que no tuvo una buena experiencia con simpliterms.",
                    normalMessage: "🫡 Vemos que no está ni satisfecho ni insatisfecho con el servicio.",
                    happyMessage: "😄 Nos alegra saber que tuvo un buen servicio con simpliterms.",
                    questionSatisfaction: "¿Cuál es su nivel de satisfacción al usar simpliterms?",
                    questionWhy: "¿Por qué?",
                    answerPlaceholder: "Su respuesta",
                    actionButton: "Enviar",
                    whyImportant: "Gracias a sus comentarios, trabajaremos para mejorar el servicio. ¡Que tengas un gran día!"
                });
                break;
            case "ja":
                settexts({
                    titleFeedback: "フィードバック",
                    sadMessage: "😔 simplitermsで良い経験ができなかったことを残念に思っています。",
                    normalMessage: "🫡 サービスに満足していないことも不満でもないことを見ています。",
                    happyMessage: "😄 simplitermsで良いサービスを受けたことを嬉しく思っています。",
                    questionSatisfaction: "simplitermsを使用しての満足度はどのくらいですか？",
                    questionWhy: "なぜですか？",
                    answerPlaceholder: "あなたの答え",
                    actionButton: "送信",
                    whyImportant: "ご意見いただきありがとうございます。お客様の声をもとに、より良いサービスを提供できるよう努めます。良い一日を！"
                });
                break;
            case "hi":
                settexts({
                    titleFeedback: "प्रतिपुष्टि",
                    sadMessage: "😔 हमें यह सुनकर खेद है कि आपके पास simpliterms के साथ एक अच्छा अनुभव नहीं था।",
                    normalMessage: "🫡 हम देख रहे हैं कि आप सेवा के साथ न तो संतुष्ट हैं और न ही असंतुष्ट।",
                    happyMessage: "😄 हमें खुशी है कि आपके पास simpliterms के साथ एक अच्छी सेवा थी।",
                    questionSatisfaction: "simpliterms का उपयोग करके आपका संतुष्टि स्तर क्या है?",
                    questionWhy: "क्यों?",
                    answerPlaceholder: "आपका उत्तर",
                    actionButton: "भेजें",
                    whyImportant: "आपके प्रतिक्रिया के लिए धन्यवाद! हम सेवा में सुधार करने के लिए काम करेंगे। शानदार एक दिन हो!"
                });
                break;
            default:
                settexts({
                    titleFeedback: "Feedback",
                    sadMessage: "😔 We are sorry to hear that you did not have a good experience with simpliterms.",
                    normalMessage: "🫡 We see that you are neither satisfied nor dissatisfied with the service.",
                    happyMessage: "😄 We are glad to hear that you had a good service with simpliterms. ",
                    questionSatisfaction: "What is your level of satisfaction using simpliterms?",
                    questionWhy: "Why?",
                    answerPlaceholder: "Your answer",
                    actionButton: "Send",
                    whyImportant: "Thanks to your feedback we will work to improve the service. Have a great day."
                });
                break;
        }

    }, [showFeedbackBox]);


    useEffect(() => {

        const token: string = Cookies.get("x-token")?.toString() || "";
        setUserToken(token);

    }, [Cookies.get("x-token")])


    const closeWindow = () => {
        setShowFeedbackBox(false);
    }

    const openWindow = () => {
        setShowFeedbackBox(true);
    }

    const sendFeedback = async () => {

        if (isSending) return;

        if (userToken === "") {
            router.push("/auth/login");
            setShowFeedbackBox(false);
            return;
        }

        if (satisFactionLevel === -1) {
            notifyError("Please rate your level of satisfaction with simpliterms before sending feedback.");
            return;
        }

        setIsSending(true);

        try {

            const headers = {
                'Authorization': `Bearer ${userToken}`,
            };

            const { data } = await axios({
                method: 'post',
                url: `${backendUri}/api/feedback`,
                data: {
                    satisfactionLevel: satisFactionLevel,
                    feedback: feedText
                },
                headers,
            });

            setIsSending(false);
            if (data.status === "success") {
                setisFeedbackSent(true);
            } else {
                notifyError("There seems to have been an error, please try again later.");
            }


        } catch (error: any) {
            console.log(error);
            setIsSending(false);
            notifyError("There seems to have been an error, please try again later.");
        }

    }

    return (
        <>

            <ToastContainer
                pauseOnHover
                theme="colored"
            />

            {
                showFeedbackBox && <div className='fixed bottom-0 right-0 mx-4 my-4 rounded lg:max-w-[30%]'>

                    <div className='flex justify-between items-center bg-[#5712DF] text-white px-6 py-3'>
                        <h4 className='font-bold'>{texts.titleFeedback}</h4>
                        <FontAwesomeIcon onClick={closeWindow} icon={faXmark} width={40} height={40} className='w-auto cursor-pointer' />
                    </div>

                    <div className='bg-white px-6 py-4'>

                        {
                            isFeedbackSent && (satisFactionLevel === 0 || satisFactionLevel === 1) && <p className='text-center font-bold text-[#5712DF] p-4 text-xl max-w-[22rem]'>{texts.sadMessage} {texts.whyImportant}</p>
                        }

                        {
                            isFeedbackSent && (satisFactionLevel === 2) && <p className='text-center font-bold text-[#5712DF] p-4 text-xl max-w-[22rem]'>{texts.normalMessage} {texts.whyImportant}</p>
                        }

                        {
                            isFeedbackSent && (satisFactionLevel === 3 || satisFactionLevel === 4) && <p className='text-center font-bold text-[#5712DF] p-4 text-xl max-w-[22rem]'>{texts.happyMessage} {texts.whyImportant}</p>
                        }

                        {
                            !isFeedbackSent && <>
                                <h3 className='font-bold mb-8 text-[#5712DF]'>{texts.questionSatisfaction}</h3>
                                <div className='flex justify-between items-center mb-8'>
                                    <FontAwesomeIcon onClick={() => setsatisFactionLevel(0)} icon={faFaceAngry} className={`${(satisFactionLevel === 0) ? "opacity-100 " : "opacity-40 "}text-red-600 w-auto cursor-pointer`} size='2x' />
                                    <FontAwesomeIcon onClick={() => setsatisFactionLevel(1)} icon={faFaceFrown} className={`${(satisFactionLevel === 1) ? "opacity-100 " : "opacity-40 "}text-orange-600 w-auto cursor-pointer`} size='2x' />
                                    <FontAwesomeIcon onClick={() => setsatisFactionLevel(2)} icon={faFaceMeh} className={`${(satisFactionLevel === 2) ? "opacity-100 " : "opacity-40 "}text-yellow-600 w-auto cursor-pointer`} size='2x' />
                                    <FontAwesomeIcon onClick={() => setsatisFactionLevel(3)} icon={faFaceSmile} className={`${(satisFactionLevel === 3) ? "opacity-100 " : "opacity-40 "}text-blue-600 w-auto cursor-pointer`} size='2x' />
                                    <FontAwesomeIcon onClick={() => setsatisFactionLevel(4)} icon={faFaceLaughBeam} className={`${(satisFactionLevel === 4) ? "opacity-100 " : "opacity-40 "}text-green-600 w-auto cursor-pointer`} size='2x' />
                                </div>

                                <h4 className='font-bold mb-8 text-[#5712DF]'>{texts.questionWhy}</h4>

                                <textarea value={feedText} onChange={(e) => setfeedText(e.target.value)} className='mb-8 w-full bg-black bg-opacity-5 p-4' name="feedback" placeholder={texts.answerPlaceholder}>
                                </textarea>

                                <button onClick={sendFeedback} className={`${(isSending) ? "bg-opacity-20" : "bg-opacity-100"} bg-[#5712DF] text-white font-bold p-3 w-full mb-8 rounded`} type='button'>{(isSending) ? "Sending..." : `${texts.actionButton}`}</button>

                            </>
                        }

                    </div>

                </div>
            }

            {
                !showFeedbackBox && <button onClick={openWindow} type='button' className='fixed right-0 bottom-0 transform translate-y-1/2 translate-x-1/2 mb-44 mr-5 py-2 px-5 font-bold bg-[#5712DF] text-white rounded -rotate-90 text-xl'>
                    Feedback
                </button>
            }


        </>
    )
}
