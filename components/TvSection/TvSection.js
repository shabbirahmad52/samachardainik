import React from "react";
import Link from "next/link";
import ImageWrap from "../Image/ImageWrap";

export default function TvSection({ props, slug }) {
  return (
    <>
      <section className="tv-section">
        <div className="container">
          <div className="tv-title">
            <img src="/img/samachar tv.png" className="img-fluid" alt="" />
          </div>
          <div className="tv-wrapper">
            <div className="row">
              <div className="col-md-9">
                {props.data[0] && (
                  <div className="main-video">
                    <div className="tv-video-container">
                      {props.data[0].post_image && (
                        <ImageWrap
                          image={props.data[0].post_image}
                          height={450}
                          width={800}
                          myhref={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
                          altData={props.data[0].post_title}
                        />
                      )}
                    </div>

                    <Link
                      href={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
                    >
                      <a className="title">{props.data[0].post_title}</a>
                    </Link>
                    <div className="description">
                      {props.data[0].post_excerpt}
                    </div>
                  </div>
                )}
              </div>
              <div className="col-md-3">
                {props.data.map(
                  (video, index) =>
                    index > 0 &&
                    index < 4 && (
                      <div className="side-video" key={video.post_id}>
                        {video.post_image && (
                          <ImageWrap
                            image={video.post_image}
                            height={260}
                            width={450}
                            myhref={`/story/${video.post_id}/${video.date_slug}`}
                            altData={video.post_title}
                          />
                        )}
                        <Link
                          href={`/story/${video.post_id}/${video.date_slug}`}
                        >
                          <a className="title">{video.post_title}</a>
                        </Link>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
