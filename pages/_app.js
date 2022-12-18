import Head from "next/head";
import "../assets/css/style.css";
import Navbar from '../components/Navbar/Navbar';

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L9RNM1TM9B"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L9RNM1TM9B');
          `}
        </script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;