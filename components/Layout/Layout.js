import React, { useEffect } from "react";
import TrendingBar from "../TrendingBar/TrendingBar";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import ReactGA from "react-ga";
import { useRouter } from "next/router";

export default function Layout({ children, category, logo }) {
  ReactGA.initialize("UA-104420870-4");
  const Router = useRouter();
  useEffect(() => {
    logPageView();
    Router.events.on("routeChangeComplete", () => {
      logPageView();
    });
  }, []);
  return (
    <>
      <Navbar category={category} logo={logo} />
      <TrendingBar props={category} />
      <div className="content">{children}</div>
      <Footer props={category} />
    </>
  );
}
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
