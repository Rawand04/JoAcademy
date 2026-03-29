import "../styles/globals.css";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
