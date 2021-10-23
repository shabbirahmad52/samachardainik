import React from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import ImageWrap from "../Image/ImageWrap";

export default function Photo({ props, title, slug }) {
  return (
    <>
      <section className="photo">
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
          <div className="photo-wrapper">
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
                      myhref={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
                      altData={props.data[0].post_title}
                    />
                  )}

                  <div className="description">
                    {props.data[0].post_excerpt}
                  </div>
                  <div className="d-flex justify-content-end mt-4">
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
                    (photo, index) =>
                      index > 0 &&
                      index < 3 && (
                        <div key={photo.post_id}>
                          <div className="side-item">
                            {photo.post_image && (
                              <ImageWrap
                                image={photo.post_image}
                                height={250}
                                width={445}
                                altData={photo.post_title}
                                myhref={`/story/${photo.post_id}/${photo.date_slug}`}
                              />
                            )}

                            <div className="side-info">
                              <h3 className="title">
                                <Link
                                  href={`/story/${photo.post_id}/${photo.date_slug}`}
                                >
                                  <a>{photo.post_title}</a>
                                </Link>
                              </h3>
                              <div className="province-name hide-lg">
                                {photo.primary_category.category_slug && (
                                  <Link
                                    href={`/${photo.primary_category.category_slug}`}
                                  >
                                    <a>
                                      {" "}
                                      {
                                        photo.primary_category.category_name
                                      } |{" "}
                                    </a>
                                  </Link>
                                )}
                                {photo.post_date}
                              </div>
                            </div>
                          </div>
                          <div className="province-name hide-xs">
                            {photo.primary_category.category_slug && (
                              <Link
                                href={`/${photo.primary_category.category_slug}`}
                              >
                                <a>
                                  {" "}
                                  {photo.primary_category.category_name} |{" "}
                                </a>
                              </Link>
                            )}
                            {photo.post_date}
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
