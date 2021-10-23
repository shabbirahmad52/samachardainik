import React from "react";
import axios from "axios";
import { baseUrl } from "../utils/config";

export default function forex() {
  return (
    <div className="preetitounicode ">
      <div className="main-title">Forex</div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <iframe
              width="100%"
              height="650"
              frameBorder="0"
              border="no"
              marginWidth="0"
              marginHeight="0"
              allowTransparency="true"
              src="https://www.ashesh.com.np/forex/widget2.php?api=341115l576&header_color=38b45e&background_color=faf8ee&header_title=Nepal%20Exchange%20Rates"
            ></iframe>
          </div>
          <div className="col-md-6">
            <iframe
              width="100%"
              height="300"
              frameBorder="0"
              border="no"
              marginWidth="0"
              marginHeight="0"
              allowTransparency="true"
              src="https://www.ashesh.com.np/gold/widget.php?api=341117l562&header_color=0077e5"
            ></iframe>
          </div>
        </div>
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
