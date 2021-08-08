import '../app/styles/app.scss'
import 'antd/dist/antd.css';
import ReactDOM from "react-dom";
import type { AppProps } from 'next/app'
import Router from "next/router";
import NProgress from "nprogress";

import Page from '../app/components/Page'
import '../public/nprogress.css'

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}
export default MyApp
