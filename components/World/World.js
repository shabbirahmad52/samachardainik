import React from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import ImageWrap from "../Image/ImageWrap";

export default function World({ props, title, slug }) {
  return (
    <>
      <section className="world">
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
          <div className="world-wrapper ">
            <div className="row">
              <div className="col-md-7">
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
                      altData={props.data[0].post_title}
                      myhref={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
                    />
                  )}

                  <div className="description">
                    {props.data[0].post_excerpt}
                  </div>
                  <div className="d-flex justify-content-between mt-4">
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
                      {props.data[0].post_date}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="side-wrapper">
                  {props.data.map(
                    (business, index) =>
                      index > 0 &&
                      index < 5 && (
                        <div className="" key={business.post_id}>
                          <div className="side-item">
                            {business.post_image && (
                              <ImageWrap
                                image={business.post_image}
                                height={100}
                                width={180}
                                altData={business.post_title}
                                myhref={`/story/${business.post_id}/${business.date_slug}`}
                              />
                            )}

                            <div className="side-info">
                              <h3 className="title">
                                <Link
                                  href={`/story/${business.post_id}/${business.date_slug}`}
                                >
                                  <a>{business.post_title}</a>
                                </Link>
                              </h3>
                              <div className="province-name hide-lg">
                                {business.primary_category.category_slug && (
                                  <Link
                                    href={`/${business.primary_category.category_slug}`}
                                  >
                                    <a>
                                      {" "}
                                      {
                                        business.primary_category.category_name
                                      }{" "}
                                      |{" "}
                                    </a>
                                  </Link>
                                )}

                                {business.post_date}
                              </div>
                            </div>
                          </div>
                          <div className="province-name hide-xs">
                            {business.primary_category.category_slug && (
                              <Link
                                href={`/${business.primary_category.category_slug}`}
                              >
                                <a>
                                  {" "}
                                  {
                                    business.primary_category.category_name
                                  } |{" "}
                                </a>
                              </Link>
                            )}
                            {business.post_date}
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
