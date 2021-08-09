import '../app/styles/app.scss'
import 'antd/dist/antd.css';
import React from 'react';
import type { AppProps } from 'next/app'
import Router from "next/router";
import NProgress from "nprogress";

import '../public/nprogress.css'

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Component {...pageProps} />
  )
}

export default MyApp
