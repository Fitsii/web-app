import '../app/styles/app.scss'
import 'antd/dist/antd.css';

import React from 'react';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import { ReactNode } from 'react';
import Router from "next/router";
import NProgress from "nprogress";

import '../public/nprogress.css'

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());


const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
