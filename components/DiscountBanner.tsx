'use client';

import { useState } from 'react';
import styles from './DiscountBanner.module.css';

export default function DiscountBanner({ code = 'JUNTENDO' }: { code?: string }) {
  const [copied, setCopied] = useState(false);
  const [pulse, setPulse] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setPulse(true);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setPulse(false), 400);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.label}>
            <span className={styles.percent}>10% discount</span>
            <span> code exclusively for Waseda University students</span>
          </div>
          <div className={styles.codeRow}>
            <div className={styles.codeBox}>{code}</div>
            <button
              className={`${styles.copyBtn} ${pulse ? styles.pulse : ''}`}
              onClick={handleCopy}
              aria-label="Copy code"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>{copied ? 'Copied!' : 'copy'}</span>
            </button>
          </div>
        </div>

        <ul className={styles.rules}>
          <li>
            <span className={styles.bullet}>•</span>
            Please enter the above code in the coupon code field when placing your order.
          </li>
          <li>
            <span className={styles.bullet}>•</span>
            This offer cannot be combined with other discounts or promotions.
          </li>
        </ul>
      </div>
    </section>
  );
}
