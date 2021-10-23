import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/config";
import ExtraTv from "../components/TvSection/ExtraTv";
import Link from "next/link";
export default function onlinetv({ data }) {
  const [count, setCount] = useState(1);
  // const videoJsOptions = {
  //   autoplay: false,
  //   playbackRates: [0.5, 1, 1.25, 1.5, 2],
  //   fill: true,
  //   responsive: true,
  //   controls: true,
  //   sources: [
  //     {
  //       src: "https://ktvhdnpicc6670.ekantipur.com/ktv_abr/hd/playlist.m3u8",
  //       type: "application/x-mpegURL",
  //     },
  //   ],
  // };
  const params = "samachar-tv";

  return (
    <div className="tv-page">
      <div className="live-tv-container container">
        <div className="section-title text-center">
          <div>
            <div className="section-img">
              <img src="/img/samachar tv.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        {data && data.data[0].facebook_code ? (
          <iframe
            src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/${data.data[0].facebook_code}/&show_text=false`}
            width="100%"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            allowFullScreen="true"
          ></iframe>
        ) : data.data[0].youtube_code ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${data.data[0].youtube_code}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : null}
        <Link href={`/story/${data.data[0].post_id}/${data.data[0].date_slug}`}>
          <a className="title">{data.data[0].post_title}</a>
        </Link>
      </div>

      <div className="container">
        <div className="tv-video-wrapper">
          {Array.apply(null, { length: count }).map((number, index) => (
            <div key={index}>
              <ExtraTv params={params} pageCount={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="load-more">
          <span onClick={() => setCount(count + 1)}>थप कार्यक्रम</span>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let data = "";
  let navData = "";

  await axios
    .get(
      `${baseUrl}/wp-json/wp/v2/category/content?category_slug='samachar-tv'&offset=0&page_post=1`,
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
