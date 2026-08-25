'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';

interface TestimonialData {
  university: string;
  professor: string;
  image: string;
}

const testimonials: TestimonialData[] = [
  {
    university: '千葉大学大学院理学研究院',
    professor: '泉 康雄 教授',
    image: '/assets/professors/Professor Yasuo Izumi.png',
  },
  {
    university: '総合研究大学院大学',
    professor: '久堀 徹先生',
    image: '/assets/professors/Professor Toru Hisahori.png',
  },
  {
    university: '日本大学文理学部社会学科',
    professor: '石岡丈昇 教授',
    image: '/assets/professors/Professor Takenori Ishioka.png',
  },
];

export default function Testimonials() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>エナゴご利用者の声</h2>
          <p className={styles.subtext}>
            「ハズレがない」「信頼できる」　エナゴをご利用いただいた研究
            <br />
            者のご感想を約2分30秒の動画でお聞きください。
          </p>
        </div>

        {/* Banner / Video — same container, same size */}
        <div className={styles.bannerContainer}>
          {showVideo ? (
            <iframe
              className={styles.videoIframe}
              src="https://www.youtube.com/embed/Hvzgrhqj4AQ?autoplay=1&start=3"
              title="エナゴご利用者の声"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className={styles.banner} onClick={() => setShowVideo(true)}>
              {testimonials.map((item, index) => (
                <div key={index} className={styles.panel}>
                  <img
                    src={item.image}
                    alt={`${item.professor} - ${item.university}`}
                    className={styles.panelImage}
                  />
                  <div className={styles.label}>
                    <span className={styles.labelUniversity}>{item.university}</span>
                    <span className={styles.labelProfessor}>{item.professor}</span>
                  </div>
                </div>
              ))}

              <button className={styles.playButton} aria-label="動画を再生">
                <span className={styles.playIcon}>▶</span>
              </button>
            </div>
          )}
        </div>

        {/* Simple link to listen to more researchers */}
        <div className={styles.listenMore}>
          <a
            href="https://www.enago.jp/share-your-story/listen-to-researchers"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.listenLink}
          >
            他の研究者の声を聞く
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
