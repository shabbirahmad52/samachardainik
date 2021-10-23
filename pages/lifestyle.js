import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/config";
import { useRouter } from "next/router";
import ExtraCategory from "../components/Category/ExtraCategory";
import axios from "axios";
import Lifestyle from "../components/Lifestyle/Lifestyle";
import Banner from "../components/Banner/Banner";

export default function LifeStylePage({ data, params }) {
  const [pageCount, setpageCount] = useState(0);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    setpageCount(1);
  }, [params]);
  return (
    <div>
      <Banner props={data.flash_news} />
      {data.data != "" && <Lifestyle props={data} />}

      {Array.apply(null, { length: pageCount }).map((number, index) => (
        <div key={index}>
          <ExtraCategory params={params} pageCount={index + 2} />
        </div>
      ))}
      <div className="container">
        <div className="load-more">
          <span onClick={() => setpageCount(pageCount + 1)}>थप समाचार</span>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let params = { category: "lifestyle" };
  let data = "";
  let navData = "";

  await axios
    .get(
      `${baseUrl}/wp-json/wp/v2/category/content?category_slug=${params.category}&paged=1&page_post=15`,
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
    props: { data, navData, params },
    revalidate: 1, // will be passed to the page component as props
  };
}
