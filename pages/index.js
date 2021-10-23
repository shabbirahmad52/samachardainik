import { useState, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import Recent from "../components/Recent/Recent";
import TvSection from "../components/TvSection/TvSection";
import Province from "../components/Province/Province";
import Thought from "../components/Thought/Thought";
import Feature from "../components/Feature/Feature";
import Business from "../components/Business/Business";
import World from "../components/World/World";
import Lifestyle from "../components/Lifestyle/Lifestyle";
import Dialog from "../components/Dialog/Dialog";
import Sports from "../components/Sports/Sports";
import Photo from "../components/Photo/Photo";
import Science from "../components/Science/Science";
import Information from "../components/Information/Information";
import { baseUrl } from "../utils/config";
import Income from "../components/Income/Income";
import Popular from "../components/Popular/Popular";
import Saturday from "../components/Saturday/Saturday";
import axios from "axios";
import Link from "next/link";
import Latest from "../components/Latest/Latest";
import Special from "../components/Special/Special";

export default function Home({ data }) {
  const [ads, setAds] = useState();
  useEffect(() => {
    let source = axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axios.get(
          `${baseUrl}/wp-json/wp/v2/ads/content?page_type=homepage`,
          {
            cancelToken: source.token,
          }
        );
        setAds((await response).data);
      } catch (error) {
        if (!axios.isCancel(error)) {
          throw error;
        }
      }
      return () => {
        source.cancel();
      };
    };
    loadData();
  }, []);

  return (
    <>
      {ads && ads.navbar_bottom_ads && <Income props={ads.navbar_bottom_ads} />}

      {data.position_sanibarnews &&
        data.position_sanibarnews.data &&
        data.position_sanibarnews.data != "" && (
          <>
            <Saturday props={data.position_sanibarnews} />
            {ads && ads.navbar_bottom_ads && (
              <Income props={ads.navbar_bottom_ads} />
            )}
          </>
        )}

      {data.position_flashnews.data && data.position_flashnews.data != "" && (
        <>
          <Banner props={data.position_flashnews} />
          {ads && ads.flash_news_bottom_ads && (
            <Income props={ads.flash_news_bottom_ads} />
          )}
        </>
      )}
      {data.position_mainnews.data && data.position_mainnews.data != "" && (
        <>
          <Recent props={data.position_mainnews} />
          {ads && ads.main_news_bottom_ads && (
            <Income props={ads.main_news_bottom_ads} />
          )}
        </>
      )}
      {data.position_latestnews.data && data.position_latestnews.data != "" && (
        <>
          <Latest
            props={data.position_latestnews}
            title={data.position_latestnews.category_name}
            slug={data.position_latestnews.category_slug}
          />
          {ads && ads.taja_update_bottom_ads && (
            <Income props={ads.taja_update_bottom_ads} />
          )}
        </>
      )}

      {data.position_3.data && data.position_3.data != "" && (
        <>
          <TvSection
            props={data.position_3}
            title={data.position_3.category_name}
            slug={data.position_3.category_slug}
          />
          {ads && ads.tv_bottom_ads && <Income props={ads.tv_bottom_ads} />}
        </>
      )}
      {data.position_16.data && data.position_16.data != "" && (
        <>
          <Lifestyle
            props={data.position_16}
            title={data.position_16.category_name}
            slug={data.position_16.category_slug}
          />
          {/* {ads && ads.lifestyle_bottom_ads && (
            <Income props={ads.lifestyle_bottom_ads} />
          )} */}
        </>
      )}
      {data.position_4.data && data.position_4.data != "" && (
        <>
          <Province props={data.position_4} title={"प्रदेश"} slug="pradesh" />
          {ads && ads.pradesh_bottom_ads && (
            <Income props={ads.pradesh_bottom_ads} />
          )}
        </>
      )}

      {data.position_5.data && data.position_5.data != "" && (
        <>
          <Thought
            props={data.position_5}
            title={data.position_5.category_name}
            slug={data.position_5.category_slug}
          />
          {ads && ads.sambad_bottom_ads && (
            <Income props={ads.sambad_bottom_ads} />
          )}
        </>
      )}
      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {data.position_13.data && data.position_13.data != "" && (
                <Feature
                  props={data.position_13}
                  title={data.position_13.category_name}
                  slug={data.position_13.category_slug}
                />
              )}
            </div>
            <div className="col-md-4">
              {data.position_popularnews.data &&
                data.position_popularnews.data != "" && (
                  <Popular
                    props={data.position_popularnews}
                    title={data.position_popularnews.category_name}
                    slug={data.position_popularnews.category_slug}
                  />
                )}
            </div>
          </div>
          {ads && ads.feature_bottom_ads && (
            <Income props={ads.feature_bottom_ads} />
          )}
        </div>
      </section>

      {data.position_6.data && data.position_6.data != "" && (
        <>
          <Business
            props={data.position_6}
            title={data.position_6.category_name}
            slug={data.position_6.category_slug}
          />
          {ads && ads.business_bottom_ads && (
            <Income props={ads.business_bottom_ads} />
          )}
        </>
      )}
      {data.position_15.data && data.position_15.data != "" && (
        <>
          <Special
            props={data.position_15}
            title={data.position_15.category_name}
            slug={data.position_15.category_slug}
          />
          {ads && ads.editorial_bottom_ads && (
            <Income props={ads.editorial_bottom_ads} />
          )}
        </>
      )}
      {data.position_14.data && data.position_14.data != "" && (
        <>
          <World
            props={data.position_14}
            title={data.position_14.category_name}
            slug={data.position_14.category_slug}
          />
          {ads && ads.world_bottom_ads && (
            <Income props={ads.world_bottom_ads} />
          )}
        </>
      )}
      {data.position_7.data && data.position_7.data != "" && (
        <>
          <Lifestyle
            props={data.position_7}
            title={data.position_7.category_name}
            slug={data.position_7.category_slug}
          />
          {ads && ads.lifestyle_bottom_ads && (
            <Income props={ads.lifestyle_bottom_ads} />
          )}
        </>
      )}
      {data.position_8.data && data.position_8.data != "" && (
        <>
          <Dialog
            props={data.position_8}
            title={data.position_8.category_name}
            slug={data.position_8.category_slug}
          />
          {ads && ads.bichar_blogs_bottom_ads && (
            <Income props={ads.bichar_blogs_bottom_ads} />
          )}
        </>
      )}
      {data.position_9.data && data.position_9.data != "" && (
        <>
          <Sports
            props={data.position_9}
            title={data.position_9.category_name}
            slug={data.position_9.category_slug}
          />
          {ads && ads.sports_bottom_ads && (
            <Income props={ads.sports_bottom_ads} />
          )}
        </>
      )}
      {data.position_10.data && data.position_10.data != "" && (
        <>
          <Photo
            props={data.position_10}
            title={data.position_10.category_name}
            slug={data.position_10.category_slug}
          />
          {ads && ads.photo_feature_bottom_ads && (
            <Income props={ads.photo_feature_bottom_ads} />
          )}
        </>
      )}

      <section className="other">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {data.position_11.data && data.position_11.data != "" && (
                <Science
                  props={data.position_11}
                  title={data.position_11.category_name}
                  slug={data.position_11.category_slug}
                />
              )}
            </div>
            <div className="col-md-6">
              {data.position_12.data && data.position_12.data != "" && (
                <Information
                  props={data.position_12}
                  title={data.position_12.category_name}
                  slug={data.position_12.category_slug}
                />
              )}
            </div>
          </div>
          {ads && ads.bigyan_bottom_ads && (
            <Income props={ads.bigyan_bottom_ads} />
          )}
        </div>
      </section>
      <section className="last-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link href={`/preetitounicode`}>
                <a>प्रितिबाट युनिकोड</a>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href={`/forex`}>
                <a>बिनिमय दर</a>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href={`/forex`}>
                <a>सुन चाँदीको भाउ</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let data = "";
  let navData = "";

  await axios
    .get(`${baseUrl}/wp-json/wp/v2/front/content`, {
      cancelToken: source.token,
    })
    .then((res) => (data = res.data))
    .catch(function (thrown) {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      } else {
        // handle error
      }
    });
  await axios
    .get(`${baseUrl}/wp-json/wp/v2/nav/menu`, {
      cancelToken: source.token,
    })
    .then((res) => (navData = res.data))
    .catch(function (thrown) {
      if (axios.isCancel(thrown)) {
        console.log("Request canceled", thrown.message);
      } else {
        // handle error
      }
    });

  if (!data && !navData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, navData },
    revalidate: 1, // will be passed to the page component as props
  };
}
