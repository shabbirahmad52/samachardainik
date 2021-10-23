import React, { useEffect, useState } from "react";

export default function FbVideo() {
  const [fbVideo, setFbVideo] = useState([]);

  const videoIframe = (id) => {
    console.log(id);

    const iframe =
      '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsamaachardainik%2Fvideos%2F' +
      id +
      '"%2F&show_text=false&width=560` width="100%" height="214" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>';
    return iframe;
  };

  useEffect(() => {
    function init() {
      FB.api(
        `${process.env.FB_PAGE_ID}/videos?access_token=${process.env.FB_TOKEN}`,
        "GET",
        {},
        function (response) {
          setFbVideo(response.data);
          console.log(response);
        }
      );
    }

    // (function (s, id) {
    //   var js,
    //     fjs = document.getElementsByTagName(s)[0];
    //   if (document.getElementById(id)) {
    //     return;
    //   }
    //   js = document.createElement(s);
    //   js.id = id;
    //   js.src = "//connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // })("script", "facebook-jssdk");
    // window.fbAsyncInit = function () {
    //   FB.init({
    //     appId: process.env.FB_APP_ID,
    //     xfbml: true,
    //     version: "v2.5",
    //   });
    // };
    init();
  }, []);
  return (
    <div className="recommend-program-list container">
      <div className="upcomming-title">Recent Shows</div>
      <div className="row">
        {fbVideo &&
          fbVideo.map((video, index) => {
            const url = `https://www.facebook.com/plugins/video.php?height=314&href=https://www.facebook.com/samaachardainik/videos/${video.id}/&show_text=false&width=560"`;

            return (
              <div className="col-md-4" key={index}>
                {index < 9 && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: videoIframe(video.id),
                    }}
                  />
                )}
                {/* <div
                  className="fb-video"
                  data-href={url}
                  data-width="500"
                  data-show-text="false"
                >
                  <div className="fb-xfbml-parse-ignore">
                    <blockquote
                      cite={`https://www.facebook.com/facebook/videos/${video.id}/`}
                    >
                      <a
                        href={`https://www.facebook.com/facebook/videos/${video.id}/`}
                      >
                        {video.description}
                      </a>
                      Posted by{" "}
                      <a href="https://www.facebook.com/samaachardainik">
                        Samachardainik
                      </a>{" "}
                      on {video.updated_time}
                    </blockquote>
                  </div>
                </div>
              */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
