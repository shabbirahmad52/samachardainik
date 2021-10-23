import React from "react";
import Link from "next/link";

export default function Footer({ props }) {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logo-container">
                <img
                  src={
                    props && props.site_details && props.site_details.main_logo
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="company-info">
                <ul>
                  <li>
                    <i className="fa fa-phone"></i>
                    {props && props.site_details && props.site_details.phone}
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    {props && props.site_details && props.site_details.email}
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    {props && props.site_details && props.site_details.address}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="director-info">
                {props && props.site_details && (
                  <ul
                    dangerouslySetInnerHTML={{
                      __html: props.site_details.extra_footer,
                    }}
                  ></ul>
                )}
                <ul>
                  <li>
                    दर्ता नं. :{" "}
                    {props &&
                      props.site_details &&
                      props.site_details.registration_no}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="social-links">
                <div className="title">Follow us on:</div>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href={`${
                        props &&
                        props.site_details &&
                        props.site_details.facebook_url
                      }`}
                    >
                      <i className="fab fa-facebook "></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={`${
                        props &&
                        props.site_details &&
                        props.site_details.twitter_url
                      }`}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href={`${
                        props &&
                        props.site_details &&
                        props.site_details.youtube_url
                      }`}
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="copyright">&copy; Copyright 2020. Samachardainik</div>
          <ul>
            <li>
              <Link href={"/team"}>
                <a>हाम्रोबारे</a>
              </Link>
            </li>
            <li>
              <Link href={"/team"}>
                <a>हाम्रो टिम</a>
              </Link>
            </li>
            <li>
              <a href="https://archive.samachardainik.com/" target="_blank">
                Archive
              </a>
            </li>
            {/* <li>
              <a href="">प्रयोगका सर्त</a>
            </li>
            <li>
              <a href="">विज्ञापन</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">सम्पर्क</a>
            </li> */}
          </ul>
          <div className="developedby">
            Designed By :{" "}
            <a href="https://www.creativeideas.com.np" target="_blank">
              {" "}
              Creative Ideas{" "}
            </a>{" "}
            | Powered By :{" "}
            <a href="https://www.an4soft.com" target="_blank">
              {" "}
              An4soft{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
