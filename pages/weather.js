import React from "react";
import axios from "axios";
import { baseUrl } from "../utils/config";

export default function weather() {
  return (
    <div className="preetitounicode ">
      <div className="main-title">Weather</div>
      <div className="container mt-3">
        <iframe
          width="100%"
          height="750"
          frameBorder="0"
          border="no"
          marginWidth="0"
          marginHeight="0"
          allowTransparency="true"
          src="https://www.ashesh.com.np/weather/widget.php?title=Nepal Weather Observation&header_color=00a2e2&api=351114l072"
        ></iframe>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  let navData = "";

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

  if (!navData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { navData },
    revalidate: 1, // will be passed to the page component as props
  };
}
