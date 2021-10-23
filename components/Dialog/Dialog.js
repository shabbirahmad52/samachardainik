import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import ImageWrap from "../Image/ImageWrap";

export default function Dialog({ props, title, slug }) {
  return (
    <>
      <section className="dialog">
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
          <div className="dialog-wrapper">
            <div className="row no-gutters">
              <div className="col-md-6">
                {props.data[0] && (
                  <div className="main-wrapper">
                    {props.data[0].post_image && (
                      <ImageWrap
                        image={props.data[0].post_image}
                        height={350}
                        width={625}
                        altData={props.data[0].post_title}
                      />
                    )}

                    <h2 className="title">
                      <Link
                        href={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
                      >
                        <a>{props.data[0].post_title}</a>
                      </Link>
                    </h2>
                    <div className="description">
                      २८ कात्तिक, काठमाडौं । नेपाल आयल निगमले मुलुककै दोस्रो
                      ठूलो पेट्रोलियम भण्डारण गृह निर्माण सुरु गरेको छ निर्माण
                      सुरु गरेको छ । निगमको गण्डकी दोस्रो ठूलो पेट्रोलियम
                      भण्डारण गृह प्रदेश प्रादेशिक कार्यालय पोखरा प्रादेशिक
                      कार्यालय पोखरा गगनगौंडामा बन्ने भण्डारण गृह अमलेखगञ्ज...
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                      <div className="province-name">
                        <Link
                          href={`/${props.data[0].primary_category.category_slug}`}
                        >
                          <a>
                            {" "}
                            {props.data[0].primary_category.category_name}{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    {props.data[2] && (
                      <div className="second-wrapper">
                        {props.data[2].post_image && (
                          <ImageWrap
                            image={props.data[2].post_image}
                            height={140}
                            width={250}
                            altData={props.data[2].post_title}
                          />
                        )}

                        <h2 className="title">
                          <Link
                            href={`/story/${props.data[2].post_id}/${props.data[2].date_slug}`}
                          >
                            <a>{props.data[2].post_title}</a>
                          </Link>
                        </h2>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                {props.data[1] && (
                  <div className="main-wrapper">
                    {props.data[1].post_image && (
                      <ImageWrap
                        image={props.data[1].post_image}
                        height={350}
                        width={625}
                        altData={props.data[1].post_title}
                      />
                    )}

                    <h2 className="title">
                      <Link
                        href={`/story/${props.data[1].post_id}/${props.data[1].date_slug}`}
                      >
                        <a>{props.data[1].post_title}</a>
                      </Link>
                    </h2>
                    <div className="description">
                      २८ कात्तिक, काठमाडौं । नेपाल आयल निगमले मुलुककै दोस्रो
                      ठूलो पेट्रोलियम भण्डारण गृह निर्माण सुरु गरेको छ निर्माण
                      सुरु गरेको छ । निगमको गण्डकी दोस्रो ठूलो पेट्रोलियम
                      भण्डारण गृह प्रदेश प्रादेशिक कार्यालय पोखरा प्रादेशिक
                      कार्यालय पोखरा गगनगौंडामा बन्ने भण्डारण गृह अमलेखगञ्ज...
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                      <div className="province-name">
                        <Link
                          href={`/${props.data[1].primary_category.category_slug}`}
                        >
                          <a>
                            {" "}
                            {props.data[1].primary_category.category_name}{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                    {props.data[3] && (
                      <div className="second-wrapper">
                        {props.data[3].post_image && (
                          <ImageWrap
                            image={props.data[3].post_image}
                            height={140}
                            width={250}
                            altData={props.data[3].post_title}
                          />
                        )}

                        <h2 className="title">
                          <Link
                            href={`/story/${props.data[3].post_id}/${props.data[3].date_slug}`}
                          >
                            <a>{props.data[3].post_title}</a>
                          </Link>
                        </h2>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
