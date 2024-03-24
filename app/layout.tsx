import Head from "next/head";
import "./globals.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (
    <html lang="en">
      <head>
        <title>Mebels | Home page (by Khushnudbek)</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
