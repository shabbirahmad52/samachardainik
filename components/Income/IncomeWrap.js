import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

export default function IncomeWrap({ image, height, width }) {
  const adTypeHeight = (ads) => {
    switch (ads) {
      case "large_box_ads":
        return 100;
      case "square_ads":
        return 250;
      case "medium_box_ads":
        return 100;
      case "small_box_ads":
        return 100;
    }
  };
  const adTypeWidth = (ads) => {
    switch (ads) {
      case "large_box_ads":
        return 1200;
      case "square_ads":
        return 250;
      case "medium_box_ads":
        return 550;
      case "small_box_ads":
        return 300;
    }
  };
  const [showImage, setShowImage] = useState(true);

  return (
    <>
      {showImage && (
        <Skeleton
          height={adTypeHeight(height) || 100}
          width={adTypeWidth(width)}
        />
      )}
      {image && (
        <Image
          src={image}
          className="img-fluid"
          height={adTypeHeight(height)}
          width={adTypeWidth(width)}
          alt=""
          onLoad={() => setShowImage(false)}
        ></Image>
      )}
    </>
  );
}
