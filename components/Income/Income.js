import React from "react";

import IncomeWrap from "./IncomeWrap";

export default function Income({ props }) {
  return (
    <div className="container">
      <div className="income-section">
        {props.data &&
          props.data.map((ads, index) =>
            ads.ads_url ? (
              <a href={ads.ads_url} target="_blank" key={index}>
                <div className="img-container">
                  <IncomeWrap
                    height={ads.ads_type}
                    width={ads.ads_type}
                    image={ads.post_image}
                  />
                </div>
              </a>
            ) : (
              <div className="img-container" key={index}>
                <IncomeWrap
                  height={ads.ads_type}
                  width={ads.ads_type}
                  image={ads.post_image}
                />
              </div>
            )
          )}
      </div>
    </div>
  );
}
