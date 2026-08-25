'use client';

import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        {/* Left Side — Selectable Text */}
        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeading}>
            早稲田大学関係者の皆さま
          </h1>
          <p className={styles.heroSubtitle}>
            エナゴ（Enago）が<br />
            研究成果の国際発信をお手伝いいたします
          </p>
          <div className={styles.aprasSection}>
            <img
              src="/assets/hero/apras-logo.png"
              alt="A-PRAS 文部科学省認定 研究支援サービス"
              className={styles.aprasLogo}
            />
            <p className={styles.aprasText}>
              エナゴのサービスは文部科学省の研究支援サービス・<br />
              パートナーシップ（A-PRAS）に認定されています
            </p>
          </div>
        </div>

        {/* Right Side — Globe */}
        <div className={styles.heroRight}>
          <div className={styles.globeWrapper}>
            {/* Glow behind globe */}
            <div className={styles.globeGlow} />

            {/* Main globe */}
            <div className={styles.globe}>
              {/* World map SVG inside globe */}
              <svg className={styles.worldMap} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Latitude lines */}
                <ellipse cx="100" cy="60" rx="85" ry="10" fill="none" stroke="rgba(100,116,139,0.12)" strokeWidth="0.8"/>
                <ellipse cx="100" cy="100" rx="90" ry="12" fill="none" stroke="rgba(100,116,139,0.12)" strokeWidth="0.8"/>
                <ellipse cx="100" cy="140" rx="85" ry="10" fill="none" stroke="rgba(100,116,139,0.12)" strokeWidth="0.8"/>
                <ellipse cx="100" cy="80" rx="88" ry="11" fill="none" stroke="rgba(100,116,139,0.08)" strokeWidth="0.6"/>
                <ellipse cx="100" cy="120" rx="88" ry="11" fill="none" stroke="rgba(100,116,139,0.08)" strokeWidth="0.6"/>
                {/* Longitude lines */}
                <ellipse cx="100" cy="100" rx="20" ry="90" fill="none" stroke="rgba(100,116,139,0.12)" strokeWidth="0.8"/>
                <ellipse cx="100" cy="100" rx="50" ry="90" fill="none" stroke="rgba(100,116,139,0.12)" strokeWidth="0.8"/>
                <ellipse cx="100" cy="100" rx="75" ry="90" fill="none" stroke="rgba(100,116,139,0.12)" strokeWidth="0.8"/>
                <ellipse cx="100" cy="100" rx="35" ry="90" fill="none" stroke="rgba(100,116,139,0.08)" strokeWidth="0.6"/>
                <ellipse cx="100" cy="100" rx="63" ry="90" fill="none" stroke="rgba(100,116,139,0.08)" strokeWidth="0.6"/>

                {/* Simplified continent shapes */}
                {/* Asia/Japan area */}
                <path d="M120,55 Q135,60 140,70 Q145,80 138,90 Q130,95 125,88 Q118,80 120,70 Z" fill="rgba(148,163,184,0.15)" stroke="rgba(100,116,139,0.2)" strokeWidth="0.6"/>
                <path d="M142,72 Q148,75 150,80 Q148,85 144,82 Z" fill="rgba(148,163,184,0.12)" stroke="rgba(100,116,139,0.15)" strokeWidth="0.5"/>
                {/* Europe/Africa */}
                <path d="M85,55 Q95,50 100,55 Q105,65 100,80 Q95,95 88,100 Q82,95 80,85 Q78,70 85,55 Z" fill="rgba(148,163,184,0.12)" stroke="rgba(100,116,139,0.18)" strokeWidth="0.6"/>
                <path d="M88,105 Q95,100 98,110 Q100,125 95,135 Q88,140 85,130 Q82,118 88,105 Z" fill="rgba(148,163,184,0.1)" stroke="rgba(100,116,139,0.15)" strokeWidth="0.5"/>
                {/* Americas */}
                <path d="M50,50 Q58,45 62,55 Q65,70 60,80 Q55,85 50,75 Q45,65 50,50 Z" fill="rgba(148,163,184,0.1)" stroke="rgba(100,116,139,0.15)" strokeWidth="0.5"/>
                <path d="M55,90 Q62,85 65,95 Q68,110 62,125 Q55,135 50,125 Q48,110 55,90 Z" fill="rgba(148,163,184,0.1)" stroke="rgba(100,116,139,0.15)" strokeWidth="0.5"/>
                {/* Australia */}
                <path d="M140,120 Q150,115 155,122 Q158,130 150,135 Q142,132 140,120 Z" fill="rgba(148,163,184,0.1)" stroke="rgba(100,116,139,0.15)" strokeWidth="0.5"/>
              </svg>
            </div>

            {/* Network lines SVG — extends beyond the globe */}
            <svg className={styles.networkSvg} viewBox="0 0 500 500" fill="none">
              {/* Main network polygon */}
              <line x1="250" y1="50" x2="420" y2="130" stroke="rgba(100,116,139,0.25)" strokeWidth="1.2"/>
              <line x1="420" y1="130" x2="440" y2="310" stroke="rgba(100,116,139,0.25)" strokeWidth="1.2"/>
              <line x1="440" y1="310" x2="350" y2="430" stroke="rgba(100,116,139,0.25)" strokeWidth="1.2"/>
              <line x1="350" y1="430" x2="160" y2="400" stroke="rgba(100,116,139,0.25)" strokeWidth="1.2"/>
              <line x1="160" y1="400" x2="70" y2="280" stroke="rgba(100,116,139,0.25)" strokeWidth="1.2"/>
              <line x1="70" y1="280" x2="100" y2="130" stroke="rgba(100,116,139,0.25)" strokeWidth="1.2"/>
              <line x1="100" y1="130" x2="250" y2="50" stroke="rgba(100,116,139,0.25)" strokeWidth="1.2"/>
              {/* Cross connections */}
              <line x1="250" y1="50" x2="440" y2="310" stroke="rgba(100,116,139,0.1)" strokeWidth="0.8"/>
              <line x1="420" y1="130" x2="160" y2="400" stroke="rgba(100,116,139,0.1)" strokeWidth="0.8"/>
              <line x1="440" y1="310" x2="100" y2="130" stroke="rgba(100,116,139,0.1)" strokeWidth="0.8"/>
              <line x1="70" y1="280" x2="420" y2="130" stroke="rgba(100,116,139,0.1)" strokeWidth="0.8"/>
              <line x1="350" y1="430" x2="250" y2="50" stroke="rgba(100,116,139,0.1)" strokeWidth="0.8"/>
              {/* Outward spikes */}
              <line x1="250" y1="50" x2="280" y2="0" stroke="rgba(100,116,139,0.2)" strokeWidth="1"/>
              <line x1="420" y1="130" x2="480" y2="90" stroke="rgba(100,116,139,0.2)" strokeWidth="1"/>
              <line x1="440" y1="310" x2="495" y2="330" stroke="rgba(100,116,139,0.2)" strokeWidth="1"/>
              <line x1="350" y1="430" x2="370" y2="490" stroke="rgba(100,116,139,0.2)" strokeWidth="1"/>
              <line x1="160" y1="400" x2="110" y2="470" stroke="rgba(100,116,139,0.2)" strokeWidth="1"/>
              <line x1="70" y1="280" x2="10" y2="310" stroke="rgba(100,116,139,0.2)" strokeWidth="1"/>
              <line x1="100" y1="130" x2="40" y2="80" stroke="rgba(100,116,139,0.2)" strokeWidth="1"/>
            </svg>

            {/* Network junction dots — on polygon vertices */}
            <span className={`${styles.dot} ${styles.dotLg}`} style={{top: '10%', left: '50%'}} />
            <span className={`${styles.dot} ${styles.dotLg}`} style={{top: '26%', right: '8%'}} />
            <span className={`${styles.dot} ${styles.dotLg}`} style={{top: '62%', right: '4%'}} />
            <span className={`${styles.dot} ${styles.dotLg}`} style={{bottom: '10%', right: '26%'}} />
            <span className={`${styles.dot} ${styles.dotLg}`} style={{bottom: '16%', left: '28%'}} />
            <span className={`${styles.dot} ${styles.dotLg}`} style={{top: '56%', left: '10%'}} />
            <span className={`${styles.dot} ${styles.dotLg}`} style={{top: '26%', left: '16%'}} />

            {/* Outer spike dots */}
            <span className={`${styles.dot} ${styles.dotSm}`} style={{top: '0%', left: '56%'}} />
            <span className={`${styles.dot} ${styles.dotSm}`} style={{top: '18%', right: '0%'}} />
            <span className={`${styles.dot} ${styles.dotSm}`} style={{top: '66%', right: '0%'}} />
            <span className={`${styles.dot} ${styles.dotSm}`} style={{bottom: '0%', right: '22%'}} />
            <span className={`${styles.dot} ${styles.dotSm}`} style={{bottom: '2%', left: '18%'}} />
            <span className={`${styles.dot} ${styles.dotSm}`} style={{top: '62%', left: '0%'}} />
            <span className={`${styles.dot} ${styles.dotSm}`} style={{top: '16%', left: '4%'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
