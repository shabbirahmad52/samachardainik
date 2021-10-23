import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "../../../utils/config";
import ExtraTag from "../../../components/Category/ExtraTag";

export default function TagPage({ tagData, params }) {
  const [count, setCount] = useState(0);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    setCount(1);
  }, [params]);

  return (
    <div className="container">
      {tagData.tag_name && (
        <div className="section-title text-center">
          <a href="">
            <div className="section-img">
              <img src="/img/icon.png" className="img-fluid" alt="" />
            </div>
            <h1>{tagData.tag_name}</h1>
          </a>
        </div>
      )}

      {Array.apply(null, { length: count }).map((number, index) => (
        <div key={index}>
          <ExtraTag params={params} pageCount={index} />
        </div>
      ))}

      <div className="container">
        <div className="load-more">
          <span onClick={() => setCount(count + 1)}>थप समाचार</span>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let tagData = "";
  let navData = "";

  await axios
    .get(`${baseUrl}/wp-json/wp/v2/tag/content?tag_id=${params.tag}`, {
      cancelToken: source.token,
    })
    .then((res) => (tagData = res.data))
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

  if (!tagData && !navData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tagData, navData, params },
  };
}
