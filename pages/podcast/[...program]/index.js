import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "../../../utils/config";
import Head from "next/head";
import Link from "next/link";

export default function RadioSinglePage({ singleData, params, fullUrl }) {
  console.log(singleData);
  const [count, setCount] = useState(1);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    setCount(1);
    var x = document.getElementById("myRadio");

    function playAudio() {
      x.play();
    }

    function pauseAudio() {
      x.pause();
    }
  }, [params]);

  return (
    <div className="radio-single-page">
      <div className="radio-single-banner">
        <img src={singleData.data && singleData.data.post_image} />
        <div className="radio-banner-overlay">
          <div className="container radio-program">
            <div className="radio-program-wrapper">
              <div className="program-title">
                <audio controls>
                  <source
                    src={singleData.data && singleData.data.audio_file}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element
                </audio>
              </div>
              <div className="radio-program-title">
                {singleData.data && singleData.data.post_title}
              </div>
              <div className="radio-program-host">
                BY:{" "}
                {singleData.data.post_author &&
                  singleData.data.post_author.author_name}
              </div>
              <div className="content-share">
                <div className="sharethis-inline-share-buttons"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="radio-single-description">
        <div className="container">
          <div className="description-wrapper">
            <section className="single-page">
              <Head>
                <meta
                  property="og:title"
                  content={singleData.data.post_title}
                />
                <meta
                  property="og:description"
                  content={
                    singleData.data.post_excerpt && singleData.data.post_excerpt
                  }
                />
                <meta
                  property="og:image"
                  content={
                    singleData.data.post_author.author_image &&
                    singleData.data.post_author.author_image
                  }
                />
                <meta
                  property="og:url"
                  content={`https://${fullUrl}${router.asPath}`}
                />
                <meta
                  name="twitter:title"
                  content={singleData.data.post_title}
                />
                <meta
                  name="twitter:description"
                  content={
                    singleData.data.post_excerpt && singleData.data.post_excerpt
                  }
                />
                <meta
                  name="twitter:image"
                  content={
                    singleData.data.post_author.author_image &&
                    singleData.data.post_author.author_image
                  }
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="fb:app_id" content="2012065405585652" />
                <meta name="twitter:site" content="@samachardainik"></meta>
                <meta property="og:site_name" content="Samachardainik"></meta>
                <script
                  type="text/javascript"
                  src="https://platform-api.sharethis.com/js/sharethis.js#property=5fdb0b1a1b28fa00119fc4a1&product=sop"
                  async="async"
                ></script>
                <div id="fb-root"></div>
                <script
                  async
                  defer
                  crossorigin="anonymous"
                  src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0&appId=361197191075825&autoLogAppEvents=1"
                  nonce="C2JHajcm"
                ></script>
              </Head>
              <div className="container">
                <div className="single-page-content-wrap">
                  <div className="row">
                    <div className="col-md-9">
                      <div
                        className="single-content-area"
                        dangerouslySetInnerHTML={{
                          __html: singleData.data.post_content,
                        }}
                      ></div>
                      {singleData.data.tags && (
                        <div className="tag-section">
                          <ul>
                            {singleData.data.tags.map((tag, index) => (
                              <li key={tag.tag_id}>
                                <Link href={`/tags/${tag.tag_id}`}>
                                  <a>{`#${tag.tag_name}`}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {singleData.data.related_news && (
                        <div className="single-more-news">
                          <div className="single-newslist-title">
                            <a>
                              <h1>थप समाचार</h1>
                            </a>
                          </div>

                          <div className="row">
                            {singleData.data.related_news &&
                              singleData.data.related_news.map(
                                (news, index) => (
                                  <div className="col-md-4" key={index}>
                                    <div className="side-wrapper">
                                      <div className="side-item">
                                        <div className="img-container">
                                          {news.post_image && (
                                            <img
                                              src={news.post_image}
                                              className="img-fluid"
                                              alt={news.post_title}
                                            />
                                          )}
                                        </div>
                                        <h3 className="title">
                                          <Link
                                            href={`/story/${news.post_id}/${news.date_slug}`}
                                          >
                                            <a>{news.post_title}</a>
                                          </Link>
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                          </div>

                          <div className="single-comment">
                            <div
                              className="fb-comments"
                              data-href={`https://${fullUrl}${router.asPath}`}
                              data-width="100%"
                              data-numposts="5"
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="col-md-3">
                      <div className="single-side-news">
                        {singleData.data.popular_news && (
                          <div className="single-popular">
                            <div className="single-newslist-title">
                              <a>
                                <h1>लोकप्रिय</h1>
                              </a>
                            </div>
                            {singleData.data.popular_news.map((news, index) => (
                              <div className="second-wrapper" key={index}>
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
                                <h2 className="title">
                                  <Link
                                    href={`/story/${news.post_id}/${news.date_slug}`}
                                  >
                                    <a>{news.post_title}</a>
                                  </Link>
                                </h2>
                              </div>
                            ))}
                          </div>
                        )}
                        {singleData.data.latest_news && (
                          <div className="single-popular">
                            <div className="single-newslist-title">
                              <a>
                                <h1>भर्खरै</h1>
                              </a>
                            </div>
                            {singleData.data.latest_news.map((news, index) => (
                              <div className="second-wrapper" key={index}>
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
                                <h2 className="title">
                                  <Link
                                    href={`/story/${news.post_id}/${news.date_slug}`}
                                  >
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, req }) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let singleData = "";
  let navData = "";

  await axios
    .get(`${baseUrl}/wp-json/wp/v2/single/content?post_id=${params.program}`, {
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
  let fullUrl = req.headers.host;

  if (!singleData && !navData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { singleData, navData, params, fullUrl },
  };
}
