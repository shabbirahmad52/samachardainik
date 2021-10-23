import React, { useState, useEffect, useRef } from "react";
import { baseUrl } from "../../../utils/config";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";
import {
  FacebookShareCount,
  FacebookMessengerShareCount,
  ViberShareCount,
  WhatsappShareCount,
  TwitterShareCount,
} from "react-share";
import Income from "../../../components/Income/Income";
import ImageWrap from "../../../components/Image/ImageWrap";

export default function SinglePage({ singleData, params }) {
  const router = useRouter();
  const [ads, setAds] = useState();
  const scriptSection = useRef(null);
  // const share = () => {
  //   const script = document.createElement("script");
  //   const src = document.createAttribute("src");
  //   src.value =
  //     "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-601ae5eb5dee334c";
  //   const attribute = document.createAttribute("type");
  //   attribute.value = "text/javascript";
  //   script.setAttributeNode(src);
  //   script.setAttributeNode(attribute);
  //   scriptSection.current.appendChild(script);
  // };
  useEffect(() => {
    // share();

    if (window.FB) {
      FB.XFBML.parse();
    }
    let source = axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axios.get(`${baseUrl}/wp-json/wp/v2/ads/content`, {
          cancelToken: source.token,
        });
        setAds((await response).data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          throw error;
        }
      }

      return () => {
        source.cancel();
      };
    };
    loadData();
  }, []);

  if (!router.isFallback && params.category != "story") {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <ErrorPage statusCode={404} />
      </>
    );
  }

  return (
    singleData.data && (
      <section className="single-page">
        <Head>
          <title>{singleData.data.post_title}</title>
          <meta
            property="og:title"
            content={singleData.data.post_title}
            key="title"
          />
          <meta
            property="og:description"
            content={
              singleData.data.post_excerpt && singleData.data.post_excerpt
            }
            key="description"
          />
          <meta
            property="og:image"
            content={singleData.data.post_image && singleData.data.post_image}
            key="image"
          />
          <meta
            property="og:url"
            content={singleData.data.full_url && singleData.data.full_url}
            key="url"
          />
          <meta name="twitter:title" content={singleData.data.post_title} />
          <meta
            name="twitter:description"
            content={
              singleData.data.post_excerpt && singleData.data.post_excerpt
            }
          />
          <meta
            name="twitter:image"
            content={singleData.data.post_image && singleData.data.post_image}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="fb:app_id" content="4054021217944040" />
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

          <script
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_GB/all.js#xfbml=1&version=v9.0&appId=4054021217944040&autoLogAppEvents=1"
            nonce="C2JHajcm"
          ></script>

          {/* <script
            type="text/javascript"
            src="https://platform-api.sharethis.com/js/sharethis.js#property=5fdb0b1a1b28fa00119fc4a1&product=image-share-buttons"
          ></script> */}
          {/* <script
            type="text/javascript"
            src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-601ae5eb5dee334c"
            async="async"
          ></script> */}
          {/* <script
            type="text/javascript"
            src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-601ae5eb5dee334c"
          ></script> */}
        </Head>

        <div className="container">
          <div className="single-page-category-time">
            <ul>
              {singleData.data.post_category &&
                singleData.data.post_category.category_name && (
                  <li>
                    <div className="post_category">
                      Category:
                      <Link
                        href={`/${singleData.data.post_category.category_slug}`}
                      >
                        <a>{singleData.data.post_category.category_name}</a>
                      </Link>
                    </div>
                  </li>
                )}

              <li>
                <div className="post_date">
                  <i className="fa fa-clock-o"></i> {singleData.data.post_date}
                </div>
              </li>
            </ul>
          </div>
          <div className="single-page-title-wrap">
            <div className="single-page-title">
              <h1>{singleData.data.post_title}</h1>
            </div>
            <div className="single-page-subtitle">
              <h1>{singleData.data.post_excerpt}</h1>
            </div>
          </div>
          {ads && ads.single_page_feature_image_bottom_ads && (
            <Income props={ads.single_page_feature_image_bottom_ads} />
          )}

          <div className="single-page-content-wrap">
            <div className="row">
              <div className="col-md-9">
                <div className="single-page-share">
                  <div className="content-author">
                    {singleData.data.post_author && (
                      <Link
                        href={`/authors/${singleData.data.post_author.author_nicename}`}
                      >
                        <a>
                          <div className="author-image">
                            {singleData.data.post_author.author_image && (
                              <img
                                src={singleData.data.post_author.author_image}
                              />
                            )}
                          </div>
                          <div className="author-name">
                            {singleData.data.post_author.author_name}
                          </div>
                        </a>
                      </Link>
                    )}
                  </div>
                  {/* <div className="addthis_inline_share_toolbox"></div> */}
                  <div className="content-share">
                    <div className="total-share">
                      <div>
                        {singleData.data.share_count &&
                          singleData.data.share_count}
                      </div>{" "}
                      <span>Share</span>
                    </div>
                    <FacebookShareCount
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      {(shareCount) => (
                        <span className="myShareCountWrapper">
                          {shareCount}
                        </span>
                      )}
                    </FacebookShareCount>
                    <FacebookShareButton
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <FacebookMessengerShareButton
                      appId="4054021217944040"
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <FacebookMessengerIcon size={32} />
                    </FacebookMessengerShareButton>
                    <ViberShareButton
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <ViberIcon size={32} />
                    </ViberShareButton>
                    <WhatsappShareButton
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <WhatsappIcon size={32} />
                    </WhatsappShareButton>
                  </div>
                </div>
                <div className="tv-video-container">
                  {singleData.data.facebook_code ? (
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/${singleData.data.facebook_code}/&show_text=false`}
                      width="100%"
                      height="100%"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allowTransparency="true"
                      allow="encrypted-media"
                      allowFullScreen="true"
                    ></iframe>
                  ) : singleData.data.youtube_code ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${singleData.data.youtube_code}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : singleData.data.has_image ? (
                    <div className="single-page-feature-image">
                      {singleData.data.post_image && (
                        <img
                          src={singleData.data.post_image}
                          title={singleData.data.post_title}
                          alt={singleData.data.post_title}
                        />
                      )}
                    </div>
                  ) : null}
                </div>
                {singleData.data && singleData.data.audio_file && (
                  <div className="radio-section-wrap">
                    <audio controls>
                      <source
                        src={singleData.data.audio_file}
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}

                <div
                  className="single-content-area"
                  dangerouslySetInnerHTML={{
                    __html: singleData.data.post_content,
                  }}
                ></div>
                <div className="single-page-share share-change">
                  <div className="full-post-date">
                    {singleData.data.post_full_date &&
                      singleData.data.post_full_date}
                  </div>
                  <div className="content-share">
                    <div className="total-share">
                      <div>
                        {singleData.data.share_count &&
                          singleData.data.share_count}
                      </div>{" "}
                      <span>Share</span>
                    </div>
                    <FacebookShareButton
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <FacebookIcon size={32} />
                    </FacebookShareButton>

                    <TwitterShareButton
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <FacebookMessengerShareButton
                      appId="4054021217944040"
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <FacebookMessengerIcon size={32} />
                    </FacebookMessengerShareButton>
                    <ViberShareButton
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <ViberIcon size={32} />
                    </ViberShareButton>
                    <WhatsappShareButton
                      url={singleData.data.full_url && singleData.data.full_url}
                    >
                      <WhatsappIcon size={32} />
                    </WhatsappShareButton>
                  </div>
                </div>

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
                <div className="single-comment">
                  <div
                    className="fb-comments"
                    data-href={
                      singleData.data.full_url && singleData.data.full_url
                    }
                    data-width="100%"
                    data-numposts="5"
                  ></div>
                </div>
                {singleData.data.related_news && (
                  <div className="single-more-news">
                    <div className="single-newslist-title">
                      <a>
                        <h1>थप समाचार</h1>
                      </a>
                    </div>

                    <div className="row">
                      {singleData.data.related_news &&
                        singleData.data.related_news.map((news, index) => (
                          <div className="col-md-4" key={index}>
                            <div className="side-wrapper">
                              <div className="side-item">
                                {news.post_image && (
                                  <ImageWrap
                                    image={news.post_image}
                                    alt={news.post_title}
                                    height={220}
                                    width={360}
                                    myhref={`/story/${news.post_id}/${news.date_slug}`}
                                  />
                                )}
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
                        ))}
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
                          <Link
                            href={`/story/${news.post_id}/${news.date_slug}`}
                          >
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
                          <Link
                            href={`/story/${news.post_id}/${news.date_slug}`}
                          >
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
                            <Link
                              href={`/story/${news.post_id}/${news.date_slug}`}
                            >
                              <a>{news.post_title}</a>
                            </Link>
                          </h2>
                        </div>
                      ))}
                      {ads && ads.single_page_side_ads && (
                        <Income props={ads.single_page_side_ads} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <div ref={scriptSection}></div> */}
        </div>
      </section>
    )
  );
}
// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }
export async function getServerSideProps({ params }) {
  // const params = context.params;
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let singleData = "";
  let navData = "";

  await axios
    .get(
      `${baseUrl}/wp-json/wp/v2/single/content?post_id=${params.single[0]}`,
      {
        cancelToken: source.token,
      }
    )
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
  // let fullUrl = req.headers.host;

  // const res = await fetch(`${baseUrl}/wp-json/wp/v2/single/content?post_id=${params.single}`,
  // 	{
  // 		method: "GET",
  // 		headers: {
  // 			"User-Agent":
  // 				"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
  // 			Accept: "application/json; charset=UTF-8",
  // 		},
  // 	})
  // const singleData = await res.json()

  if (!singleData && !navData) {
    return {
      notFound: true,
    };
  }
  if (!singleData.status) {
    return {
      notFound: true,
    };
  }
  return {
    props: { singleData, navData, params },
    // revalidate: 1,
  };
}
