"use client"
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <GoogleOAuthProvider clientId="764041831705-t6fm4f9vid0l7at1ldb50etida71di9s.apps.googleusercontent.com">
        {children}
      </GoogleOAuthProvider>
  )
}