import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { baseUrl } from "../../../utils/config";
import ExtraAuthor from "../../../components/Category/ExtraAuthor";
import Image from "next/image";

export default function AuthorPage({ authorData, params }) {
  const [count, setCount] = useState(1);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    setCount(1);
  }, [params]);

  return (
    <div className="container">
      {
        <section className="author-page">
          <div className="container">
            <div className="top-section">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="author--meta">
                    <div className="author-image">
                      <Image
                        src={authorData.author_image}
                        width={180}
                        height={200}
                      />
                    </div>
                    <div className="author-details">
                      <h2 className="name">
                        {" "}
                        {authorData.author_name && authorData.author_name}{" "}
                      </h2>
                      <h4 className="degination">
                        {authorData.author_designation &&
                          authorData.author_designation}
                      </h4>
                      <p className="contact">
                        <span className="email">
                          <i className="fa fa-envelope"></i>{" "}
                          {authorData.author_email && authorData.author_email}
                        </span>{" "}
                        <span className="phone">
                          <i className="fa fa-phone"></i>{" "}
                          {authorData.author_phone && authorData.author_phone}
                        </span>
                      </p>
                      <div className="social">
                        <h5>Follow Us</h5>
                        <ul className="d-flex justify-content-around">
                          {authorData.author_facebook && (
                            <li className="fb">
                              <a
                                href={authorData.author_facebook}
                                target="_blank"
                              >
                                <i
                                  className="fab fa-facebook-f"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          )}
                          {authorData.author_twitter && (
                            <li className="twt">
                              <a
                                href={authorData.author_twitter}
                                target="_blank"
                              >
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          )}
                          {authorData.author_instagram && (
                            <li className="insta">
                              <a
                                href={authorData.author_instagram}
                                target="_blank"
                              >
                                <i
                                  className="fab fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="author-description">
                <p>
                  {authorData.author_description &&
                    authorData.author_description}
                </p>
              </div>
            </div>
          </div>
        </section>
      }

      {Array.apply(null, { length: count }).map((number, index) => (
        <div key={index}>
          <ExtraAuthor params={params} pageCount={index} />
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
  let authorData = "";
  let navData = "";

  await axios
    .get(
      `${baseUrl}/wp-json/wp/v2/author/content?author_nicename=${params.author}`,
      {
        cancelToken: source.token,
      }
    )
    .then((res) => (authorData = res.data))
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

  if (!authorData && !navData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { authorData, navData, params },
  };
}
