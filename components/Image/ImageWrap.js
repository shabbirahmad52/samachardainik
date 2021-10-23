import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

export default function ImageWrap({ image, height, width, altData, myhref }) {
  const [showImage, setShowImage] = useState(true);

  return (
    <div className="img-container">
      {showImage && <Skeleton height="100%" width="100%" />}
      {image && myhref && myhref != "" ? (
        <Link href={myhref}>
          <a>
            <Image
              src={image}
              className="img-fluid"
              height={height}
              width={width}
              alt={altData || ""}
              onLoad={() => setShowImage(false)}
            />
          </a>
        </Link>
      ) : (
        image && (
          <Image
            src={image}
            className="img-fluid"
            height={height}
            width={width}
            alt={altData || ""}
            onLoad={() => setShowImage(false)}
          />
        )
      )}
    </div>
  );
}
