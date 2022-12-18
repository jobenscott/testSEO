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
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;