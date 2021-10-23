import React from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import ImageWrap from "../Image/ImageWrap";
export default function Information({ props, title, slug }) {
  return (
    <>
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

        <div className="description">{props.data[0].post_excerpt}</div>
        <div className="d-flex justify-content-end mt-4">
          <div className="province-name">
            {props.data[0].primary_category.category_slug && (
              <Link href={`/${props.data[0].primary_category.category_slug}`}>
                <a> {props.data[0].primary_category.category_name} | </a>
              </Link>
            )}
            {props.data[0].post_date}
          </div>
        </div>
        <ul className="ulList">
          {props.data.map(
            (science, index) =>
              index > 0 &&
              index < 3 && (
                <li key={science.post_id}>
                  <Link href={`/story/${science.post_id}/${science.date_slug}`}>
                    <a>
                      <div className="section-img">
                        <img src="img/icon.png" className="img-fluid" alt="" />
                      </div>
                      <h3>{science.post_title}</h3>
                    </a>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
}
