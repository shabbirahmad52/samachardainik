import React, { useState, useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";
import { baseUrl } from "../../utils/config";
import ImageWrap from "../Image/ImageWrap";
import Link from "next/link";

export default function ExtraThought({ params, pageCount }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(
    `${baseUrl}/wp-json/wp/v2/category/content?category_slug=${params}&offset=${
      pageCount + 4 + pageCount * 4
    }&page_post=4`,
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
    <div className="thought-blog">
      <div className="container">
        <div className="row">
          {data &&
            data.data.map((thought) => (
              <div className="col-md-3" key={thought.post_id}>
                <div className="thought-item">
                  <div className="img-container">
                    {thought.post_image && (
                      <ImageWrap
                        height={150}
                        width={150}
                        image={thought.post_image}
                        myhref={`/story/${thought.post_id}/${thought.date_slug}`}
                      />
                    )}
                  </div>
                  <div className="title">
                    <Link
                      href={`/story/${thought.post_id}/${thought.date_slug}`}
                    >
                      <a> {thought.post_title} </a>
                    </Link>
                  </div>
                  <div className="author-name">{thought.post_author}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
