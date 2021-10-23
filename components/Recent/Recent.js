import React from "react";
import Link from "next/link";
import ImageWrap from "../Image/ImageWrap";

export default function Recent({ props, title }) {
  return (
    props.data &&
    props.data != "" && (
      <>
        <section className="recent">
          <div className="">
            <div className="recent-wrapper container">
              <div className="row no-gutters">
                <div className="col-md-2">
                  <div className="side-wrapper">
                    {props.data &&
                      props.data.map(
                        (recent, index) =>
                          index > 0 &&
                          index < 4 && (
                            <div key={index}>
                              <div className="side-item">
                                {recent.post_image && (
                                  <ImageWrap
                                    image={recent.post_image}
                                    height={100}
                                    width={180}
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
                <div className="col-md-8">
                  <div className="main-wrapper">
                    <h2 className="title">
                      <Link
                        href={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
                      >
                        <a>{props.data[0].post_title}</a>
                      </Link>
                    </h2>

                    {props.data[0].post_image && (
                      <ImageWrap
                        image={props.data[0].post_image}
                        height={350}
                        width={625}
                        myhref={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
                        altData={props.data[0].post_title}
                      />
                    )}

                    <div className="description">
                      {props.data[0].post_excerpt}
                    </div>
                    <div className="d-flex justify-content-end ">
                      <div className="province-name">
                        {props.data[0].primary_category.category_name && (
                          <Link
                            href={`/${props.data[0].primary_category.category_slug}`}
                          >
                            <a>
                              {" "}
                              {
                                props.data[0].primary_category.category_name
                              } |{" "}
                            </a>
                          </Link>
                        )}

                        {props.data[0].post_date && props.data[0].post_date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="side-wrapper">
                    {props.data.map(
                      (recent, index) =>
                        index > 3 &&
                        index < 7 && (
                          <div key={recent.post_id}>
                            <div className="side-item">
                              {recent.post_image && (
                                <ImageWrap
                                  image={recent.post_image}
                                  height={100}
                                  width={180}
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
                                          recent.primary_category.category_name
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
