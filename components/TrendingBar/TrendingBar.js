import React from "react";
import Link from "next/link";
export default function TrendingBar({ props }) {
  return (
    <>
      <div className="trending-bar">
        <div className="container">
          <div className="trending-bar-wrapper">
            <div className="trending-img">
              <img src="/img/trending_icon.png" className="img-fluid" alt="" />
            </div>
            <ul>
              {props &&
                props.trending_tags &&
                props.trending_tags.map((trend, index) => (
                  <li key={index}>
                    <Link href={`/tags/${trend.tag_id}`}>
                      <a>{`#${trend.tag_name}`} </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
