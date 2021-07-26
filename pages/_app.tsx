import '../app/styles/app.scss'
import 'antd/dist/antd.css';
import ReactDOM from "react-dom";
import type { AppProps } from 'next/app'
import Router from "next/router";

import Page from '../app/utils/Page'
import PageChange from '../app/components/commons/PageChange'

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}
export default MyApp
