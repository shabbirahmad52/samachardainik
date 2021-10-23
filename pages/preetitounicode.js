import React from "react";
import axios from "axios";
import { baseUrl } from "../utils/config";
import Link from "next/link";

export default function preetitounicode({ singleData }) {
  return (
    <div className="preetitounicode ">
      <div className="main-title">Preeti to Unicode</div>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <iframe
              width="100%"
              height="800"
              frameBorder="0"
              border="no"
              marginWidth="0"
              marginHeight="0"
              allowTransparency="true"
              src="https://unicodenepali.netlify.app/"
            ></iframe>
          </div>
          <div className="col-md-3">
            <div className="single-side-news">
              {singleData.popular_news.data && (
                <div className="single-popular">
                  <div className="single-newslist-title">
                    <a>
                      <h1>लोकप्रिय</h1>
                    </a>
                  </div>
                  {singleData.popular_news.data.map((news, index) => (
                    <div className="second-wrapper" key={index}>
                      <Link href={`/story/${news.post_id}/${news.date_slug}`}>
                        <a className="img-wrap">
                          <div className="img-container">
                            {news.post_image && (
                              <img
                                src={news.post_image}
                                className="img-fluid"
                                alt={news.post_title}
                                title={news.post_title}
                              />
                            )}
                          </div>
                        </a>
                      </Link>
                      <h2 className="title">
                        <Link href={`/story/${news.post_id}/${news.date_slug}`}>
                          <a>{news.post_title}</a>
                        </Link>
                      </h2>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let singleData = "";
  let navData = "";

  await axios
    .get(`${baseUrl}/wp-json/wp/v2/nav/menu`, {
      cancelToken: source.token,
    })
    .then((res) => (navData = res.data))
    .catch(function (thrown) {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      } else {
        // handle error
      }
    });
  await axios
    .get(`${baseUrl}/wp-json/wp/v2/sidebar/content`, {
      cancelToken: source.token,
    })
    .then((res) => (singleData = res.data))
    .catch(function (thrown) {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      } else {
        // handle error
      }
    });
  if (!navData && !singleData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { navData, singleData },
    revalidate: 1, // will be passed to the page component as props
  };
}
