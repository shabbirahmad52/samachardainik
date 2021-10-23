import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Thought from "../components/Thought/Thought";
import ExtraThought from "../components/Thought/ExtraThought";
import { baseUrl } from "../utils/config";
export default function OpinionPage({ data, params }) {
  const [count, setCount] = useState(1);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Thought
        props={data}
        title={data.category_name}
        slug={data.category_slug}
      />

      {Array.apply(null, { length: count }).map((number, index) => (
        <div key={index}>
          <ExtraThought params={params} pageCount={index} />
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

export async function getStaticProps() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let params = "opinion";
  let data = "";
  let navData = "";

  await axios
    .get(
      `${baseUrl}/wp-json/wp/v2/category/content?category_slug=${params}&offset=0&page_post=4`,
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
