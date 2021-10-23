import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import useSWR from "swr";
import { baseUrl } from "../../../utils/config";
import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";

export default function Navbar({ category, logo }) {
  const closeRef = useRef(null);
  useEffect(() => {
    var OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "a4fdf601-a6c8-4dc6-9ceb-36ddd6c3ccdd",
        subdomainName: "samachardainik",
        notifyButton: {
          enable: true,
        },
      });
    });
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    window.onscroll = function () {
      myFunction();
    };
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }, []);
  // console.log(category)

  // const fetcher = url => fetch(url).then(r => r.json())

  // const { data, error } = useSWR(`${baseUrl}/wp-json/wp/v2/nav/menu`, fetcher)

  // const [navCategory, setnavCategory] = useState(category);
  // useEffect(() => {
  // 	(data) && setnavCategory(data)
  // 	window.onscroll = function () { myFunction() };

  // Get the navbar

  // }, [data]);

  const openNav = (e) => {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNavMob = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const closeNav = (e) => {
    e.preventDefault();

    document.getElementById("mySidenav").style.width = "0";
  };

  const findNav = (menu) => {
    switch (menu) {
      case "tourism":
        return "tourism";
        break;
      case "pradesh":
        return "pradesh";
        break;
      case "lifestyle":
        return "lifestyle";
        break;
      case "business":
        return "business";
        break;
      case "sports":
        return "sports";
        break;
      default:
        return menu;
    }
  };
  const router = useRouter();
  const searchContainer = useRef(null);
  const searchBtn = useRef(null);

  const [searchText, setSearchText] = useState("");
  const handleSearchBtn = (e) => {
    e.target.classList.toggle("active");
    searchContainer.current.classList.toggle("active");
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key == "Enter" && searchText != "") {
      router.push(`/Search/${searchText}`);
      searchBtn.current.classList.toggle("active");
      searchContainer.current.classList.toggle("active");
    }
  };
  const handleSubmit = () => {
    searchText != "" && router.push(`/Search/${searchText}`);
    searchBtn.current.classList.toggle("active");
    searchContainer.current.classList.toggle("active");
  };
  return (
    <>
      <div className="logo-container">
        <Link href="/">
          <a>
            <img src={logo} className="img-fluid" alt="" />
          </a>
        </Link>

        {category && category.site_details && category.site_details != "" && (
          <div className="date-container">
            <i className="fa fa-calendar-alt"></i>{" "}
            {category.site_details.today_date}
            <span>
              <a target="_blank" href={`${category.site_details.facebook_url}`}>
                <i className="fab fa-facebook "></i>
              </a>{" "}
              <a target="_blank" href={`${category.site_details.twitter_url}`}>
                <i className="fab fa-twitter"></i>
              </a>
              <a target="_blank" href={`${category.site_details.youtube_url}`}>
                <i className="fab fa-youtube"></i>
              </a>
            </span>
            <span>
              <Link href="/forex">
                <a>
                  <img src="/img/forex.jpg" className="img-fluid" alt="" />
                  फोरेक्स
                </a>
              </Link>
              <Link href="/preetitounicode" passHref>
                <a target="_blank">
                  <img
                    src="/img/preetitounicode.png"
                    className="img-fluid"
                    alt=""
                  />{" "}
                  युनिकोड
                </a>
              </Link>
              <Link href="/weather">
                <a>
                  <img src="/img/weather.png" className="img-fluid" alt="" />
                  मौसम
                </a>
              </Link>
            </span>
            <span>
              <div className="search-btn ">
                <i
                  className="fa fa-search active"
                  onClick={(e) => handleSearchBtn(e)}
                  ref={searchBtn}
                ></i>
              </div>
              <div className="search-container" ref={searchContainer}>
                <input
                  type="text"
                  value={searchText}
                  onKeyPress={(event) => handleKeyPress(event)}
                  onChange={(event) => handleChange(event)}
                />
                <i
                  className="fa fa-search"
                  type="submit"
                  onClick={() => handleSubmit()}
                ></i>
              </div>
            </span>
          </div>
        )}
      </div>
      <Head>
        <link
          rel="icon"
          href={
            category && category.site_details && category.site_details.fav_icon
          }
          sizes="16x16"
        ></link>
        <meta
          property="og:title"
          content={
            category &&
            category.site_details &&
            category.site_details.site_title
          }
          key="title"
        />
        <meta
          property="og:description"
          content={
            category &&
            category.site_details &&
            category.site_details.site_description
          }
          key="description"
        />
        <meta
          property="og:image"
          content={
            category &&
            category.site_details &&
            category.site_details.default_image
          }
          key="image"
        />
        <meta
          property="og:url"
          content={
            category && category.site_details && category.site_details.site_url
          }
          key="url"
        />
        <meta
          name="twitter:title"
          content={
            category &&
            category.site_details &&
            category.site_details.site_title
          }
        />
        <meta
          name="twitter:description"
          content={
            category &&
            category.site_details &&
            category.site_details.site_description
          }
        />
        <meta
          name="twitter:image"
          content={
            category &&
            category.site_details &&
            category.site_details.default_image
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="fb:app_id" content="2012065405585652" />
        <meta name="twitter:site" content="@samachardainik"></meta>
        <meta property="og:site_name" content="Samachardainik"></meta>
        <meta
          property="og:image:width"
          content="1700"
          key="facebookwidth"
        ></meta>
        <meta
          property="og:image:height"
          content="800"
          key="facebookheight"
        ></meta>
        {category && category.site_details && (
          <title>
            {category.site_details.site_title} |{" "}
            {category.site_details.site_description}
          </title>
        )}
      </Head>

      <div id="mySidenav" className="sidenav" onClick={(e) => closeNav(e)}>
        <div className="sidenavwrap">
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>

          <Link href="/">
            <a onClick={() => closeNavMob()}> मुख्य पृष्ठ </a>
          </Link>

          {category &&
            category.sidemenu.data &&
            category.sidemenu.data != "" &&
            category.sidemenu.data.map((page, index) =>
              page.child ? (
                <div className="dropdown hide" key={index}>
                  <a
                    className=" dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                  >
                    {page.title}
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    {page.child.data.map((navChild, index) => (
                      <li key={index}>
                        <Link href={`/${findNav(navChild.slug)}`}>
                          <a onClick={() => closeNavMob()}>{navChild.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link href={`/${findNav(page.slug)}`} key={page.id}>
                  <a className="hide" onClick={() => closeNavMob()}>
                    {page.title}
                  </a>
                </Link>
              )
            )}
        </div>
      </div>
      <div className="navbar" id="navbar">
        <div className="container">
          <div className="navbar-wrapper">
            <Link href="/">
              <a> मुख्य पृष्ठ </a>
            </Link>
            <Link href="/onlinetv">
              <a>
                <div className="nav-img">
                  <img src="/img/sdtv.png" alt="" />
                </div>
              </a>
            </Link>
            <Link href="/podcast">
              <a>
                <div className="nav-img">
                  <img src="/img/sdradio.png" alt="" />
                </div>
              </a>
            </Link>

            {category &&
              category.navmenu.data &&
              category.navmenu.data != "" &&
              category.navmenu.data.map((page, index) =>
                page.child ? (
                  <div className="dropdown hide" key={index}>
                    <Link href={`/${findNav(page.slug)}`}>
                      <a className=" dropdown-toggle" type="button">
                        {page.title}
                        <span className="caret"></span>
                      </a>
                    </Link>

                    <ul className="dropdown-menu-desk">
                      {page.child.data.map((navChild, index) => (
                        <li key={index}>
                          <Link href={`/${findNav(navChild.slug)}`}>
                            <a>{navChild.title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link href={`/${findNav(page.slug)}`} key={page.id}>
                    <a className="hide">{page.title}</a>
                  </Link>
                )
              )}
            <a className="openNav" onClick={(e) => openNav(e)}>
              <i className="fa fa-bars"></i>
            </a>
            {/* {
							navCategory &&
							navCategory.data.map((page, index) =>

								(page.child.data) ?
									(index != 0) &&
									<div className="dropdown hide" key={index}>
										<a className=" dropdown-toggle" type="button" data-toggle="dropdown">{page.title}
											<span className="caret"></span></a>
										<ul className="dropdown-menu">
											{
												page.child.data.map((navChild, index) =>
													<li key={index}>
														<Link href={`/${navChild.data_id}`}  >

															<a >{navChild.title}</a>
														</Link>
													</li>
												)
											}

										</ul>
									</div>
									:
									(index != 0) &&
									<Link href={`/${page.data_id}`} key={page.id}>
										<a className="hide" >{page.title}</a>
									</Link>
							)
						} */}
          </div>
        </div>
      </div>
    </>
  );
}
