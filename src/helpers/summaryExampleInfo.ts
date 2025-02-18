
export const getSummaryExample = (lang: string) => {
    switch (lang) {
        case 'fr':
          return  {
            grade: 1,
            gradeJustification: "Les politiques imposent des obligations légales strictes, des responsabilités claires pour les utilisateurs, et des limitations significatives de la responsabilité.",
            summary: [
              {
                subtitle: "Aperçu du service",
                text: "Google offre une gamme de services intégrés divers sous des conditions définies."
              },
              {
                subtitle: "Obligations de l'utilisateur",
                text: "Les utilisateurs doivent respecter les directives légales, les exigences d'âge et adopter un comportement respectueux."
              },
              {
                subtitle: "Contenu et licences",
                text: "Les utilisateurs conservent la propriété de leur contenu mais accordent à Google une licence mondiale, non exclusive et sans redevance."
              },
              {
                subtitle: "Utilisation du logiciel",
                text: "Le logiciel est licencié pour un usage personnel avec des restrictions concernant la modification ou l'ingénierie inverse."
              },
              {
                subtitle: "Responsabilité et résolution des litiges",
                text: "Google limite sa responsabilité, les litiges sont résolus selon la loi californienne, et les violations peuvent entraîner la résiliation."
              },
              {
                subtitle: "Modifications et avis",
                text: "Les conditions peuvent être mises à jour avec un préavis, et les changements significatifs nécessitent la révision et l'acceptation par l'utilisateur."
              }
            ]
          };
        case 'ja':
          return  {
            grade: 1,
            gradeJustification: "ポリシーは厳格な法的義務、明確なユーザーの責任、そして重大な責任制限を課しています。",
            summary: [
              {
                subtitle: "サービス概要",
                text: "Googleは定められた条件の下で多様な統合サービスを提供しています。"
              },
              {
                subtitle: "ユーザーの義務",
                text: "ユーザーは法的ガイドライン、年齢要件、そして礼儀正しい行動を守らなければなりません。"
              },
              {
                subtitle: "コンテンツとライセンス",
                text: "ユーザーは所有権を保持しますが、Googleに対して世界的な、非独占的でロイヤリティフリーのライセンスを付与します。"
              },
              {
                subtitle: "ソフトウェアの使用",
                text: "ソフトウェアは個人利用のためにライセンスされており、改変またはリバースエンジニアリングに制限があります。"
              },
              {
                subtitle: "責任および紛争解決",
                text: "Googleは責任を限定し、紛争はカリフォルニア州法に基づいて解決され、違反は終了につながる可能性があります。"
              },
              {
                subtitle: "変更および通知",
                text: "条件は通知とともに更新される場合があり、重要な変更はユーザーの確認と承認が必要です。"
              }
            ]
          };
        case 'zh':
          return  {
            grade: 1,
            gradeJustification: "这些政策强加了严格的法律义务、明确的用户责任和显著的责任限制.",
            summary: [
              {
                subtitle: "服务概述",
                text: "Google在规定条款下提供多种整合服务."
              },
              {
                subtitle: "用户义务",
                text: "用户必须遵守法律准则、年龄要求以及尊重他人的行为准则."
              },
              {
                subtitle: "内容与许可",
                text: "用户保留所有权，但授予Google全球范围内、非排他性、免版税的许可."
              },
              {
                subtitle: "软件使用",
                text: "软件授权供个人使用，且限制修改或逆向工程."
              },
              {
                subtitle: "责任与争议解决",
                text: "Google限制其责任，争议根据加州法律解决，违规可能导致终止服务."
              },
              {
                subtitle: "修改与通知",
                text: "条款可能在通知后更新，重大变更需用户审查和接受."
              }
            ]
          };
        case 'ru':
          return  {
            grade: 1,
            gradeJustification: "Политики накладывают строгие юридические обязательства, ясные обязанности пользователей и значительные ограничения ответственности.",
            summary: [
              {
                subtitle: "Обзор сервиса",
                text: "Google предоставляет разнообразные интегрированные сервисы на основе определенных условий."
              },
              {
                subtitle: "Обязанности пользователя",
                text: "Пользователи должны соблюдать юридические нормы, возрастные ограничения и вести себя уважительно."
              },
              {
                subtitle: "Контент и лицензирование",
                text: "Пользователи сохраняют право собственности, но предоставляют Google глобальную, неисключительную, безроялти лицензию."
              },
              {
                subtitle: "Использование ПО",
                text: "Программное обеспечение лицензируется для личного использования с ограничениями на модификацию или обратное проектирование."
              },
              {
                subtitle: "Ответственность и разрешение споров",
                text: "Google ограничивает свою ответственность, споры разрешаются в соответствии с законодательством Калифорнии, и нарушения могут привести к прекращению услуг."
              },
              {
                subtitle: "Изменения и уведомления",
                text: "Условия могут обновляться с уведомлением, а существенные изменения требуют проверки и принятия пользователем."
              }
            ]
          };
        case 'hi':
          return  {
            grade: 1,
            gradeJustification: "नीतियाँ सख्त कानूनी बाध्यताओं, स्पष्ट उपयोगकर्ता जिम्मेदारियों और महत्वपूर्ण दायित्व सीमाओं को लागू करती हैं.",
            summary: [
              {
                subtitle: "सेवा अवलोकन",
                text: "Google निर्धारित शर्तों के तहत विभिन्न एकीकृत सेवाएं प्रदान करता है."
              },
              {
                subtitle: "उपयोगकर्ता कर्तव्य",
                text: "उपयोगकर्ताओं को कानूनी दिशानिर्देशों, आयु आवश्यकताओं और सम्मानजनक व्यवहार का पालन करना चाहिए."
              },
              {
                subtitle: "सामग्री और लाइसेंसिंग",
                text: "उपयोगकर्ता स्वामित्व बनाए रखते हैं, लेकिन Google को वैश्विक, गैर-अनन्य, रॉयल्टी मुक्त लाइसेंस प्रदान करते हैं."
              },
              {
                subtitle: "सॉफ़्टवेयर उपयोग",
                text: "सॉफ़्टवेयर को व्यक्तिगत उपयोग के लिए लाइसेंस दिया जाता है और संशोधन या रिवर्स इंजीनियरिंग पर प्रतिबंध होता है."
              },
              {
                subtitle: "दायित्व और विवाद समाधान",
                text: "Google अपनी दायित्व सीमित करता है, विवाद कैलिफ़ोर्निया कानून के तहत सुलझाए जाते हैं, और उल्लंघन सेवा समाप्ति का कारण बन सकते हैं."
              },
              {
                subtitle: "संशोधन और सूचनाएं",
                text: "शर्तों को नोटिस के साथ अपडेट किया जा सकता है, और महत्वपूर्ण बदलाव के लिए उपयोगकर्ता की समीक्षा और स्वीकृति आवश्यक होती है."
              }
            ]
          };
        case 'pt':
          return  {
            grade: 1,
            gradeJustification: "As políticas impõem rigorosas obrigações legais, responsabilidades claras para o usuário e limitações significativas de responsabilidade.",
            summary: [
              {
                subtitle: "Visão Geral do Serviço",
                text: "O Google oferece diversos serviços integrados sob termos definidos."
              },
              {
                subtitle: "Obrigações do Usuário",
                text: "Os usuários devem cumprir as diretrizes legais, os requisitos de idade e manter um comportamento respeitoso."
              },
              {
                subtitle: "Conteúdo e Licenciamento",
                text: "Os usuários mantêm a propriedade, mas concedem ao Google uma licença global, não exclusiva e livre de royalties."
              },
              {
                subtitle: "Uso de Software",
                text: "O software é licenciado para uso pessoal com restrições à modificação ou engenharia reversa."
              },
              {
                subtitle: "Responsabilidade e Resolução de Conflitos",
                text: "O Google limita sua responsabilidade, os conflitos são resolvidos sob a lei da Califórnia, e violações podem levar à rescisão."
              },
              {
                subtitle: "Modificações e Avisos",
                text: "Os termos podem ser atualizados com aviso prévio, e mudanças significativas requerem revisão e aceitação pelo usuário."
              }
            ]
          };
        case 'de':
          return  {
            grade: 1,
            gradeJustification: "Die Richtlinien auferlegen strenge rechtliche Verpflichtungen, klare Nutzerverantwortungen und erhebliche Haftungsbeschränkungen.",
            summary: [
              {
                subtitle: "Dienstübersicht",
                text: "Google bietet eine Vielzahl integrierter Dienste unter definierten Bedingungen an."
              },
              {
                subtitle: "Nutzerpflichten",
                text: "Nutzer müssen rechtliche Richtlinien, Altersanforderungen und respektvolles Verhalten einhalten."
              },
              {
                subtitle: "Inhalt und Lizenzierung",
                text: "Nutzer behalten das Eigentum, gewähren Google jedoch eine weltweite, nicht-exklusive und gebührenfreie Lizenz."
              },
              {
                subtitle: "Software-Nutzung",
                text: "Software ist für den persönlichen Gebrauch lizenziert, mit Einschränkungen hinsichtlich Änderungen oder Reverse Engineering."
              },
              {
                subtitle: "Haftung und Streitbeilegung",
                text: "Google begrenzt seine Haftung, Streitigkeiten werden nach kalifornischem Recht gelöst, und Verstöße können zur Kündigung führen."
              },
              {
                subtitle: "Änderungen und Mitteilungen",
                text: "Die Bedingungen können mit Vorankündigung aktualisiert werden, und wesentliche Änderungen erfordern die Überprüfung und Zustimmung des Nutzers."
              }
            ]
          };
        default:
          return  {
            grade: 1,
            gradeJustification: "The policies impose strict legal obligations, clear user responsibilities, and significant limitations on liability.",
            summary: [
              {
                subtitle: "Service Overview",
                text: "Google provides diverse integrated services under defined terms."
              },
              {
                subtitle: "User Obligations",
                text: "Users must comply with legal guidelines, age requirements, and respectful behavior."
              },
              {
                subtitle: "Content and Licensing",
                text: "Users retain ownership but grant Google a global, non-exclusive, royalty-free license."
              },
              {
                subtitle: "Software Use",
                text: "Software is licensed for personal use with restrictions on modification or reverse engineering."
              },
              {
                subtitle: "Liability and Dispute Resolution",
                text: "Google limits its liability, disputes are resolved under California law, and breaches can lead to termination."
              },
              {
                subtitle: "Modifications and Notices",
                text: "Terms may be updated with notice, and significant changes require user review and acceptance."
              }
            ]
          };
      }
} 
