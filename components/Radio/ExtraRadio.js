import React, { useState, useEffect } from "react";
import Image from "next/image";
import useSWR from "swr";
import { baseUrl } from "../../utils/config";
import Link from "next/link";

export default function ExtraRadio({ params, pageCount }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(
    `${baseUrl}/wp-json/wp/v2/category/content?category_slug=${params}&offset=${
      pageCount + 6 + pageCount * 7
    }&page_post=8`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div className="loader-img-wrapper">
        <img src="/img/loader.gif" className="img-fluid"></img>
      </div>
    );

  return (
    <div className="extra-radio-section">
      <div className="container">
        <div className="row">
          {data.data &&
            data.data.map((post) => (
              <div className="col-md-3" key={post.post_id}>
                <div className="feature-program-single">
                  <Link
                    href={`/podcast/${post.post_id}/${data.data[0].date_slug}`}
                  >
                    <a>
                      <div className="feature-program-image">
                        {post.post_image && (
                          <Image
                            src={post.post_image}
                            className="img-fluid"
                            height={260}
                            width={320}
                            alt={post.post_title}
                          />
                        )}
                        <div className="feature-program-image-overlay"></div>
                      </div>
                      <div className="feature-program-name">
                        {post.post_title}
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
