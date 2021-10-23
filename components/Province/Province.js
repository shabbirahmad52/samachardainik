import React from "react";
import Link from "next/link";
import ImageWrap from "../Image/ImageWrap";

export default function Province({ props, title, slug }) {
  return (
    <>
      <section className="province">
        <div className="container">
          <div className="section-title text-center">
            <Link href={`/${slug}`}>
              <a>
                <div className="section-img">
                  <img src="/img/icon.png" className="img-fluid" alt="" />
                </div>
                <h1>{title}</h1>
              </a>
            </Link>
          </div>
          <div className="province-wrapper ">
            <div className="row">
              <div className="col-md-7">
                {props.data[0] && (
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
                    <div className="d-flex justify-content-end">
                      <div className="province-name">
                        {props.data[0].primary_category.category_slug && (
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
                )}
              </div>
              <div className="col-md-5">
                <div className="side-wrapper">
                  {props.data.map(
                    (province, index) =>
                      index > 0 &&
                      index < 5 && (
                        <div key={province.post_id}>
                          <div className="side-item">
                            {province.post_image && (
                              <ImageWrap
                                image={province.post_image}
                                height={100}
                                myhref={`/story/${province.post_id}/${province.date_slug}`}
                                width={180}
                                altData={province.post_title}
                              />
                            )}

                            <div className="side-info">
                              <h3 className="title">
                                <Link
                                  href={`/story/${province.post_id}/${province.date_slug}`}
                                >
                                  <a>{province.post_title}</a>
                                </Link>
                              </h3>
                              <div className="province-name hide-lg">
                                {province.primary_category.category_slug && (
                                  <Link
                                    href={`/${province.primary_category.category_slug}`}
                                  >
                                    <a>
                                      {" "}
                                      {
                                        province.primary_category.category_name
                                      }{" "}
                                      |{" "}
                                    </a>
                                  </Link>
                                )}
                                {province.post_date && province.post_date}
                              </div>
                            </div>
                          </div>
                          <div className="province-name hide-xs">
                            {province.primary_category.category_slug && (
                              <Link
                                href={`/${province.primary_category.category_slug}`}
                              >
                                <a>
                                  {" "}
                                  {
                                    province.primary_category.category_name
                                  } |{" "}
                                </a>
                              </Link>
                            )}
                            {province.post_date && province.post_date}
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
  );
}
