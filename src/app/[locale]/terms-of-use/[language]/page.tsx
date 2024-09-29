"use client"
import React, { useEffect, useState } from 'react';

import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';

const TermsOfUseLanguage = () => {

  const [texts, settexts] = useState({
    firstHeader: "Terms and Conditions of Use",
    firstPart: "It is a necessary requirement for the acquisition of the products offered on this site, that you read and accept the following Terms and Conditions that are written below. The use of our services as well as the purchase of our products It will imply that you have read and accepted the Terms and Conditions of Use in this document. All the products that are offered by our website could be created, charged, sent or presented by a third website and in such case they would be subject to their own Terms and Conditions. In some cases, to acquire a product, the user will need to register, with the entry of reliable personal data and definition of a password. The user can choose and change the password for his account administration access at any time, if he has registered and that is necessary for the purchase of any of our products. https://simpliterms.com/ does not assume responsibility in the event that you give said password to third parties. All purchases and transactions carried out through this website are subject to a confirmation and verification process, which could include verification of the stock and product availability, validation of the form of payment, validation of the invoice (if any) and compliance with the conditions required by the selected means of payment. In some cases, verification by email may be required. The prices of the products offered in this Online Store are valid only for purchases made on this website.",
    secondHeader: "LICENCE",
    secondPart: "Simpliterms Through its website it grants a license for users to use the products that are sold on this website in accordance with the Terms and Conditions described in this document.",
    thirdHeader: "UNAUTHORIZED USE",
    thirdPart: "If applicable (for sale of software, templates, or other design and programming product) you may not place one of our products, modified or unmodified, on a CD, website or any other medium and offer them for redistribution. or resale of any kind.",
    fourthHeader: "PROPERTY",
    fourthPart: "You cannot declare intellectual or exclusive property to any of our products, modified or unmodified. All products are the property of the content providers. Unless otherwise specified, our products are provided   without any kind of warranty, express or implied. In no way will this company be liable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses resulting from the use or inability to use our products.",
    fifthHeader: "REFUND AND GUARANTEE POLICY",
    fifthPart: "Refunds will be approved as long as the reason for the refund is because the program you subscribed to was fraud or misleading information, otherwise there will be no refund.",
  })

  const [actualLanguage, setactualLanguage] = useState("")

  useEffect(() => {

    const language = localStorage.getItem("language");

    if (language !== null && language !== undefined) {
      setactualLanguage(language);
    }

    switch (language) {
      case "en":
        settexts({
          firstHeader: "Terms and Conditions of Use",
          firstPart: "It is a necessary requirement for the acquisition of the products offered on this site, that you read and accept the following Terms and Conditions that are written below. The use of our services as well as the purchase of our products It will imply that you have read and accepted the Terms and Conditions of Use in this document. All the products that are offered by our website could be created, charged, sent or presented by a third website and in such case they would be subject to their own Terms and Conditions. In some cases, to acquire a product, the user will need to register, with the entry of reliable personal data and definition of a password. The user can choose and change the password for his account administration access at any time, if he has registered and that is necessary for the purchase of any of our products. https://simpliterms.com/ does not assume responsibility in the event that you give said password to third parties. All purchases and transactions carried out through this website are subject to a confirmation and verification process, which could include verification of the stock and product availability, validation of the form of payment, validation of the invoice (if any) and compliance with the conditions required by the selected means of payment. In some cases, verification by email may be required. The prices of the products offered in this Online Store are valid only for purchases made on this website.",
          secondHeader: "LICENCE",
          secondPart: "Simpliterms Through its website it grants a license for users to use the products that are sold on this website in accordance with the Terms and Conditions described in this document.",
          thirdHeader: "UNAUTHORIZED USE",
          thirdPart: "If applicable (for sale of software, templates, or other design and programming product) you may not place one of our products, modified or unmodified, on a CD, website or any other medium and offer them for redistribution. or resale of any kind.",
          fourthHeader: "PROPERTY",
          fourthPart: "You cannot declare intellectual or exclusive property to any of our products, modified or unmodified. All products are the property of the content providers. Unless otherwise specified, our products are provided   without any kind of warranty, express or implied. In no way will this company be liable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses resulting from the use or inability to use our products.",
          fifthHeader: "REFUND AND GUARANTEE POLICY",
          fifthPart: "Refunds will be approved as long as the reason for the refund is because the program you subscribed to was fraud or misleading information, otherwise there will be no refund."
        });
        break;
      case "ru":
        settexts({
          firstHeader: "Условия использования",
          firstPart: "Это обязательное требование для приобретения продукции, предлагаемой на этом сайте, чтобы вы прочитали и приняли следующие Условия использования, написанные ниже. Использование наших услуг, а также покупка наших продуктов будет означать, что вы прочитали и приняли Условия использования, изложенные в настоящем документе. Все продукты, предлагаемые нашим сайтом, могут быть созданы, оплачены, отправлены или представлены третьим сайтом, и в таком случае они подпадут под свои собственные Условия использования. В некоторых случаях для приобретения продукта пользователь должен будет зарегистрироваться, указав достоверные персональные данные и установив пароль. Пользователь может выбрать и изменить пароль для доступа к администрированию своей учетной записи в любое время, если он зарегистрирован и это необходимо для покупки любого из наших продуктов. https://simpliterms.com/ не несет ответственности в случае предоставления вами пароля третьим лицам. Все покупки и транзакции, осуществляемые через этот сайт, подлежат процессу подтверждения и проверки, который может включать проверку наличия товара и его доступности, проверку формы оплаты, проверку счета (если применимо) и соблюдение условий, установленных выбранным средством оплаты. В некоторых случаях может потребоваться проверка по электронной почте. Цены на продукцию, предлагаемую в этом интернет-магазине, действительны только для покупок, совершенных на этом сайте.",
          secondHeader: "ЛИЦЕНЗИЯ",
          secondPart: "Simpliterms через свой сайт предоставляет лицензию пользователям на использование продуктов, продаваемых на этом сайте, в соответствии с Условиями использования, описанными в настоящем документе.",
          thirdHeader: "НЕАВТОРИЗОВАННОЕ ИСПОЛЬЗОВАНИЕ",
          thirdPart: "При применении (при продаже программного обеспечения, шаблонов или других продуктов дизайна и программирования) вы не можете помещать один из наших продуктов, измененных или неизмененных, на CD, веб-сайт или любой другой носитель и предлагать их для повторного распределения. или перепродажа любого рода.",
          fourthHeader: "СОБСТВЕННОСТЬ",
          fourthPart: "Вы не можете заявлять об интеллектуальной или исключительной собственности на любой из наших продуктов, измененных или неизмененных. Все продукты являются собственностью предоставителей контента, если не указано иное. Наши продукты предоставляются без каких-либо гарантий, явных или подразумеваемых. В никаком случае эта компания не несет ответственности за любые убытки, включая, но не ограничиваясь прямыми, косвенными, специальными, случайными или последующими убытками или другими потерями, возникающими из использования или неспособности использовать наши продукты.",
          fifthHeader: "ПОЛИТИКА ВОЗВРАТА И ГАРАНТИИ",
          fifthPart: "Возвраты будут одобрены только в том случае, если причиной возврата является мошенничество или введение в заблуждение в отношении программы, на которую вы подписались, в противном случае возврата не будет."
        });
        break;
      case "zh":
        settexts({
          firstHeader: "使用条款和条件",
          firstPart: "阅读和接受下文所写的以下条款和条件是在购买本网站上提供的产品的必要条件。使用我们的服务以及购买我们的产品将意味着您已阅读并接受本文档中的使用条款和条件。本网站提供的所有产品都可能由第三方网站创建、收费、发送或展示，如果是这种情况，它们将受到其自己的条款和条件的约束。在某些情况下，为了购买产品，用户将需要注册，输入可靠的个人数据并设置密码。用户可以随时选择和更改他的账户管理访问的密码，如果他已经注册并且这是购买我们任何产品所必需的。https://simpliterms.com/ 不承担责任，如果您将该密码提供给第三方。通过本网站进行的所有购买和交易均受到确认和验证过程的约束，该过程可能包括库存和产品可用性的验证、付款形式的验证、发票（如果有的话）的验证以及符合所选付款方式要求的条件。在某些情况下，可能需要通过电子邮件进行验证。本在线商店提供的产品的价格仅对在本网站上购买的有效。",
          secondHeader: "许可证",
          secondPart: "通过其网站，Simpliterms向用户授予使用根据本文档中描述的条款和条件出售的产品的许可。",
          thirdHeader: "未经授权的使用",
          thirdPart: "如果适用（用于销售软件、模板或其他设计和编程产品），您不得将我们的产品之一（经修改或未修改）放置在CD、网站或任何其他媒介上，并提供它们进行任何形式的再分配或转售。",
          fourthHeader: "财产",
          fourthPart: "您不能声明我们的任何产品（经修改或未修改）的知识产权或专有权。所有产品都是内容提供者的财产。除非另有说明，否则我们的产品均按原样提供，不附带任何形式的保证，明示或暗示。在任何情况下，本公司均不对因使用或无法使用我们的产品而导致的任何损害负责，包括但不限于直接、间接、特殊、偶然或因果关系的损害或其他损失。",
          fifthHeader: "退款和保证政策",
          fifthPart: "只有在退款的原因是因为您订阅的程序是欺诈或误导信息时，退款才会被批准，否则将不予退款。"
        });
        break;
      case "fr":
        settexts({
          firstHeader: "Conditions d'utilisation",
          firstPart: "Il est nécessaire, pour l'acquisition des produits proposés sur ce site, que vous lisiez et acceptiez les Conditions d'utilisation suivantes qui sont écrites ci-dessous. L'utilisation de nos services ainsi que l'achat de nos produits impliqueront que vous avez lu et accepté les Conditions d'utilisation figurant dans ce document. Tous les produits proposés par notre site web pourraient être créés, facturés, envoyés ou présentés par un site web tiers et, dans ce cas, ils seraient soumis à leurs propres Conditions d'utilisation. Dans certains cas, pour acquérir un produit, l'utilisateur devra s'inscrire, avec la saisie de données personnelles fiables et la définition d'un mot de passe. L'utilisateur peut choisir et changer le mot de passe pour l'accès à l'administration de son compte à tout moment, s'il est inscrit et que cela est nécessaire pour l'achat de l'un de nos produits. https://simpliterms.com/ décline toute responsabilité en cas de divulgation de ce mot de passe à des tiers. Tous les achats et transactions effectués via ce site web sont soumis à un processus de confirmation et de vérification, qui pourrait inclure la vérification des stocks et de la disponibilité des produits, la validation de la forme de paiement, la validation de la facture (le cas échéant) et le respect des conditions requises par le moyen de paiement sélectionné. Dans certains cas, une vérification par e-mail peut être nécessaire. Les prix des produits proposés dans cette boutique en ligne sont valables uniquement pour les achats effectués sur ce site web.",
          secondHeader: "LICENCE",
          secondPart: "Simpliterms, par le biais de son site web, accorde une licence aux utilisateurs pour utiliser les produits vendus sur ce site conformément aux Conditions d'utilisation décrites dans ce document.",
          thirdHeader: "UTILISATION NON AUTORISÉE",
          thirdPart: "Si applicable (pour la vente de logiciels, de modèles ou d'autres produits de conception et de programmation), vous ne pouvez pas placer l'un de nos produits, modifié ou non modifié, sur un CD, un site web ou tout autre support et les offrir pour redistribution. ou revente de quelque nature que ce soit.",
          fourthHeader: "PROPRIÉTÉ",
          fourthPart: "Vous ne pouvez pas déclarer la propriété intellectuelle ou exclusive de l'un de nos produits, modifié ou non modifié. Tous les produits sont la propriété des fournisseurs de contenu. Sauf indication contraire, nos produits sont fournis   sans aucune sorte de garantie, explicite ou implicite. En aucun cas, cette entreprise ne sera responsable de tout dommage, y compris, mais sans s'y limiter, les dommages directs, indirects, spéciaux, accidentels ou consécutifs ou autres pertes résultant de l'utilisation ou de l'impossibilité d'utiliser nos produits.",
          fifthHeader: "POLITIQUE DE REMBOURSEMENT ET DE GARANTIE",
          fifthPart: "Les remboursements seront approuvés tant que la raison du remboursement est que le programme auquel vous avez souscrit était une fraude ou une information trompeuse, sinon aucun remboursement ne sera effectué.",

        });
        break;
      case "po":
        settexts({
          firstHeader: "Termos e Condições de Uso",
          firstPart: "É um requisito necessário para a aquisição dos produtos oferecidos neste site que você leia e aceite os Termos e Condições seguintes escritos abaixo. O uso de nossos serviços, bem como a compra de nossos produtos, implicará que você leu e aceitou os Termos e Condições de Uso neste documento. Todos os produtos oferecidos pelo nosso site podem ser criados, cobrados, enviados ou apresentados por um terceiro site e, nesse caso, estarão sujeitos aos seus próprios Termos e Condições. Em alguns casos, para adquirir um produto, o usuário precisará se registrar, com a entrada de dados pessoais confiáveis e definição de uma senha. O usuário pode escolher e alterar a senha para o acesso à administração de sua conta a qualquer momento, se estiver registrado e isso for necessário para a compra de qualquer um de nossos produtos. O https://simpliterms.com/ não assume responsabilidade no caso de você fornecer essa senha a terceiros. Todas as compras e transações realizadas por meio deste site estão sujeitas a um processo de confirmação e verificação, que pode incluir verificação do estoque e disponibilidade do produto, validação da forma de pagamento, validação da fatura (se houver) e cumprimento das condições exigidas pelo meio de pagamento selecionado. Em alguns casos, pode ser necessária a verificação por e-mail. Os preços dos produtos oferecidos nesta Loja Online são válidos apenas para compras feitas neste site.",
          secondHeader: "LICENÇA",
          secondPart: "Através do seu site, a Simpliterms concede uma licença aos usuários para usar os produtos vendidos neste site de acordo com os Termos e Condições descritos neste documento.",
          thirdHeader: "USO NÃO AUTORIZADO",
          thirdPart: "Se aplicável (para venda de software, modelos ou outros produtos de design e programação), você não pode colocar um de nossos produtos, modificado ou não modificado, em um CD, site ou qualquer outro meio e oferecê-los para redistribuição ou revenda de qualquer tipo.",
          fourthHeader: "PROPRIEDADE",
          fourthPart: "Você não pode declarar propriedade intelectual ou exclusiva de nenhum de nossos produtos, modificado ou não modificado. Todos os produtos são propriedade dos provedores de conteúdo. A menos que seja especificado o contrário, nossos produtos são fornecidos   sem qualquer tipo de garantia, expressa ou implícita. De forma alguma esta empresa será responsável por quaisquer danos, incluindo, mas não se limitando a, danos diretos, indiretos, especiais, incidentais ou consequentes ou outras perdas decorrentes do uso ou da impossibilidade de usar nossos produtos.",
          fifthHeader: "POLÍTICA DE REEMBOLSO E GARANTIA",
          fifthPart: "Reembolsos serão aprovados contanto que o motivo do reembolso seja porque o programa ao qual você se inscreveu era fraudulento ou continha informações enganosas; caso contrário, não haverá reembolso.",
        });
        break;
      case "es":
        settexts({
          firstHeader: "Términos y Condiciones de Uso",
          firstPart: "Es un requisito necesario para la adquisición de los productos ofrecidos en este sitio que lea y acepte los siguientes Términos y Condiciones que se describen a continuación. El uso de nuestros servicios, así como la compra de nuestros productos, implicará que ha leído y aceptado los Términos y Condiciones de Uso en este documento. Todos los productos que se ofrecen en nuestro sitio web pueden ser creados, cobrados, enviados o presentados por un tercer sitio web y, en ese caso, estarán sujetos a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, el usuario deberá registrarse, con la entrada de datos personales confiables y la definición de una contraseña. El usuario puede elegir y cambiar la contraseña para el acceso a la administración de su cuenta en cualquier momento, si está registrado y es necesario para la compra de alguno de nuestros productos. https://simpliterms.com/ no asume responsabilidad en caso de que proporcione dicha contraseña a terceros. Todas las compras y transacciones realizadas a través de este sitio web están sujetas a un proceso de confirmación y verificación, que podría incluir la verificación del stock y la disponibilidad del producto, la validación de la forma de pago, la validación de la factura (si la hay) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos, puede ser necesaria la verificación por correo electrónico. Los precios de los productos ofrecidos en esta Tienda en Línea son válidos solo para compras realizadas en este sitio web.",
          secondHeader: "LICENCIA",
          secondPart: "Simpliterms, a través de su sitio web, otorga una licencia a los usuarios para utilizar los productos que se venden en este sitio web de acuerdo con los Términos y Condiciones descritos en este documento.",
          thirdHeader: "USO NO AUTORIZADO",
          thirdPart: "Si corresponde (para la venta de software, plantillas u otros productos de diseño y programación), no puede colocar uno de nuestros productos, modificado o no modificado, en un CD, sitio web o cualquier otro medio y ofrecerlos para redistribución o reventa de cualquier tipo.",
          fourthHeader: "PROPIEDAD",
          fourthPart: "No puede declarar propiedad intelectual o exclusiva de ninguno de nuestros productos, modificado o no modificado. Todos los productos son propiedad de los proveedores de contenido. A menos que se especifique lo contrario, nuestros productos se proporcionan   sin ningún tipo de garantía, expresa o implícita. En ningún caso esta empresa será responsable de los daños, incluidos, entre otros, daños directos, indirectos, especiales, incidentales o consecuentes, o de otras pérdidas derivadas del uso o la imposibilidad de usar nuestros productos.",
          fifthHeader: "POLÍTICA DE REEMBOLSO Y GARANTÍA",
          fifthPart: "Se aprobarán reembolsos siempre que la razón del reembolso sea que el programa al que se suscribió era fraudulento o contenía información engañosa; de lo contrario, no habrá reembolso.",
        });
        break;
      case "ja":
        settexts({
          firstHeader: "利用規約",
          firstPart: "このサイトで提供されている製品の取得には、以下に記載されている利用規約を読んで受け入れるという必要条件があります。弊社のサービスの利用および製品の購入は、この文書に記載された利用規約を読んで受け入れたものとみなされます。当ウェブサイトで提供されているすべての製品は、第三者のウェブサイトによって作成、請求、送信、または提示される場合があり、その場合はそれらが独自の利用規約の対象となります。製品を取得するためには、ユーザーが信頼性のある個人データを入力し、パスワードを設定するために登録する必要があります。ユーザーは登録され、弊社の製品の購入に必要な場合に、いつでもアカウント管理へのアクセス用のパスワードを選択および変更できます。https://simpliterms.com/ は、あなたがそのパスワードを第三者に提供した場合に責任を負いません。当ウェブサイトを介して行われるすべての購入および取引は、在庫および製品の入手可能性の確認および確認プロセスの対象となります。これには支払い方法の確認、請求書の妥当性の確認（該当する場合）、および選択された支払い手段の要件の遵守が含まれる場合があります。一部の場合、メールによる確認が必要となる場合があります。このオンラインストアで提供される製品の価格は、このウェブサイトでの購入に対してのみ有効です。",
          secondHeader: "ライセンス",
          secondPart: "Simplitermsは、ウェブサイトを通じて販売される製品の利用に対して、本文書に記載されている利用規約に従ってユーザーにライセンスを付与します。",
          thirdHeader: "未承認の使用",
          thirdPart: "該当する場合（ソフトウェア、テンプレート、またはその他のデザインおよびプログラミング製品の販売の場合）、製品を変更または変更せずにCD、ウェブサイト、またはその他の媒体に配置し、それらを再配布または転売することはできません。",
          fourthHeader: "財産",
          fourthPart: "変更されているか変更されていないかに関係なく、弊社の製品に対して知的財産権または排他的な所有権を主張することはできません。すべての製品はコンテンツプロバイダーの所有物です。特に指定されていない限り、弊社の製品はいかなる種類の保証もなく提供されます。いかなる場合も、この企業は、弊社の製品の使用または使用不能によって生じる直接、間接、特別、偶発的または結果的な損害またはその他の損失について責任を負いません。",
          fifthHeader: "返金および保証ポリシー",
          fifthPart: "返金は、申し込みプログラムが詐欺または誤解を招く情報であった場合に限り承認されます。それ以外の場合は返金は行われません。",
        });
        break;
      case "hi":
        settexts({
          firstHeader: "उपयोग की शर्तें और नियम",
          firstPart: "इस साइट पर प्रस्तुत की गई उत्पादों की प्राप्ति के लिए यह एक आवश्यक आवश्यकता है कि आप नीचे लिखी गई निम्नलिखित उपयोग की शर्तें और नियमों को पढ़ें और स्वीकार करें। हमारी सेवाओं का उपयोग करने के साथ ही हमारे उत्पादों की खरीदारी का अर्थ होगा कि आपने इस दस्तावेज़ में दिए गए उपयोग की शर्तों और नियमों को पढ़ा और स्वीकार किया है। हमारी वेबसाइट द्वारा प्रस्तुत किए जाने वाले सभी उत्पादों को किसी तिसरे वेबसाइट द्वारा बनाए जा सकते हैं, चार्ज किए जा सकते हैं, भेजे जा सकते हैं या प्रस्तुत किए जा सकते हैं, और ऐसे मामले में वे उनकी अपनी उपयोग की शर्तों के अधीन होंगे। कुछ मामलों में, किसी उत्पाद को प्राप्त करने के लिए उपयोगकर्ता को पंजीकृत करने की आवश्यकता हो सकती है, विश्वसनीय व्यक्तिगत डेटा दर्ज करने और पासवर्ड की परिभाषा के साथ। उपयोगकर्ता अपने खाते के प्रशासन एक्सेस के लिए किसी भी समय पर पंजीकृत हैं और यह तबादला के लिए आवश्यक है, यदि उसने हमारे किसी भी उत्पाद की खरीदारी के लिए और जो किसी भी समय कर सकता है। https://simpliterms.com/ उस पासवर्ड को तीसरे पक्ष को प्रदान करता है, तो उस पर ज़िम्मेदारी नहीं लेता है। इस वेबसाइट के माध्यम से किए गए सभी खरीदारी और लेन-देन एक पुष्टि और सत्यापन प्रक्रिया के आधीन होंगे, जिसमें उत्पाद की स्टॉक और उपलब्धता की सत्यापन प्रक्रिया, भुगतान के रूप की सत्यापन प्रक्रिया, चालान (यदि कोई हो) की सत्यापन प्रक्रिया और चयनित भुगतान के साधन की आवश्यकता की शर्तों का पालन शामिल हो सकता है। कुछ मामलों में, ईमेल के माध्यम से सत्यापन की आवश्यकता हो सकती है। इस ऑनलाइन स्टोर में प्रस्तुत किए जाने वाले उत्पादों की मूल्य सिर्फ इस वेबसाइट पर किए गए खरीदारी के लिए मान्य हैं।",
          secondHeader: "लाइसेंस",
          secondPart: "इसके वेबसाइट के माध्यम से सिम्प्लिटर्म्स उपयोगकर्ताओं को इस दस्तावेज़ में वर्णित शर्तों और नियमों के अनुसार इस वेबसाइट पर बेचे जाने वाले उत्पादों का उपयोग करने के लिए एक लाइसेंस प्रदान करता है।",
          thirdHeader: "अनधिकृत उपयोग",
          thirdPart: "यदि लागू हो (सॉफ़्टवेयर, टेम्पलेट्स, या अन्य डिज़ाइन और प्रोग्रामिंग उत्पादों की बिक्री के लिए), तो आप हमारे किसी भी उत्पाद को सीडी, वेबसाइट या किसी अन्य माध्यम पर स्थापित नहीं कर सकते हैं और उन्हें पुनः वितरित या पुनः बिक्री के लिए प्रदान नहीं कर सकते हैं।",
          fourthHeader: "सम्पत्ति",
          fourthPart: "आप हमारे किसी भी उत्पाद की बदली या अबदली शुल्क, साइट या किसी अन्य माध्यम पर स्थापित किए गए, बोली गई या अन्य रूप में स्थापित नहीं कर सकते हैं और उन्हें पुनः वितरित या पुनः बिक्री के लिए प्रदान नहीं कर सकते हैं। सभी उत्पाद सामग्री प्रदाताओं की संपत्ति हैं। यदि विशेष रूप से निर्दिष्ट नहीं किया गया हो, तो हमारे उत्पाद किसी भी प्रकार की वारंटी के बिना प्रदान किए जाते हैं, स्पष्ट या ब्राह्मिक। इस कंपनी को किसी भी नुकसान के लिए जिम्मेदार नहीं होगा, सहित लेकर उनमें से किसी की भी प्रकार की नुकसान, सीधे, परोक्ष, विशेष, सांत्वना या परिणामस्वरूप नुकसान या अन्य हानि के लिए।",
          fifthHeader: "रिफंड और गारंटी नीति",
          fifthPart: "प्रविष्टियां इस प्रकार की जाएंगी कि रिफंड का कारण है कि आपने सदस्यता लेने वाले कार्यक्रम को धोखाधड़ी या भ्रांतिपूर्ण जानकारी के कारण किया है, तो केवल उस स्थिति में रिफंड को मंजूरी दी जाएगी; अन्यथा कोई रिफंड नहीं किया जाएगा।",
        });
        break; case "ru":
        settexts({
          firstHeader: "Условия использования",
          firstPart: "Это необходимое требование для приобретения продуктов, предлагаемых на этом сайте, чтение и принятие следующих Условий, изложенных ниже. Использование наших услуг, а также покупка наших продуктов подразумевает, что вы прочитали и приняли Условия использования, изложенные в этом документе. Все продукты, предлагаемые нашим веб-сайтом, могут быть созданы, оплачены, отправлены или представлены третьим веб-сайтом и в таком случае они подлежат своим собственным Условиям использования. В некоторых случаях для приобретения продукта пользователь должен зарегистрироваться, ввести достоверные персональные данные и установить пароль. Пользователь может выбрать и изменить пароль для доступа к управлению своей учетной записью в любое время, если он зарегистрирован и это необходимо для покупки любого из наших продуктов. https://simpliterms.com/ не несет ответственности в случае предоставления вами такого пароля третьим лицам. Все покупки и транзакции, осуществляемые через этот сайт, подлежат процессу подтверждения и проверки, который может включать в себя проверку наличия товара и доступности продукта, проверку формы оплаты, проверку счета (если есть) и соблюдение условий, установленных выбранным средством оплаты. В некоторых случаях может потребоваться проверка по электронной почте. Цены на продукты, предлагаемые в этом Интернет-магазине, действительны только для покупок, сделанных на этом сайте.",
          secondHeader: "Лицензия",
          secondPart: "Simpliterms через свой веб-сайт предоставляет лицензию пользователям на использование продуктов, продаваемых на этом сайте в соответствии с условиями и положениями, описанными в этом документе.",
          thirdHeader: "Несанкционированное использование",
          thirdPart: "При применении (при продаже программного обеспечения, шаблонов или других продуктов дизайна и программирования) вы не можете размещать один из наших продуктов, измененных или неизмененных, на компакт-диске, веб-сайте или любом другом носителе и предлагать их для повторного распределения или перепродажи любого рода.",
          fourthHeader: "Собственность",
          fourthPart: "Вы не можете заявить интеллектуальную или эксклюзивную собственность над каким-либо из наших продуктов, измененными или неизмененными. Все продукты являются собственностью поставщиков контента. За исключением случаев, когда это явно указано, наши продукты предоставляются без каких-либо видов гарантий, явных или подразумеваемых. В никаком случае эта компания не несет ответственности за любые убытки, включая, но не ограничиваясь, прямые, косвенные, специальные, случайные или косвенные убытки или другие убытки, возникающие из использования или невозможности использования наших продуктов.",
          fifthHeader: "Политика возврата и гарантии",
          fifthPart: "Возвраты будут одобрены только в том случае, если причиной возврата является мошенничество или введение в заблуждение в отношении программы, на которую вы подписались; в противном случае возврат не будет произведен."
        });
        break;
      case "zh":
        settexts({
          firstHeader: "使用条款和条件",
          firstPart: "在购买本网站提供的产品之前，您必须阅读并接受以下所述的使用条款和条件，这是一个必要的要求。使用我们的服务以及购买我们的产品将意味着您已经阅读并接受了本文件中规定的使用条款和条件。本网站提供的所有产品都可能由第三个网站创建、收费、发送或展示，并在这种情况下将受到其自己的使用条款的约束。在某些情况下，为了购买产品，用户将需要注册，输入可靠的个人数据并设置密码。用户可以随时选择并更改他们的帐户管理访问密码，如果他们已经注册并且这对于购买我们的任何产品都是必需的。https://simpliterms.com/ 不对您向第三方提供该密码负责。通过本网站进行的所有购买和交易都受到确认和验证过程的影响，该过程可能包括库存和产品可用性的验证，付款形式的验证，发票（如果有的话）的验证以及所选付款方式所需条件的遵守。在某些情况下，可能需要通过电子邮件进行验证。在此在线商店提供的产品的价格仅对在本网站上购买的商品有效。",
          secondHeader: "许可证",
          secondPart: "Simpliterms通过其网站向用户提供使用本网站出售的产品的许可，用户须遵守本文件中规定的条款和条件。",
          thirdHeader: "未经授权的使用",
          thirdPart: "如果适用（用于出售软件、模板或其他设计和编程产品），您可能不得将我们的任何产品，经修改或未修改的，放置在CD、网站或任何其他媒体上，并提供再分发或任何形式的转售。",
          fourthHeader: "财产",
          fourthPart: "您不能声明对我们的任何产品，经修改或未修改的，拥有知识产权或独占权。所有产品均为内容提供者的财产。除非另有规定，否则我们的产品均不提供任何形式的保证，无论是明示的还是暗示的。在任何情况下，本公司均不对因使用或无法使用我们的产品而导致的任何损害承担责任，包括但不限于直接、间接、特殊、偶发或间接的损害或其他损失。",
          fifthHeader: "退款和保证政策",
          fifthPart: "只有在退款原因是由于您订阅的程序存在欺诈或误导信息的情况下，退款才会获得批准；否则将不予退款。"
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

      </main>
      <Footer language={actualLanguage} />
    </>
  )
}

export default TermsOfUseLanguage;
