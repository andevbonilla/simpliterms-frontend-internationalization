"use client"
import React, { useEffect, useState } from 'react';

import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';


const PrivacyPageLanguages = () => {

  const [texts, settexts] = useState({
    firstHeader: "Privacy Policy",
    firstPart: "This Privacy Policy establishes the terms in which simpliterms uses and protects the information that is provided by its users when using its website. This company is committed to the security of its users' data. When we ask you to fill in the fields of personal information with which you can be identified, we do so ensuring that it will only be used in accordance with the terms of this document. However, this Privacy Policy may change. over time or be updated so we recommend and emphasize continually reviewing this page to ensure that you agree with such changes.",
    secondHeader: "Information that is collected",
    secondPart: "Our website may collect personal information such as: Name, contact information such as your email address and demographic information. Likewise, when necessary, specific information may be required. to process an order or make a delivery or billing.",
    thirdHeader: "Use of collected information",
    thirdPart: "Our website uses the information in order to provide the best possible service, particularly to maintain a register of users, orders if applicable, and improve our products and services. They may be periodically sent emails through our site with special offers, new products and other advertising information that we consider relevant to you or that may provide you with some benefit, these emails They will be sent to the address you provide and can be canceled at any time. simpliterms is highly committed to fulfilling its commitment to keep your information secure. We use the most advanced systems and constantly update them to ensure that there is no unauthorized access.",
    fourthHeader: "Cookies Policy",
    fourthPart: "A cookie refers to a file that is sent in order to request permission to be stored on your computer, by accepting said file it is created and the cookie then serves to have information regarding web traffic, and also facilitates future recurring. Another function that cookies have is that with them the web can recognize you individually and therefore provide you with the best personalized service on its web. Our website uses cookies to be able to identify the pages that are visited and their frequency. This information is used only for statistical analysis and then the information is permanently deleted. You can delete cookies at any time from your computer. However cookies help to provide a better service on websites, you do not give access to information from your computer or from you, unless you want it and provide it. directly. You can accept or deny the use of cookies, however most browsers automatically accept cookies as it serves to have a better web service. Also you can change your computer settings to decline the cookies. If they are declined, you may not be able to use some of our services",
    fifthHeader: "Links to Third Parties",
    fifthPart: "This website may contain links to other sites that may be of interest to you. Once you click on these links and leave our page, we no longer have control over the site to which you are redirected and therefore we are not responsible. of the terms or privacy nor of the protection of your data in those other third-party sites. These sites are subject to their own privacy policies, so it is recommended that you consult them to confirm that you agree. with these.",
    sixthHeader: "Control of your personal information",
    sixthPart: "At any time you can restrict the collection or use of personal information that is provided to our website. Every time you are asked to fill in a form, such as user registration, you can mark or unmark the option to receive information by email. In case you have marked the option to receive our newsletter or advertising, you can cancel it at any time. This company will not sell, transfer or distribute the personal information that is collected without your consent, unless required by a judge with a court order. simpliterms reserves the right to change the terms of this Privacy Policy at any time.",
  })

  const [actualLanguage, setactualLanguage] = useState("")

  useEffect(() => {

    const language = localStorage.getItem("language");

    if (language !== null && language !== undefined) {
      setactualLanguage(language);
    }

    switch (language) {
      case "ru":
        settexts({
          firstHeader: "Политика конфиденциальности",
          firstPart: "Настоящая Политика конфиденциальности устанавливает условия использования и защиты информации, предоставляемой пользователями simpliterms при использовании своего веб-сайта. Компания обеспечивает безопасность данных своих пользователей. Когда мы просим вас заполнить поля персональной информации, по которой вы можете быть идентифицированы, мы делаем это, уверяя вас, что она будет использоваться только в соответствии с условиями настоящего документа. Тем не менее, эта Политика конфиденциальности может изменяться со временем или обновляться, поэтому мы рекомендуем и подчеркиваем постоянное обновление этой страницы, чтобы удостовериться, что вы согласны с такими изменениями.",
          secondHeader: "Собираемая информация",
          secondPart: "Наш веб-сайт может собирать персональную информацию, такую как: имя, контактная информация, такая как ваш адрес электронной почты, и демографическая информация. Также, при необходимости, может потребоваться конкретная информация для обработки заказа, доставки или выставления счета.",
          thirdHeader: "Использование собранной информации",
          thirdPart: "Наш веб-сайт использует информацию с целью предоставления наилучшего возможного сервиса, в частности для поддержания реестра пользователей, заказов при наличии, и улучшения наших продуктов и услуг. Периодически через наш сайт могут отправляться электронные письма с специальными предложениями, новыми продуктами и другой рекламной информацией, которую мы считаем для вас актуальной или которая может приносить вам пользу; эти электронные письма будут отправлены на предоставленный вами адрес и могут быть отменены в любое время. simpliterms твердо держится за свое обязательство обеспечить безопасность вашей информации. Мы используем самые современные системы и постоянно их обновляем, чтобы исключить несанкционированный доступ.",
          fourthHeader: "Политика файлов cookie",
          fourthPart: "Файл cookie представляет собой файл, который отправляется с запросом на разрешение хранения на вашем компьютере; принимая этот файл, создается cookie, который затем служит для получения информации о веб-трафике и также облегчает будущие повторные посещения. Еще одной функцией файлов cookie является то, что с их помощью веб-сайт может распознавать вас индивидуально и, следовательно, предоставлять вам лучший персонализированный сервис на своем веб-сайте. Наш веб-сайт использует файлы cookie для идентификации посещаемых страниц и их частоты. Эта информация используется только для статистического анализа, после чего информация удаляется навсегда. Вы можете в любое время удалить файлы cookie с вашего компьютера. Тем не менее файлы cookie помогают предоставить более качественный сервис на веб-сайтах и не предоставляют доступ к информации с вашего компьютера или о вас, если вы этого не хотите и не предоставите эту информацию напрямую. Вы можете принять или отклонить использование файлов cookie, однако большинство браузеров автоматически принимают файлы cookie, так как это служит для обеспечения лучшего веб-сервиса. Также вы можете изменить настройки вашего компьютера, чтобы отклонить файлы cookie. Если они отклонены, вы можете не иметь возможности использовать некоторые из наших услуг.",
          fifthHeader: "Ссылки на сторонние сайты",
          fifthPart: "Этот веб-сайт может содержать ссылки на другие сайты, которые могут быть интересными для вас. После того как вы щелкнете по этим ссылкам и покинете нашу страницу, у нас больше нет контроля над сайтом, на который вы перенаправлены, и, следовательно, мы не несем ответственности за условия или конфиденциальность, а также за защиту ваших данных на этих других сайтах третьих сторон. Эти сайты подчиняются своим собственным политикам конфиденциальности, поэтому рекомендуется ознакомиться с ними, чтобы удостовериться, что вы согласны с ними.",
          sixthHeader: "Управление вашей персональной информацией",
          sixthPart: "Вы можете в любое время ограничить сбор или использование предоставляемой нашему веб-сайту персональной информации. Каждый раз, когда вам предлагается заполнить форму, такую как регистрация пользователя, вы можете отметить или снять отметку с опции получения информации по электронной почте. В случае, если вы отметили опцию получения наших новостных писем или рекламы, вы можете отменить ее в любое время. Эта компания не будет продавать, передавать или распространять собранную персональную информацию без вашего согласия, если это не потребуется постановлением судьи с судебным приказом. simpliterms оставляет за собой право изменять условия настоящей Политики конфиденциальности в любое время."
        });
        break;
      case "zh":
        settexts({
          firstHeader: "隐私政策",
          firstPart: "本隐私政策规定了 simpliterms 在用户使用其网站时提供的信息的使用和保护条款。该公司致力于保护用户数据的安全性。当我们要求您填写可以识别您的个人信息字段时，我们会确保仅根据本文件的条款使用这些信息。然而，隐私政策可能会随时间而变化或更新，因此我们建议并强调不断审查本页面，以确保您同意此类变更。",
          secondHeader: "收集的信息",
          secondPart: "我们的网站可能收集个人信息，如：姓名，联系信息，如您的电子邮件地址和人口统计信息。同样，在必要时，可能需要特定信息来处理订单或进行交付或结算。",
          thirdHeader: "收集信息的用途",
          thirdPart: "我们的网站使用信息以提供最佳服务，特别是维护用户注册，订单（如果适用）并改善我们的产品和服务。可能会定期通过我们的网站发送包含特别优惠、新产品和其他我们认为与您相关或可能为您带来好处的广告信息的电子邮件。这些电子邮件将发送到您提供的地址，可以随时取消订阅。simpliterms 非常致力于履行保护您信息的承诺。我们使用最先进的系统并不断更新以确保没有未经授权的访问。",
          fourthHeader: "Cookie政策",
          fourthPart: "Cookie 是指为请求在您的计算机上存储而发送的文件；接受该文件将创建并生成 Cookie，然后该 Cookie 用于获取有关 Web 流量的信息，还便于将来的重复访问。Cookie 的另一个功能是 Web 可以通过它们单独识别您，因此在其网站上为您提供最佳的个性化服务。我们的网站使用 Cookie 来识别访问的页面及其频率。此信息仅用于统计分析，然后信息将永久删除。您随时可以从计算机上删除 Cookie。但是，Cookie 有助于在网站上提供更好的服务，它们不会访问您的计算机或您的信息，除非您希望并直接提供它们。您可以接受或拒绝使用 Cookie，但是大多数浏览器会自动接受 Cookie，因为这有助于提供更好的 Web 服务。您还可以更改计算机设置以拒绝 Cookie。如果拒绝了 Cookie，则可能无法使用我们的某些服务。",
          fifthHeader: "第三方链接",
          fifthPart: "本网站可能包含链接到其他可能对您感兴趣的网站。一旦您点击这些链接并离开我们的页面，我们将不再控制您被重定向的网站，因此我们对那些其他第三方网站的条款、隐私或您数据的保护不负责。这些网站受其自己的隐私政策约束，因此建议您查阅以确认您同意这些政策。",
          sixthHeader: "个人信息的控制",
          sixthPart: "您随时可以限制我们的网站收集或使用提供的个人信息。每当您被要求填写表格，如用户注册时，您可以选择接收或不接收通过电子邮件发送的信息。如果您选择接收我们的通讯或广告，您随时可以取消。除非受到法官法庭命令的要求，否则本公司不会在未经您同意的情况下出售、转让或分发所收集的个人信息。simpliterms 保留随时更改本隐私政策条款的权利。"
        });
        break;
      case "fr":
        settexts({
          firstHeader: "Politique de confidentialité",
          firstPart: "Cette politique de confidentialité établit les termes selon lesquels simpliterms utilise et protège les informations fournies par ses utilisateurs lors de l'utilisation de son site Web. Cette entreprise s'engage à la sécurité des données de ses utilisateurs. Lorsque nous vous demandons de remplir les champs d'informations personnelles par lesquels vous pouvez être identifié, nous le faisons en nous assurant qu'elles ne seront utilisées que conformément aux termes de ce document. Cependant, cette politique de confidentialité peut changer avec le temps ou être mise à jour, nous vous recommandons donc de consulter régulièrement cette page pour vous assurer que vous êtes d'accord avec ces changements.",
          secondHeader: "Informations collectées",
          secondPart: "Notre site Web peut collecter des informations personnelles telles que : le nom, les coordonnées telles que votre adresse électronique et des informations démographiques. De même, lorsque nécessaire, des informations spécifiques peuvent être requises pour traiter une commande ou effectuer une livraison ou une facturation.",
          thirdHeader: "Utilisation des informations collectées",
          thirdPart: "Notre site Web utilise les informations afin de fournir le meilleur service possible, en particulier pour maintenir un registre des utilisateurs, des commandes le cas échéant, et améliorer nos produits et services. Des courriels peuvent être envoyés périodiquement via notre site avec des offres spéciales, de nouveaux produits et d'autres informations publicitaires que nous estimons pertinentes pour vous ou qui peuvent vous apporter des avantages. Ces courriels seront envoyés à l'adresse que vous fournissez et peuvent être annulés à tout moment. simpliterms est fortement engagé à respecter son engagement de maintenir la sécurité de vos informations. Nous utilisons les systèmes les plus avancés et les mettons constamment à jour pour nous assurer qu'il n'y a pas d'accès non autorisé.",
          fourthHeader: "Politique de cookies",
          fourthPart: "Un cookie fait référence à un fichier qui est envoyé afin de demander la permission d'être stocké sur votre ordinateur ; en acceptant ledit fichier, un cookie est créé et sert ensuite à obtenir des informations sur le trafic Web, et facilite également les futures visites récurrentes. Une autre fonction des cookies est de permettre au site Web de vous reconnaître individuellement et donc de vous fournir le meilleur service personnalisé sur son site. Notre site Web utilise des cookies pour pouvoir identifier les pages qui sont visitées et leur fréquence. Ces informations sont utilisées uniquement à des fins d'analyse statistique, puis les informations sont définitivement supprimées. Vous pouvez supprimer les cookies à tout moment depuis votre ordinateur. Cependant, les cookies contribuent à fournir un meilleur service sur les sites Web, ils n'accèdent pas aux informations de votre ordinateur ou de vous, sauf si vous le souhaitez et les fournissez directement. Vous pouvez accepter ou refuser l'utilisation des cookies, cependant la plupart des navigateurs acceptent automatiquement les cookies car cela sert à avoir un meilleur service Web. Vous pouvez également modifier les paramètres de votre ordinateur pour refuser les cookies. S'ils sont refusés, vous pourriez ne pas être en mesure d'utiliser certains de nos services.",
          fifthHeader: "Liens vers des tiers",
          fifthPart: "Ce site Web peut contenir des liens vers d'autres sites qui pourraient vous intéresser. Une fois que vous cliquez sur ces liens et quittez notre page, nous n'avons plus le contrôle sur le site vers lequel vous êtes redirigé et nous ne sommes donc pas responsables des conditions ou de la confidentialité, ni de la protection de vos données sur ces autres sites tiers. Ces sites sont soumis à leurs propres politiques de confidentialité, il est donc recommandé de les consulter pour confirmer que vous êtes d'accord avec celles-ci.",
          sixthHeader: "Contrôle de vos informations personnelles",
          sixthPart: "Vous pouvez à tout moment restreindre la collecte ou l'utilisation des informations personnelles fournies à notre site Web. Chaque fois que vous êtes invité à remplir un formulaire, tel qu'une inscription d'utilisateur, vous pouvez cocher ou décocher l'option de recevoir des informations par e-mail. Si vous avez coché l'option de recevoir notre newsletter ou de la publicité, vous pouvez l'annuler à tout moment. Cette entreprise ne vendra, ne transférera ni ne distribuera les informations personnelles collectées sans votre consentement, sauf si cela est requis par un juge avec une ordonnance du tribunal. simpliterms se réserve le droit de modifier les termes de cette politique de confidentialité à tout moment."
        });
        break;
      case "po":
        settexts({
          firstHeader: "Política de Privacidade",
          firstPart: "Esta Política de Privacidade estabelece os termos nos quais a simpliterms utiliza e protege as informações fornecidas por seus usuários ao utilizar seu site. Esta empresa compromete-se com a segurança dos dados de seus usuários. Quando solicitamos que você preencha os campos de informações pessoais pelos quais você pode ser identificado, fazemos isso garantindo que essas informações serão utilizadas apenas de acordo com os termos deste documento. No entanto, esta Política de Privacidade pode sofrer alterações ao longo do tempo ou ser atualizada, por isso recomendamos e enfatizamos a revisão contínua desta página para garantir que você concorde com tais alterações.",
          secondHeader: "Informações coletadas",
          secondPart: "Nosso site pode coletar informações pessoais, como: Nome, informações de contato, como seu endereço de e-mail, e informações demográficas. Da mesma forma, quando necessário, informações específicas podem ser exigidas para processar um pedido ou efetuar uma entrega ou cobrança.",
          thirdHeader: "Uso das informações coletadas",
          thirdPart: "Nosso site utiliza as informações para fornecer o melhor serviço possível, especialmente para manter um registro de usuários, pedidos, se aplicável, e melhorar nossos produtos e serviços. Emails podem ser enviados periodicamente através de nosso site com ofertas especiais, novos produtos e outras informações publicitárias que consideramos relevantes para você ou que possam oferecer algum benefício, esses e-mails serão enviados para o endereço que você fornecer e podem ser cancelados a qualquer momento. A simpliterms está altamente comprometida em cumprir o compromisso de manter suas informações seguras. Utilizamos sistemas avançados e os atualizamos constantemente para garantir que não haja acesso não autorizado.",
          fourthHeader: "Política de Cookies",
          fourthPart: "Um cookie se refere a um arquivo que é enviado para solicitar permissão para ser armazenado em seu computador, ao aceitar tal arquivo, ele é criado e o cookie serve para ter informações sobre o tráfego na web, além de facilitar futuras visitas recorrentes. Outra função dos cookies é permitir que o site o reconheça individualmente e, portanto, forneça o melhor serviço personalizado em seu site. Nosso site usa cookies para identificar as páginas que são visitadas e sua frequência. Essas informações são usadas apenas para análise estatística e, em seguida, as informações são permanentemente excluídas. Você pode excluir os cookies a qualquer momento do seu computador. No entanto, os cookies ajudam a fornecer um melhor serviço em sites, eles não dão acesso às informações do seu computador ou a você, a menos que você queira e forneça diretamente. Você pode aceitar ou recusar o uso de cookies, no entanto, a maioria dos navegadores aceita automaticamente cookies, pois isso serve para ter um melhor serviço na web. Você também pode alterar as configurações do seu computador para recusar os cookies. Se recusados, você pode não conseguir usar alguns de nossos serviços.",
          fifthHeader: "Links para Terceiros",
          fifthPart: "Este site pode conter links para outros sites que podem ser de interesse para você. Uma vez que você clique nesses links e saia de nossa página, não temos mais controle sobre o site para o qual você é redirecionado e, portanto, não somos responsáveis pelos termos ou privacidade nem pela proteção de seus dados nesses outros sites de terceiros. Esses sites estão sujeitos às suas próprias políticas de privacidade, então é recomendável que você as consulte para confirmar que concorda com elas.",
          sixthHeader: "Controle de suas informações pessoais",
          sixthPart: "A qualquer momento, você pode restringir a coleta ou uso das informações pessoais fornecidas ao nosso site. Sempre que for solicitado a preencher um formulário, como o registro de usuário, você pode marcar ou desmarcar a opção de receber informações por e-mail. Caso tenha marcado a opção de receber nossa newsletter ou publicidade, você pode cancelá-la a qualquer momento. Esta empresa não venderá, transferirá ou distribuirá as informações pessoais coletadas sem o seu consentimento, a menos que exigido por um juiz com uma ordem judicial. A simpliterms reserva o direito de alterar os termos desta Política de Privacidade a qualquer momento."
        });
        break;
      case "es":
        settexts({
          firstHeader: "Política de Privacidad",
          firstPart: "Esta Política de Privacidad establece los términos en los cuales simpliterms utiliza y protege la información proporcionada por sus usuarios al utilizar su sitio web. Esta empresa se compromete con la seguridad de los datos de sus usuarios. Cuando solicitamos que complete los campos de información personal por los cuales puede ser identificado, lo hacemos asegurándonos de que esta información se utilizará solo de acuerdo con los términos de este documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o actualizarse, por lo que recomendamos y enfatizamos revisar continuamente esta página para asegurarse de estar de acuerdo con dichos cambios.",
          secondHeader: "Información recopilada",
          secondPart: "Nuestro sitio web puede recopilar información personal como: nombre, información de contacto como su dirección de correo electrónico e información demográfica. Del mismo modo, cuando sea necesario, se puede requerir información específica para procesar un pedido o realizar una entrega o facturación.",
          thirdHeader: "Uso de la información recopilada",
          thirdPart: "Nuestro sitio web utiliza la información para proporcionar el mejor servicio posible, especialmente para mantener un registro de usuarios, pedidos en caso de ser aplicable y mejorar nuestros productos y servicios. Se pueden enviar correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideramos relevante para usted o que pueda brindarle algún beneficio; estos correos electrónicos se enviarán a la dirección que proporcione y se pueden cancelar en cualquier momento. simpliterms está altamente comprometido a cumplir con su compromiso de mantener segura su información. Utilizamos sistemas avanzados y los actualizamos constantemente para garantizar que no haya acceso no autorizado.",
          fourthHeader: "Política de Cookies",
          fourthPart: "Una cookie se refiere a un archivo que se envía con el fin de solicitar permiso para almacenarse en su computadora; al aceptar dicho archivo se crea la cookie y sirve luego para tener información sobre el tráfico web, y también facilita visitas recurrentes en el futuro. Otra función de las cookies es que el sitio web puede reconocerlo individualmente y, por lo tanto, proporcionarle el mejor servicio personalizado en su sitio. Nuestro sitio web utiliza cookies para identificar las páginas que son visitadas y su frecuencia. Esta información se utiliza solo para análisis estadístico y luego la información se elimina permanentemente. Puede eliminar las cookies en cualquier momento desde su computadora. Sin embargo, las cookies ayudan a proporcionar un mejor servicio en los sitios web, no dan acceso a la información de su computadora ni a usted, a menos que lo desee y la proporcione directamente. Puede aceptar o rechazar el uso de cookies, sin embargo, la mayoría de los navegadores aceptan automáticamente las cookies ya que esto sirve para tener un mejor servicio web. También puede cambiar la configuración de su computadora para rechazar las cookies. Si las rechaza, es posible que no pueda usar algunos de nuestros servicios.",
          fifthHeader: "Enlaces a terceros",
          fifthPart: "Este sitio web puede contener enlaces a otros sitios que puedan ser de su interés. Una vez que haga clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre el sitio al que es redirigido y, por lo tanto, no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios de terceros. Estos sitios están sujetos a sus propias políticas de privacidad, por lo que se recomienda que los consulte para confirmar que está de acuerdo con ellas.",
          sixthHeader: "Control de su información personal",
          sixthPart: "En cualquier momento puede restringir la recopilación o el uso de la información personal proporcionada a nuestro sitio web. Cada vez que se le solicite completar un formulario, como el registro de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad, puede cancelarlo en cualquier momento. Esta empresa no venderá, transferirá ni distribuirá la información personal recopilada sin su consentimiento, a menos que lo exija un juez con una orden judicial. simpliterms se reserva el derecho de cambiar los términos de esta Política de Privacidad en cualquier momento."
        });
        break;
      case "ja":
        settexts({
          firstHeader: "プライバシーポリシー",
          firstPart: "このプライバシーポリシーは、simplitermsがウェブサイトを利用する際にユーザーから提供される情報をどのように利用し保護するかについての条件を定めています。この企業はユーザーデータのセキュリティにコミットしています。個人を識別できる個人情報の入力をお願いする際には、この文書の条件に従ってのみ使用されることを確認しつつ行います。ただし、このプライバシーポリシーは変更される可能性があります。時間の経過とともに更新されることがあるため、これらの変更に同意しているかどうかを確認するために、定期的にこのページを確認することをお勧めします。",
          secondHeader: "収集される情報",
          secondPart: "当社のウェブサイトは、お名前、電子メールアドレスなどの連絡先情報、デモグラフィック情報などの個人情報を収集することがあります。また、必要に応じて、注文の処理や配信、請求のために特定の情報が必要になることがあります。",
          thirdHeader: "収集した情報の利用",
          thirdPart: "当社のウェブサイトは、最高のサービスを提供するために情報を使用し、特にユーザーの登録や注文（該当する場合）、製品やサービスの向上のためのユーザーレジストリの維持などに利用します。定期的に、当社のウェブサイトを通じて特別オファーや新製品、その他の関連性があると考える広告情報が含まれた電子メールが送信されることがあります。これらの電子メールは提供されたアドレスに送信され、いつでもキャンセルできます。simplitermsは、お客様の情報を安全に保つことに約束しています。最も先進的なシステムを使用し、常に更新して不正アクセスがないようにしています。",
          fourthHeader: "Cookieポリシー",
          fourthPart: "Cookieは、コンピュータに保存する許可を要求するために送信されるファイルを指します。そのファイルを受け入れることでCookieが作成され、その後、Webトラフィックに関する情報を持つために使用され、将来の再発行を容易にします。Cookieの別の機能は、Webがそれらを使用して個別にあなたを認識し、その結果、そのWeb上で最高のパーソナライズされたサービスを提供できるようにすることです。当社のウェブサイトでは、訪れたページとその頻度を識別するためにCookieを使用します。この情報は統計分析のためにのみ使用され、その後情報は永久に削除されます。コンピュータからいつでもCookieを削除できます。ただし、CookieはWebサイトでより良いサービスを提供するのに役立ちます。あなたのコンピュータやあなたの情報へのアクセス権は、希望すれば提供するまでありません。Cookieの使用を承諾または拒否できますが、ほとんどのブラウザは自動的にCookieを受け入れます。これはより良いWebサービスを提供するためです。コンピュータの設定を変更してCookieを拒否することもできます。拒否した場合、一部のサービスを利用できない可能性があります。",
          fifthHeader: "第三者へのリンク",
          fifthPart: "このウェブサイトには、お客様に興味を持っていただけるかもしれない他のサイトへのリンクが含まれている場合があります。これらのリンクをクリックして当社のページを離れると、リダイレクトされたサイトについての当社の制御権はなくなります。そのため、その他の第三者のサイトでの利用規約やプライバシー、データの保護については当社は責任を負いません。これらのサイトは独自のプライバシーポリシーに従っており、同意しているかどうかを確認するためにそれらを参照することをお勧めします。",
          sixthHeader: "個人情報の制御",
          sixthPart: "いつでも当社のウェブサイトに提供された個人情報の収集または使用を制限できます。ユーザー登録などのフォームに記入するたびに、電子メールでの情報受信のオプションを選択または選択解除できます。ニュースレターや広告の受信オプションを選択した場合、いつでもキャンセルできます。この企業は、裁判官の裁判命令がある場合を除き、お客様の同意なしに収集された個人情報を売却、転送、または配布しません。simplitermsは随時、このプライバシーポリシーの条件を変更する権利を留保しています。"
        });
        break;
      case "hi":
        settexts({
          firstHeader: "गोपनीयता नीति",
          firstPart: "यह गोपनीयता नीति स्थापित करती है कि simpliterms उपयोगकर्ताओं द्वारा अपनी वेबसाइट का उपयोग करते समय प्रदान की गई जानकारी का उपयोग और सुरक्षित कैसे करती है। यह कंपनी अपने उपयोगकर्ताओं के डेटा की सुरक्षा के प्रति प्रतिबद्ध है। जब हम आपसे आपकी पहचान की जा सकने वाली व्यक्तिगत जानकारी के क्षेत्रों को भरने के लिए कहते हैं, तो हम यह सुनिश्चित करने के लिए करते हैं कि इसका केवल इस दस्तावेज़ के शर्तों के अनुसार ही उपयोग होगा। हालांकि, यह गोपनीयता नीति समय के साथ बदल सकती है या अपडेट की जा सकती है, इसलिए हम सुझाव देते हैं और यहां बदलावों के साथ सहमत हैं इसे निरंतर समीक्षण करने के लिए।",
          secondHeader: "जितनी जानकारी जुटाई जाती है",
          secondPart: "हमारी वेबसाइट ऐसी व्यक्तिगत जानकारी जुटा सकती है जैसे: नाम, ईमेल पता और जनसंख्या सहित संपर्क सूचना। उसी तरह, जब आवश्यक हो, आदेश प्रोसेस करने या वितरण या बिलिंग करने के लिए विशिष्ट जानकारी की आवश्यकता हो सकती है।",
          thirdHeader: "जुटाई गई जानकारी का उपयोग",
          thirdPart: "हमारी वेबसाइट जानकारी का उपयोग सर्वोत्तम सेवा प्रदान करने, विशेष रूप से उपयोगकर्ता, आदेश (यदि लागू हो), और हमारे उत्पादों और सेवाओं को सुधारने के लिए किया जाता है। समय-समय पर हमारी साइट के माध्यम से विशेष प्रस्तावों, नए उत्पादों और अन्य विज्ञापन सूचनाओं के साथ ईमेल भेजे जा सकते हैं जो हम आपके लिए योग्य या आपको कुछ लाभ प्रदान कर सकते हैं, इन ईमेल्स को आप जो जानकारी प्रदान करेंगे, और इन्हें किसी भी समय रद्द किया जा सकता है। simpliterms आपकी जानकारी को सुरक्षित रखने के लिए अत्यंत प्रतिबद्ध है। हम सबसे उन्नत सिस्टम का उपयोग करते हैं और निरंतर उन्हें अपडेट करते हैं ताकि कोई अनधिकृत पहुंच न हो।",
          fourthHeader: "कुकीज़ नीति",
          fourthPart: "कुकी एक फ़ाइल को संदर्भित करती है जिसे आपके कंप्यूटर पर स्टोर करने की अनुमति के लिए भेजा जाता है, इस फ़ाइल को स्वीकार करने से एक कुकी बनती है और फिर कुकी उस समय से वेब ट्रैफ़िक के बारे में जानकारी होती है, और भविष्य में पुनरावृत्ति को सुगम बनाती है। कुकीज़ की एक अन्य कार्यक्षमता है कि उनके माध्यम से वेब आपको व्यक्तिगत सेवा प्रदान करने की क्षमता होती है। हमारी वेबसाइट कुकीज़ का उपयोग कर सकती है ताकि वह पहचान सके कि कौन-कौन से पृष्ठ देखे जा रहे हैं और उनकी आवृत्ति। यह जानकारी केवल सांख्यिकीय विश्लेषण के लिए है और फिर जानकारी को स्थायी रूप से मिटा दिया जाता है। आप अपने कंप्यूटर से कभी भी कुकीज़ को मिटा सकते हैं। हालांकि, कुकीज़ वेबसाइट्स पर बेहतर सेवा प्रदान करने में मदद करती हैं, ये आपके कंप्यूटर या आप से जानकारी का उपयोग नहीं करती हैं, यदि आप नहीं चाहते और सीधे प्रदान करते हैं। आप कुकीज़ का उपयोग स्वीकार या नकारा कर सकते हैं, हालांकि अधिकांश ब्राउज़र्स स्वचालित रूप से कुकीज़ को स्वीकार करते हैं क्योंकि इससे वेब सेवाको बेहतर बनाने में मदद करता है। आप भी अपने कंप्यूटर की सेटिंग्स को बदलकर कुकीज़ को अस्वीकृत कर सकते हैं। यदि वे अस्वीकृत हैं, तो आप हमारी कुछ सेवाएँ उपयोग नहीं कर सकते हैं।",
          fifthHeader: "तीसरे पक्षों के लिंक",
          fifthPart: "इस वेबसाइट पर आपको रुचिकर लग सकने वाली अन्य साइटों के लिंक हो सकते हैं। इन लिंक्स पर क्लिक करने और हमारी पृष्ठ से बाहर जाने के बाद, हमारे पास आपको पुनर्निर्देशित किए जाने वाले साइट पर कोई नियंत्रण नहीं रहता है और इसलिए हम उन अन्य तिसरे पक्षों की शर्तों या गोपनीयता या उनके डेटा की सुरक्षा के लिए जिम्मेदार नहीं होते हैं। इन साइट्स पर उनकी अपनी गोपनीयता नीतिएँ होती हैं, इसलिए यह सुनिश्चित करने के लिए सिफारिश की जाती है कि आप इन्हें सत्यापित करें।",
          sixthHeader: "आपकी व्यक्तिगत जानकारी का नियंत्रण",
          sixthPart: "आप किसी भी समय हमारी वेबसाइट को प्रदान की जाने वाली व्यक्तिगत जानकारी को प्रतिबंधित या उपयोग को सीमित कर सकते हैं। हर बार जब आपसे जैसे उपयोगकर्ता पंजीकरण करने के लिए फॉर्म भरने के लिए कहा जाएगा, तो आप ईमेल द्वारा जानकारी प्राप्त करने के लिए विकल्प को चिह्नित या अचिह्नित कर सकते हैं। यदि आपने हमारा न्यूजलेटर या विज्ञापन प्राप्त करने का विकल्प चुना है, तो आप इसे कभी भी रद्द कर सकते हैं। इस कंपनी यह सुनिश्चित करने के लिए आत्मसमर्पितहै कि आपकी जानकारी को सुरक्षित रखने के लिए। हम सबसे उन्नत सिस्टम का उपयोग करते हैं और निरंतर उन्हें अपडेट करते हैं ताकि कोई अनधिकृत पहुंच न हो। simpliterms अपनी गोपनीयता नीति के इस प्रतिबद्धता का अधिकृत है।"
        });
        break;
      default:
        break;
    }

  }, []);

  return (
    <>
      <Navbar language={actualLanguage} />
      <main className='px-[10%]'>
        <h1 className='font-bold text-3xl mt-4 text-[#5712DF]'>{texts.firstHeader}</h1>
        <p className='py-4'>{texts.firstPart}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{texts.secondHeader}</h2>
        <p className='py-4'>{texts.secondPart}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{texts.thirdHeader}</h2>
        <p className='py-4'>{texts.thirdPart}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{texts.fourthHeader}</h2>
        <p className='py-4'>{texts.fourthPart}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{texts.fifthHeader}</h2>
        <p className='py-4'>{texts.fifthPart}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{texts.sixthHeader}</h2>
        <p className='py-4'>{texts.sixthPart}</p>
      </main>
      <Footer language={actualLanguage} />
    </>

  )
}

export default PrivacyPageLanguages;
