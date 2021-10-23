import React from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import ImageWrap from "../Image/ImageWrap";

export default function Thought({ props, title, slug }) {
  return (
    <>
      <section className="thought-blog">
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
          <div className="row">
            {props.data.map(
              (thought, index) =>
                index < 4 && (
                  <div className="col-md-3" key={thought.post_id}>
                    <div className="thought-item">
                      <div className="img-container">
                        {thought.post_image ? (
                          <ImageWrap
                            height={150}
                            width={150}
                            image={thought.post_image}
                            myhref={`/story/${thought.post_id}/${thought.date_slug}`}
                            className="img-fluid"
                            alt=""
                          />
                        ) : (
                          <Skeleton height="100%" width="100%" />
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
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
