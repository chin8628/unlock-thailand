import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [dot, setDot] = useState("");

  useEffect(() => {
    setInterval(() => {
      console.log(dot);
      setDot((prev) => (prev === "..." ? "" : prev + "."));
    }, 1000);
  }, []);

  return (
    <main className={styles.content}>
      <Head>
        <title>Thailand Grand Opening</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <div className={styles.container}>
        <h1>ประยุทธ์เหลือเวลาเตรียมเปิดประเทศอีก</h1>
        <h1 className={styles.countdown}>
          120 วัน
          <span>
            <span className={styles.dot}>{dot}</span>
          </span>
        </h1>

        <div className={styles.videoPanel}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/6xZOHbS88gg?autoplay=1&controls=0&amp;start=198&end=210"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.social}>
          <FacebookShareButton url="test">
            <FacebookIcon size={24} />
          </FacebookShareButton>
          <TwitterShareButton
            url="test"
            title="ประยุทธ์เหลือเตรียมเปิดประเทศอีกกี่วัน?"
            hashtags={["เปิดประเทศ120วัน"]}
          >
            <TwitterIcon size={24} />
          </TwitterShareButton>
        </div>
      </div>
    </main>
  );
}
