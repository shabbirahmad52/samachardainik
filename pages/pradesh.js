import React from "react";
import Province from "../components/Province/Province";
import { baseUrl } from "../utils/config";
import axios from "axios";
import Link from "next/link";
import Banner from "../components/Banner/Banner";
import Recent from "../components/Recent/Recent";

export default function ProvincePage({ data }) {
  return (
    <div>
      <Banner props={data.flash_news} />
      {data.data != "" && <Recent props={data} />}
      {data.category_child.map((province, index) => (
        <div key={province.category_id}>
          <Province
            props={province.category_posts}
            title={province.category_name}
            slug={province.category_slug}
          ></Province>
          <div className="view-all">
            <Link href={`/${province.category_slug}`}>
              <a>थप समाचार</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export async function getStaticProps({ params }) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let data = "";
  let navData = "";

  await axios
    .get(
      `${baseUrl}/wp-json/wp/v2/category/content?category_slug='pradesh'&paged=1&page_post=5`,
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
