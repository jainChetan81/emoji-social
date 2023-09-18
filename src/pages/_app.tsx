import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { api } from "~/utils/api";
import Head from "next/head";


const MyApp: AppType = ({ Component, pageProps }) => {
  return <ClerkProvider {...pageProps}>
    <Head>
      <title>Emoji Social</title>
      <meta name="description" content="💭" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Toaster position="bottom-center" />
    <Component {...pageProps} />
  </ClerkProvider>
};
export { reportWebVitals } from 'next-axiom';

export default api.withTRPC(MyApp);
