import Head from "next/head";
import "../assets/css/style.css";
import Navbar from '../components/Navbar/Navbar';
import Script from 'next/script'

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
        />
      </Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-L9RNM1TM9B"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-L9RNM1TM9B');
            `,
          }}
        />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L9RNM1TM9B"/>
        <Script strategy="afterInteractive" 
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-L9RNM1TM9B');
            `,
          }}
          />    
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;