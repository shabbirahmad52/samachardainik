import React from "react";
import Link from "next/link";

export default function Popular({ props, title, slug }) {
  return (
    <div className="side-wrapper">
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
      <ul>
        {props.data[0] && (
          <li>
            <span>१</span>
            <Link
              href={`/story/${props.data[0].post_id}/${props.data[0].date_slug}`}
            >
              <a>
                <h4 className="title">{props.data[0].post_title}</h4>
              </a>
            </Link>
          </li>
        )}
        {props.data[1] && (
          <li>
            <span>२</span>
            <Link
              href={`/story/${props.data[1].post_id}/${props.data[1].date_slug}`}
            >
              <a>
                <h4 className="title">{props.data[1].post_title}</h4>
              </a>
            </Link>
          </li>
        )}
        {props.data[2] && (
          <li>
            <span>३</span>
            <Link
              href={`/story/${props.data[2].post_id}/${props.data[2].date_slug}`}
            >
              <a>
                <h4 className="title">{props.data[2].post_title}</h4>
              </a>
            </Link>
          </li>
        )}
        {props.data[3] && (
          <li>
            <span>४</span>
            <Link
              href={`/story/${props.data[3].post_id}/${props.data[3].date_slug}`}
            >
              <a>
                <h4 className="title">{props.data[3].post_title}</h4>
              </a>
            </Link>
          </li>
        )}
        {props.data[4] && (
          <li>
            <span>५</span>
            <Link
              href={`/story/${props.data[4].post_id}/${props.data[4].date_slug}`}
            >
              <a>
                <h4 className="title">{props.data[4].post_title}</h4>
              </a>
            </Link>
          </li>
        )}
        {props.data[5] && (
          <li>
            <span>६</span>
            <Link
              href={`/story/${props.data[5].post_id}/${props.data[5].date_slug}`}
            >
              <a>
                <h4 className="title">{props.data[5].post_title}</h4>
              </a>
            </Link>
          </li>
        )}
        {props.data[6] && (
          <li>
            <span>७</span>
            <Link
              href={`/story/${props.data[6].post_id}/${props.data[6].date_slug}`}
            >
              <a>
                <h4 className="title">{props.data[6].post_title}</h4>
              </a>
            </Link>
          </li>
        )}
        {props.data[7] && (
          <li>
            <span>८</span>
            <Link
              href={`/story/${props.data[7].post_id}/${props.data[7].date_slug}`}
            >
              <a>
                <h4 className="title">{props.data[7].post_title}</h4>
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
