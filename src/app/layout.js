
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
    const res = await clienteAxios.get(
      `/seo/single/658db30b8b40c216d72c8278`
    );

    return res.data.single;
  } catch (error) {
    console.log("SEO fallback activado:", error.message);

    return {
      title: "Starter Streetwear",
      description: "Streetwear Collection Drop 01",
      words: "streetwear, fashion, drop, starter",
    };
  }
};

const seoData = await getSeo();

export const metadata = {
  title: seoData?.title || "Starter Streetwear",
  description: seoData?.description || "Streetwear Collection Drop 01",
  keywords: seoData?.words || "streetwear, fashion, drop",
  author: "Goma Lab",
  alternates: {
    canonical: "https://www.starter.com.mx",
  },
};

export default function RootLayout({ children }) {
   
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Aggressive hydration warning suppression
              (function() {
                const originalConsoleError = console.error;
                console.error = function(...args) {
                  const message = args[0];
                  if (typeof message === 'string' && 
                      (message.includes('hydration') || 
                       message.includes('server rendered HTML'))) {
                    return;
                  }
                  originalConsoleError.apply(console, args);
                };
                
                // Also suppress React DevTools hydration warnings
                if (typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                  const originalOnCommitFiberRoot = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot;
                  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.onCommitFiberRoot = function(...args) {
                    try {
                      return originalOnCommitFiberRoot.apply(this, args);
                    } catch (e) {
                      // Suppress hydration-related errors
                    }
                  };
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Toaster richColors position="top-right"/>
        {children}
      </body>
    </html>
  );
}
