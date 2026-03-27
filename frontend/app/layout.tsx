import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Flow Module"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
