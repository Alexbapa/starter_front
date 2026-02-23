
import "bootstrap/dist/css/bootstrap.min.css";
import ImportJSFiles from "./importJsFiles";

import "../css/animate.css";
import "../css/fontawesome.css";
import "../css/jquery-ui.css";
import "../css/magnific-popup.css";
import "../css/nice-select.css";
import "../css/style.css";
import "../css/image-gallery.css";

import localFont from 'next/font/local';

// Configuramos la familia DIN con sus diferentes pesos
const dinFont = localFont({
  src: [
    {
      path: './fonts/DIN-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/DIN-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/DIN-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    }
  ],
  variable: '--font-din', // Esta variable mágica es la que usaremos en CSS
});

import clienteAxios from "../config/axios";

import { Toaster, toast } from 'sonner';

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTopButton } from "../components/BackToTopButton";

const getSeo = async () => {
  try {
    const res = await clienteAxios.get(`/seo/single/658db30b8b40c216d72c8278`);
    //console.log(res.data.single)
    
    /*
    setTitle(res.data.single.title);
    setWords(res.data.single.words);
    setDescription(res.data.single.description);
    */
    return res.data.single;
    
  } catch (error) {
    console.log(error);
  }
};

const seoData = await getSeo();

export const metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.words,
  author: "Goma Lab", 
  alternates: {
    canonical: "https://www.starter.com.mx",
  },
};

export default function RootLayout({ children }) {
   
  return (
    <html lang="es" className={dinFont.variable}>
      <body>
       
        <Toaster richColors position="top-right"/>
        {children}
       
      </body>
    </html>
  );
}
