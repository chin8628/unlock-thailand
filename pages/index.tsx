import { useState, useEffect, useMemo } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import Duration from "dayjs/plugin/duration";
import DayOfYear from "dayjs/plugin/dayOfYear";
import Utc from "dayjs/plugin/utc";
import Timezone from "dayjs/plugin/timezone";

import styles from "../styles/Home.module.css";

dayjs.extend(RelativeTime);
dayjs.extend(DayOfYear);
dayjs.extend(Duration);
dayjs.extend(Utc);
dayjs.extend(Timezone);
dayjs.tz.setDefault("Asia/Bangkok");

function getCountdown() {
  const announceDate = dayjs("2021-07-01T00:00:00.000Z");
  const openDate = announceDate.add(dayjs.duration({ days: 120 }));
  return openDate.diff(dayjs(), "day");
}

export default function Home() {
  const [dot, setDot] = useState("");

  const countdownDate = useMemo(getCountdown, []);

  useEffect(() => {
    setInterval(() => {
      setDot((prev) => (prev === "..." ? "" : prev + "."));
    }, 1000);
  }, []);

  return (
    <main className={styles.content}>
      <div className={styles.container}>
        <small>
          ประยุทธ์ได้กล่าวในแถลงการณ์ว่า “ผมตั้งเป้าเอาไว้ว่า
          ประเทศไทยจะต้องเปิดประเทศทั้งประเทศ ให้ได้ภายใน 120 วัน”
          ดังนั้นเว็บนี้จึงเกิดขึ้นมา
        </small>
        <h1>ประยุทธ์เหลือเวลาเตรียมเปิดประเทศอีก</h1>
        <h1 className={styles.countdown}>
          {countdownDate} วัน
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
          <FacebookShareButton url="https://unlock-thailand.vercel.app">
            <FacebookIcon size={24} />
          </FacebookShareButton>
          <TwitterShareButton
            url="https://unlock-thailand.vercel.app"
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
