// NEXT
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

// Libs
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.scss";
import { ToastContainer } from "react-toastify";
import { ProviderRedux } from "@/Providers/sessionProvider";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ProviderRedux>
        <Component {...pageProps} />
        <ToastContainer />
      </ProviderRedux>
    </main>
  );
}