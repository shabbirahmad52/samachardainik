import React from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import ImageWrap from "../Image/ImageWrap";

export default function Feature({ props, title, slug }) {
  return (
    <>
      <div className="main-wrapper">
        <div className="section-title text-center">
          <Link href={`/${slug}`}>
            <a>
              <div className="section-img">
                <img src="img/icon.png" className="img-fluid" alt="" />
              </div>
              <h1>{title}</h1>
            </a>
          </Link>
        </div>

        <h2 className="title">
          <Link
            href={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
          >
            <a> {props.data[0].post_title} </a>
          </Link>
        </h2>
        <div className="img-container">
          {props.data[0].post_image && (
            <ImageWrap
              image={props.data[0].post_image}
              height={350}
              width={625}
              myhref={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
              altData={props.data[0].post_title}
            />
          )}
        </div>
        <div className="description">{props.data[0].excerpt}</div>
        <div className="d-flex justify-content-end mb-4">
          <div className="province-name">
            {props.data[0].primary_category.category_slug && (
              <Link href={`/${props.data[0].primary_category.category_slug}`}>
                <a>
                  {" "}
                  {props.data[0].primary_category.category_name} | {""}{" "}
                </a>
              </Link>
            )}
            {props.data[0].post_date}
          </div>
        </div>
        <div className="row d-flex">
          {props.data &&
            props.data.map(
              (recent, index) =>
                index > 1 &&
                index < 4 && (
                  <div className="col-md-6" key={index}>
                    <div className="side-wrapper">
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
                                  {recent.primary_category.category_name} |{" "}
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
                            <a> {recent.primary_category.category_name} | </a>
                          </Link>
                        )}
                        {recent.post_date && recent.post_date}
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </>
  );
}
