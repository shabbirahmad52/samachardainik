import React from "react";
import axios from "axios";
import { baseUrl } from "../utils/config";
import ImageWrap from "../components/Image/ImageWrap";
import Link from "next/link";

export default function team({ data }) {
  return (
    <section className="team_container">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="main-team">
              <div className="row">
                {data.data.map((team, index) => (
                  <div className="col-sm-6 col-xl-3">
                    <div className="team">
                      <Link href={`/authors/${team.user_nicename}`}>
                        <a>
                          <ImageWrap
                            image={team.user_image}
                            height={320}
                            width={280}
                            altData="aalok niraula"
                          />
                        </a>
                      </Link>
                      <Link href={`/authors/${team.user_nicename}`}>
                        <a>
                          <div className="header">
                            <h1>{team.user_name}</h1>
                            <h2>{team.user_position}</h2>
                          </div>
                        </a>
                      </Link>

                      <div className="details">
                        <i className="fas fa-envelope"></i>
                        <h2>{team.user_email}</h2>
                      </div>
                      <div className="details">
                        <h2>
                          <i className="fas fa-phone-alt"></i>
                          {team.user_phone}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export async function getStaticProps() {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let data = "";
  let navData = "";

  await axios
    .get(`${baseUrl}/wp-json/wp/v2/author/list`, {
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
