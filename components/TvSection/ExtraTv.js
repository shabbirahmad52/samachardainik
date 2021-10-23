import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { baseUrl } from "../../utils/config";
import Link from "next/link";
import ImageWrap from "../Image/ImageWrap";

export default function ExtraTv({ params, pageCount }) {
  const reload = () => {
    location.reload();
  };
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(
    `${baseUrl}/wp-json/wp/v2/category/content?category_slug=${params}&offset=${
      pageCount + 1 + pageCount * 8
    }&page_post=9`,
    fetcher
  );

  if (error)
    return (
      <div>
        <div className="reload-btn">
          <span onClick={() => reload()}>
            <i className="fa fa-reload"></i> Reload
          </span>
        </div>
      </div>
    );
  if (!data)
    return (
      <div className="loading-container">
        <img src="/img/loader.gif" className="img-fluid"></img>
      </div>
    );

  return (
    <div className="extra-categroy-section">
      <div className="container">
        <div className="row">
          {data &&
            data.data.map((post) => (
              <div className="col-md-4" key={post.post_id}>
                <Link href={`/story/${post.post_id}/${post.date_slug}`}>
                  <div className="post-item">
                    <div className="extra-video-wrap">
                      {post.post_image && (
                        <ImageWrap
                          image={post.post_image}
                          height={220}
                          width={360}
                          altData={post.post_title}
                          myhref={`/story/${post.post_id}/${post.date_slug}`}
                        />
                      )}
                    </div>

                    <h3 className="title">
                      <Link href={`/story/${post.post_id}/${post.date_slug}`}>
                        <a>{post.post_title}</a>
                      </Link>
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
