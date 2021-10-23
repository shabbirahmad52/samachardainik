import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
            integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript></NextScript>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

          <div id="fb-root"></div>

          <scrip
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=4054021217944040&autoLogAppEvents=1"
            nonce="rKEDoY7T"
          ></scrip>

          <scrip
            src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
            async=""
            defer
          ></scrip>
          <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5fdb0b1a1b28fa00119fc4a1&product=image-share-buttons' async='async'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
