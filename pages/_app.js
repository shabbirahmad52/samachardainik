import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);
  const [logoUrl, setLogoUrl] = useState();

  useEffect(() => {
    function addLink() {
      const selection = window.getSelection(),
        pagelink = "<br /><br /> Read more at: " + document.location.href,
        copytext = selection + pagelink,
        newdiv = document.createElement("div");

      //hide the newly created container
      newdiv.style.position = "absolute";
      newdiv.style.left = "-99999px";

      //insert the container, fill it with the extended text, and define the new selection
      document.body.appendChild(newdiv);
      newdiv.innerHTML = copytext;
      selection.selectAllChildren(newdiv);

      window.setTimeout(function () {
        document.body.removeChild(newdiv);
      }, 100);
    }

    document.addEventListener("copy", addLink);
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  useEffect(() => {
    pageProps.navData && setLogoUrl(pageProps.navData.site_details.main_logo);
    pageProps.navData &&
      pageProps.navData.navmenu &&
      pageProps.navData.navmenu.data.map((item, index) => {
        if (Router.asPath == `/${item.slug}`) {
          item.category_logo
            ? setLogoUrl(item.category_logo)
            : setLogoUrl(pageProps.navData.site_details.main_logo);
          if (item.background_color != "") {
            document.querySelector("body").style.background =
              item.background_color;
            document.querySelectorAll(
              ".navbar .navbar-wrapper .nav-img"
            )[0].style.background = item.background_color;
            document.querySelectorAll(
              ".navbar .navbar-wrapper .nav-img"
            )[1].style.background = item.background_color;
          } else {
            document.querySelector("body").style.background = "white";
            document.querySelectorAll(
              ".navbar .navbar-wrapper .nav-img"
            )[0].style.background = "white";
            document.querySelectorAll(
              ".navbar .navbar-wrapper .nav-img"
            )[1].style.background = "white";
          }
        } else if (
          Router.asPath == "/" ||
          Router.asPath == "/podcast" ||
          Router.asPath == "/onlinetv" ||
          Router.asPath == "*"
        ) {
          setLogoUrl(pageProps.navData.site_details.main_logo);
          document.querySelector("body").style.background = "white";
          document.querySelectorAll(
            ".navbar .navbar-wrapper .nav-img"
          )[0].style.background = "white";
          document.querySelectorAll(
            ".navbar .navbar-wrapper .nav-img"
          )[1].style.background = "white";
        }
      });
  }, [Router.pathname]);

  return (
    <Layout category={pageProps.navData} logo={logoUrl}>
      {loading ? (
        <div className="loading-container">
          <img src="/img/loader.gif" className="img-fluid"></img>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}

export default MyApp;
