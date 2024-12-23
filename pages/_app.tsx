import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from '../redux/store'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContextProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/context/ProtectedRoutes";
import Script from "next/script";

function useRouterReady() {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsReady(router.isReady);
  }, [router.isReady]);

  return isReady;
}

const AuthRequired = ['/auth/register', '/auth/dashboard']

export default function App({ Component, pageProps }: AppProps) {
  const isRouterReady = useRouterReady();
  const router = useRouter()

  return isRouterReady ? (
    <AuthContextProvider>
      {!AuthRequired.includes(router.pathname) ? (
        <Provider store={store} >
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZL3K5WWZWL"></Script>
          <Script id='google-analytics' >
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZL3K5WWZWL');
            `}
          </Script>
          <Component {...pageProps} />
        </Provider>
      ) : (
        <Provider store={store} >
          <ProtectedRoute>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MWK8WVG5KZ"></Script>
            <Script id='google-analytics' >
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZL3K5WWZWL');
            `}
            </Script>
            <Component {...pageProps} />
          </ProtectedRoute>
        </Provider>
      )}
    </AuthContextProvider>
  ) : null
}
