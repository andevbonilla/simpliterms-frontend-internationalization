import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: 'Simpliterms',
        template: '%s | Simpliterms'
    },
    description: "Simpliterms summarizes the most important things about each privacy or terms of use policies of any page with AI, so that you don't accept again without knowing what you are accepting.",
    keywords: ["terms of use", "privacy policies", "summarize", "summarize policies", "summarize privacy policies"]
};


export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}