import React, { useState } from "react";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Category from "../../components/Category/Category";
import ExtraCategory from "../../components/Category/ExtraCategory";
import { baseUrl } from "../../utils/config";
import axios from "axios";
import Banner from "../../components/Banner/Banner";
export default function CategoryPage({ data, params }) {
  const [count, setCount] = useState(1);

  const router = useRouter();

  if (!router.isFallback && !params?.category) {
    return <ErrorPage statusCode={404} />;
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      {data.flash_news && data.flash_news != "" && (
        <Banner props={data.flash_news} />
      )}
      {data && <Category props={data} title={data.category_name} />}

      {Array.apply(null, { length: count }).map((number, index) => (
        <div key={index}>
          <ExtraCategory params={params} pageCount={index} />
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

export async function getStaticPaths() {
  const paths = [{ params: { category: "society" } }];

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let data = "";
  let navData = "";

  await axios
    .get(
      `${baseUrl}/wp-json/wp/v2/category/content?category_slug=${params.category}&offset=0&page_post=5`,
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
  if (!data.status) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, navData, params },
    revalidate: 1, // will be passed to the page component as props
  };
}
