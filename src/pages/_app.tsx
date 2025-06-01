import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
export default function App({ Component, pageProps }: AppProps) {
  return (
   <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
  <Component {...pageProps} />
  </>);
}
