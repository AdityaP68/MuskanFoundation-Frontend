import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Muskan Foundation</title>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRYcN5Rsk9ez-6BvB-ktrt16BMbW0LzDs"></script>
    </Head>
    <Component {...pageProps} />
    </>
    
  )

}

export default MyApp
