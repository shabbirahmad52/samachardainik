import React from "react";

import { baseUrl } from "../utils/config";
import axios from "axios";
import Link from "next/link";
import Banner from "../components/Banner/Banner";
import Recent from "../components/Recent/Recent";
import Business from "../components/Business/Business";

export default function SportPage({ data }) {
  return (
    <>
      <Banner props={data.flash_news} />
      {data.data != "" && <Recent props={data} />}
      <div class="sports-section">
        <div className="container">
          <div class="sports-football">
            <div class="row">
              <div class="col-md-12">
                <div className="section-title text-center">
                  <Link href={`/${data.category_child[0].category_slug}`}>
                    <a>
                      <div className="section-img">
                        <img src="/img/icon.png" className="img-fluid" alt="" />
                      </div>
                      <h1>फूटबल समाचार</h1>
                    </a>
                  </Link>
                </div>

                <div class="row no-gutters">
                  <div class="col-md-7">
                    {data.category_child[0] &&
                      data.category_child[0].category_posts.data[0] && (
                        <div class="football-main-news">
                          <div class="football-main-image">
                            <img
                              src={
                                data.category_child[0].category_posts.data[0]
                                  .post_image
                              }
                            />
                          </div>
                          <div class="football-main-overlay"></div>
                          <div class="football-main-news-title">
                            <Link
                              href={`/story/${data.category_child[0].category_posts.data[0].post_id}/${data.category_child[0].category_posts.data[0].date_slug}`}
                            >
                              <a>
                                {
                                  data.category_child[0].category_posts.data[0]
                                    .post_title
                                }
                              </a>
                            </Link>
                          </div>
                        </div>
                      )}
                  </div>
                  <div class="col-md-5">
                    <div class="football-other-news">
                      {data.category_child[0].category_posts.data &&
                        data.category_child[0].category_posts.data.map(
                          (item, index) =>
                            index > 1 &&
                            index < 6 && (
                              <div class="football-other-news-item" key={index}>
                                <div class="football-other-news-image">
                                  <img src={item.post_image} alt="" />
                                </div>
                                <div class="football-other-news-title">
                                  <Link
                                    href={`/story/${item.post_id}/${item.date_slug}`}
                                  >
                                    <a>{item.post_title}</a>
                                  </Link>
                                </div>
                              </div>
                            )
                        )}
                      {/* <div class="football-other-news-divider"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="football-extra-news-section">
              <div class="row no-gutters">
                {data.category_child[0].category_posts.data &&
                  data.category_child[0].category_posts.data.map(
                    (item, index) =>
                      index > 4 &&
                      index < 9 && (
                        <div class="col-md-3 col-sm-6" key={index}>
                          <div class="football-extra-news">
                            <div class="football-extra-news-image">
                              <img src={item.post_image} />
                              <div class="football-extra-news-overlay"></div>
                              <div class="football-extra-news-title">
                                <Link
                                  href={`/story/${item.post_id}/${item.date_slug}`}
                                >
                                  <a>{item.post_title}</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>

        <div class="sports-cricket">
          <div className="section-title text-center">
            <Link href={`/${data.category_child[1].category_slug}`}>
              <a>
                <div className="section-img">
                  <img src="/img/icon.png" className="img-fluid" alt="" />
                </div>
                <h1>क्रिकेट समाचार</h1>
              </a>
            </Link>
          </div>

          {data.category_child[1] && (
            <Business props={data.category_child[1].category_posts} />
          )}
        </div>
        <div class="container">
          <div class="extra-sports-news">
            <div className="section-title text-center">
              <Link href={`/${data.category_child[2].category_slug}`}>
                <a>
                  <div className="section-img">
                    <img src="/img/icon.png" className="img-fluid" alt="" />
                  </div>
                  <h1>बिभिद</h1>
                </a>
              </Link>
            </div>
            <div class="row">
              {data.category_child[2] &&
                data.category_child[2].category_posts.data.map(
                  (item, index) =>
                    index < 2 && (
                      <div class="col-md-6" key={index}>
                        <div class="extra-sports-news-single">
                          <div class="extra-sports-news-image">
                            <img src={item.post_image} />
                          </div>
                          <div class="extra-sports-news-title">
                            <Link
                              href={`/story/${item.post_id}/${item.date_slug}`}
                            >
                              <a>{item.post_title}</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
            <div class="other-extra-news">
              <div class="row">
                <div class="col-md-6">
                  {data.category_child[2] &&
                    data.category_child[2].category_posts.data.map(
                      (item, index) =>
                        index > 1 &&
                        index < 4 && (
                          <div class="other-extra-news-single" key={index}>
                            <div class="other-extra-news-single-image">
                              <img src={item.post_image} />
                            </div>
                            <div class="other-extra-news-single-title">
                              <Link
                                href={`/story/${item.post_id}/${item.date_slug}`}
                              >
                                <a>{item.post_title}</a>
                              </Link>
                            </div>
                          </div>
                        )
                    )}
                </div>
                <div class="col-md-6">
                  {data.category_child[2] &&
                    data.category_child[2].category_posts.data.map(
                      (item, index) =>
                        index > 3 &&
                        index < 6 && (
                          <div class="other-extra-news-single" key={index}>
                            <div class="other-extra-news-single-image">
                              <img src={item.post_image} />
                            </div>
                            <div class="other-extra-news-single-title">
                              <Link
                                href={`/story/${item.post_id}/${item.date_slug}`}
                              >
                                <a>{item.post_title}</a>
                              </Link>
                            </div>
                          </div>
                        )
                    )}
                </div>
              </div>
            </div>
          </div>
          <div class="feature-sports-news">
            <div className="section-title text-center">
              <Link href={`/${data.category_child[3].category_slug}`}>
                <a>
                  <div className="section-img">
                    <img src="/img/icon.png" className="img-fluid" alt="" />
                  </div>
                  <h1>फिचर</h1>
                </a>
              </Link>
            </div>
            <div class="row">
              {data.category_child[3] &&
                data.category_child[3].category_posts.data.map(
                  (item, index) =>
                    index < 3 && (
                      <div class="col-md-4" key={index}>
                        <div class="feature-sports-news-single">
                          <div class="feature-sports-news-single-image">
                            <img src={item.post_image} />
                          </div>
                          <div class="feature-sports-single-overlay"></div>
                          <div class="feature-sports-news-single-title">
                            <Link
                              href={`/story/${item.post_id}/${item.date_slug}`}
                            >
                              <a>{item.post_title} </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps({ params }) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let data = "";
  let navData = "";

  await axios
    .get(
      `${baseUrl}/wp-json/wp/v2/category/content?category_slug=sports&offset=0&page_post=1`,
      {
        cancelToken: source.token,
      }
    )
    .then((res) => (data = res.data))
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

  if (!data && !navData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, navData },
    revalidate: 1, // will be passed to the page component as props
  };
}
