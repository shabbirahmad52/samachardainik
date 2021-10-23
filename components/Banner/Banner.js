import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Banner({ props }) {
  return (
    <>
      {props.data.map((banner, index) => (
        <section className="banner" key={banner.post_id}>
          <div className="container">
            {banner.post_ribbon && (
              <div className="ribbon-container">
                <span>{banner.post_ribbon}</span>
              </div>
            )}
            <div className="banner-wrapper">
              <h1 className="title">
                <Link href={`/story/${banner.post_id}/${banner.date_slug}`}>
                  <a> {banner.post_title} </a>
                </Link>
              </h1>
              <div className="subtitle">
                {banner.sub_title && banner.sub_title}
              </div>
              <div className="author-wrap">
                {banner.post_author && (
                  <span>
                    <i className="fa fa-user"></i> {banner.post_author}{" "}
                  </span>
                )}
                <i className="fa fa-clock"></i> {banner.post_date}
              </div>
              {banner.facebook_code ? (
                <div className="tv-video-container">
                  <iframe
                    src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/${banner.facebook_code}/&show_text=false`}
                    width="100%"
                    height="100%"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                    allowFullScreen="true"
                  ></iframe>
                </div>
              ) : banner.youtube_code ? (
                <div className="tv-video-container">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${banner.youtube_code}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : banner.post_image ? (
                <Link href={`/story/${banner.post_id}/${banner.date_slug}`}>
                  <a>
                    <div className="img-container">
                      {banner.post_image && (
                        <Image
                          src={banner.post_image}
                          className="img-fluid"
                          loading="eager"
                          width={1140}
                          height={640}
                          alt={banner.post_title}
                        />
                      )}
                    </div>
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
