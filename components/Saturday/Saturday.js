import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImageWrap from "../Image/ImageWrap";

export default function Saturday({ props }) {
  return (
    <section className="saturday-section">
      {props.category_logo && (
        <div className="saturday-nav">
          <div className="img-container">
            <img src={props.category_logo} alt="" />
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {props.data.map(
              (banner, index) =>
                index < 1 && (
                  <Link
                    href={`/story/${banner.post_id}/${banner.date_slug}`}
                    key={index}
                  >
                    <a className="main-section">
                      <div className="img-container">
                        {banner.post_image && (
                          <Image
                            src={banner.post_image}
                            className="img-fluid"
                            loading="eager"
                            width={800}
                            height={450}
                            alt={banner.post_title}
                          />
                        )}
                      </div>
                      <div className="title">{banner.post_title}</div>
                    </a>
                  </Link>
                )
            )}
            <div className="row no-gutters">
              {props.data.map(
                (second, index) =>
                  index > 0 &&
                  index < 3 && (
                    <div className="col-md-6 col-second" key={index}>
                      <Link
                        href={`/story/${second.post_id}/${second.date_slug}`}
                      >
                        <a>
                          <div className="second-section">
                            <div className="img-container">
                              <Image
                                src={second.post_image}
                                className="img-fluid"
                                loading="eager"
                                width={400}
                                height={225}
                                alt={second.post_title}
                              />
                            </div>
                            <div className="second-title">
                              {second.post_title}
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="side-wrapper">
              {props.data.map(
                (side, index) =>
                  index > 2 &&
                  index < 8 && (
                    <div className="" key={side.post_id}>
                      <div className="side-item">
                        {side.post_image && (
                          <ImageWrap
                            image={side.post_image}
                            height={100}
                            width={180}
                            altData={side.post_title}
                          />
                        )}

                        <div className="side-info">
                          <h3 className="title">
                            <Link
                              href={`/story/${side.post_id}/${side.date_slug}`}
                            >
                              <a>{side.post_title}</a>
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="load-more mb-0">
          <Link href={`/${props.category_slug}`}>
            <a>
              <span>थप समाचार</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
