import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thailand Grand Opening</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <meta property="og:url" content="https://unlock-thailand.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="นับถอยหลังรอประยุทธ์เปิดประเทศกันเถอะ"
        />
        <meta
          property="og:description"
          content="เหลือเวลาอีกกี่วัน ก่อนจะถึงวันที่ประยุทธ์สัญญาว่าจะเปิดประเทศไทย"
        />
        <meta
          property="og:image"
          content="https://unlock-thailand.vercel.app/cover.png"
        />

        <meta
          name="twitter:title"
          content="นับถอยหลังรอประยุทธ์เปิดประเทศกันเถอะ"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://unlock-thailand.vercel.app/cover.png"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1MGGE4SGVF"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1MGGE4SGVF');
              `,
          }}
        />

        <script
          suppressHydrationWarning={true}
          src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
        ></script>
        <script
          suppressHydrationWarning={true}
          dangerouslySetInnerHTML={{
            __html: `kofiWidgetOverlay.draw('chin8628', {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': 'Support me',
                    'floating-chat.donateButton.background-color': '#00b9fe',
                    'floating-chat.donateButton.text-color': '#fff'
                  });`,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
