import React from "react";
import Link from "next/link";
import ImageWrap from "../Image/ImageWrap";

export default function Latest({ props, title, slug }) {
  return (
    props.data &&
    props.data != "" && (
      <>
        <section className="latest">
          <div className="">
            <div className="latest-wrapper container">
              <div className="section-title text-center mt-0">
                <Link href={`/${slug}`}>
                  <a>
                    <div className="section-img">
                      <img src="/img/icon.png" className="img-fluid" alt="" />
                    </div>
                    <h1>{title}</h1>
                  </a>
                </Link>
              </div>
              <div className="row ">
                <div className="col-md-3">
                  <div className="side-wrapper">
                    {props.data &&
                      props.data.map(
                        (recent, index) =>
                          index < 2 && (
                            <div key={index}>
                              <div className="side-item">
                                {recent.post_image && (
                                  <ImageWrap
                                    image={recent.post_image}
                                    height={200}
                                    width={300}
                                    myhref={`/story/${recent.post_id}/${recent.date_slug}`}
                                    altData={recent.post_title}
                                  />
                                )}

                                <div className="side-info">
                                  <h3 className="title">
                                    <Link
                                      href={`/story/${recent.post_id}/${recent.date_slug}`}
                                    >
                                      <a>{recent.post_title}</a>
                                    </Link>
                                  </h3>
                                  <div className="province-name hide-lg">
                                    {recent.primary_category.category_name && (
                                      <Link
                                        href={`/${recent.primary_category.category_slug}`}
                                      >
                                        <a>
                                          {" "}
                                          {
                                            recent.primary_category
                                              .category_name
                                          }{" "}
                                          |{" "}
                                        </a>
                                      </Link>
                                    )}

                                    {recent.post_date && recent.post_date}
                                  </div>
                                </div>
                              </div>
                              <div className="province-name hide-xs">
                                {recent.primary_category.category_name && (
                                  <Link
                                    href={`/${recent.primary_category.category_slug}`}
                                  >
                                    <a>
                                      {" "}
                                      {
                                        recent.primary_category.category_name
                                      } |{" "}
                                    </a>
                                  </Link>
                                )}
                                {recent.post_date && recent.post_date}
                              </div>
                            </div>
                          )
                      )}
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="side-wrapper">
                    {props.data &&
                      props.data.map(
                        (recent, index) =>
                          index > 1 &&
                          index < 4 && (
                            <div key={index}>
                              <div className="side-item">
                                {recent.post_image && (
                                  <ImageWrap
                                    image={recent.post_image}
                                    height={200}
                                    width={300}
                                    myhref={`/story/${recent.post_id}/${recent.date_slug}`}
                                    altData={recent.post_title}
                                  />
                                )}

                                <div className="side-info">
                                  <h3 className="title">
                                    <Link
                                      href={`/story/${recent.post_id}/${recent.date_slug}`}
                                    >
                                      <a>{recent.post_title}</a>
                                    </Link>
                                  </h3>
                                  <div className="province-name hide-lg">
                                    {recent.primary_category.category_name && (
                                      <Link
                                        href={`/${recent.primary_category.category_slug}`}
                                      >
                                        <a>
                                          {" "}
                                          {
                                            recent.primary_category
                                              .category_name
                                          }{" "}
                                          |{" "}
                                        </a>
                                      </Link>
                                    )}

                                    {recent.post_date && recent.post_date}
                                  </div>
                                </div>
                              </div>
                              <div className="province-name hide-xs">
                                {recent.primary_category.category_name && (
                                  <Link
                                    href={`/${recent.primary_category.category_slug}`}
                                  >
                                    <a>
                                      {" "}
                                      {
                                        recent.primary_category.category_name
                                      } |{" "}
                                    </a>
                                  </Link>
                                )}
                                {recent.post_date && recent.post_date}
                              </div>
                            </div>
                          )
                      )}
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="side-wrapper">
                    {props.data &&
                      props.data.map(
                        (recent, index) =>
                          index > 3 &&
                          index < 6 && (
                            <div key={index}>
                              <div className="side-item">
                                {recent.post_image && (
                                  <ImageWrap
                                    image={recent.post_image}
                                    height={200}
                                    width={300}
                                    myhref={`/story/${recent.post_id}/${recent.date_slug}`}
                                    altData={recent.post_title}
                                  />
                                )}

                                <div className="side-info">
                                  <h3 className="title">
                                    <Link
                                      href={`/story/${recent.post_id}/${recent.date_slug}`}
                                    >
                                      <a>{recent.post_title}</a>
                                    </Link>
                                  </h3>
                                  <div className="province-name hide-lg">
                                    {recent.primary_category.category_name && (
                                      <Link
                                        href={`/${recent.primary_category.category_slug}`}
                                      >
                                        <a>
                                          {" "}
                                          {
                                            recent.primary_category
                                              .category_name
                                          }{" "}
                                          |{" "}
                                        </a>
                                      </Link>
                                    )}

                                    {recent.post_date && recent.post_date}
                                  </div>
                                </div>
                              </div>
                              <div className="province-name hide-xs">
                                {recent.primary_category.category_name && (
                                  <Link
                                    href={`/${recent.primary_category.category_slug}`}
                                  >
                                    <a>
                                      {" "}
                                      {
                                        recent.primary_category.category_name
                                      } |{" "}
                                    </a>
                                  </Link>
                                )}
                                {recent.post_date && recent.post_date}
                              </div>
                            </div>
                          )
                      )}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="side-wrapper">
                    {props.data &&
                      props.data.map(
                        (recent, index) =>
                          index > 5 &&
                          index < 8 && (
                            <div key={index}>
                              <div className="side-item">
                                {recent.post_image && (
                                  <ImageWrap
                                    image={recent.post_image}
                                    height={200}
                                    width={300}
                                    myhref={`/story/${recent.post_id}/${recent.date_slug}`}
                                    altData={recent.post_title}
                                  />
                                )}

                                <div className="side-info">
                                  <h3 className="title">
                                    <Link
                                      href={`/story/${recent.post_id}/${recent.date_slug}`}
                                    >
                                      <a>{recent.post_title}</a>
                                    </Link>
                                  </h3>
                                  <div className="province-name hide-lg">
                                    {recent.primary_category.category_name && (
                                      <Link
                                        href={`/${recent.primary_category.category_slug}`}
                                      >
                                        <a>
                                          {" "}
                                          {
                                            recent.primary_category
                                              .category_name
                                          }{" "}
                                          |{" "}
                                        </a>
                                      </Link>
                                    )}

                                    {recent.post_date && recent.post_date}
                                  </div>
                                </div>
                              </div>
                              <div className="province-name hide-xs">
                                {recent.primary_category.category_name && (
                                  <Link
                                    href={`/${recent.primary_category.category_slug}`}
                                  >
                                    <a>
                                      {" "}
                                      {
                                        recent.primary_category.category_name
                                      } |{" "}
                                    </a>
                                  </Link>
                                )}
                                {recent.post_date && recent.post_date}
                              </div>
                            </div>
                          )
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  );
}
