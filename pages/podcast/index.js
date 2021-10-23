import React, { useRef, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/config";
import ExtraRadio from "../../components/Radio/ExtraRadio";
import Link from "next/link";

export default function podcast({ data }) {
  const params = "radio";
  const [count, setCount] = useState(1);
  const settings = {
    // infinite: true,
    // slidesToShow: 4,
    // slidesToScroll: 2,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const audioBtn = useRef(null);
  const playBtn = useRef(null);
  const pauseBtn = useRef(null);

  const playAudio = () => {
    audioBtn.current.play();
    playBtn.current.style.display = "none";
    pauseBtn.current.style.display = "inline-block";
  };

  const pauseAudio = () => {
    audioBtn.current.pause();
    pauseBtn.current.style.display = "none";
    playBtn.current.style.display = "inline-block";
  };
  return (
    data.data &&
    data.data != "" && (
      <div className="radio-section">
        <div className="container">
          <div className="section-title text-center">
            <div>
              <div className="section-img">
                <img
                  src="/img/radio_new_logo.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="live-and-featured">
            <div className="feature-program-wrapper">
              <div className="row">
                <div className="col-md-7">
                  {data.data && (
                    <Link
                      href={`/podcast/${data.data[0].post_id}/${data.data[0].date_slug}`}
                    >
                      <a className="live-now-wrapper">
                        <div className="live-now-section">
                          <div
                            className="live-now-banner"
                            style={{
                              background: `url(${data.data[0].post_image})`,
                              backgroundSize: "cover",
                            }}
                          >
                            <div className="live-now-overlay"></div>
                            <div className="live-now-description">
                              <h3>{data.data[0].post_title}</h3>
                              <p>{data.data[0].post_excerpt}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  )}
                </div>
                <div className="col-md-5">
                  <div className="feature-program-list">
                    <div className="row">
                      {data.data &&
                        data.data.map(
                          (item, index) =>
                            index > 1 &&
                            index < 6 && (
                              <div className="col-md-6" key={index}>
                                <div className="feature-program-single">
                                  <Link
                                    href={`/podcast/${item.post_id}/${data.data[0].date_slug}`}
                                  >
                                    <a>
                                      <div className="feature-program-image">
                                        <img src={item.post_image} />
                                        <div className="feature-program-image-overlay"></div>
                                      </div>
                                      <div className="feature-program-name">
                                        {item.post_title}
                                      </div>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {Array.apply(null, { length: count }).map((number, index) => (
            <div key={index}>
              <ExtraRadio params={params} pageCount={index} />
            </div>
          ))}
          {/* <ExtraRadio params="radio" pageCount={1}/> */}

          <div className="container">
            <div className="load-more">
              <span onClick={() => setCount(count + 1)}>थप कार्यक्रम</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export async function getStaticProps(context) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let data = "";
  let navData = "";

  await axios
    .get(`${baseUrl}/wp-json/wp/v2/category/content?category_slug=radio`, {
      cancelToken: source.token,
    })
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
