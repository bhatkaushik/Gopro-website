import FooterLayout from "@/components/FooterSection/FooterLayout";
import Header from "@/components/Header/HeaderLayout";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <FooterLayout />
      </body>
    </html>
  );
}
