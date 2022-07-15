import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
    
}

export default MyApp