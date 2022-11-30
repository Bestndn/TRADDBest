import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Router from "next/router";
import '../styles/globals.css';
import Layout from './Layout';
import Footer from './Component/Footer';
import { useRouter } from 'next/router'
import styles from '../styles/page.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
        <React.Fragment>
          <Layout>
            <Component key={router.asPath} {...pageProps} />
          </Layout>
          <Footer/>
        </React.Fragment>
  )
}

export default MyApp
