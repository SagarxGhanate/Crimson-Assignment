'use client';

import { useState } from 'react';
import styles from './TabSection.module.css';

interface TabData {
  id: string;
  label: string;
  imageIcon: string;
  title: string;
  subtitle: string;
  description: string;
}

const tabs: TabData[] = [
  {
    id: 'proofreading',
    label: '英文校正サービス',
    imageIcon: '📝',
    title: '論文アクセプトを支援',
    subtitle: '分野の専門家による英文校正',
    description:
      '最大3名の専門校正者が言語、論旨、内容を精査し論文の質を向上させます。AI使用論文にも対応。研究の背景や意図を汲み取り、丁寧な校正を行います。',
  },
  {
    id: 'promotion',
    label: '研究プロモーションサービス',
    imageIcon: '🚀',
    title: '研究のインパクトを最大化',
    subtitle: '論文発表後の研究プロモーション',
    description:
      '論文のビジュアルアブストラクト作成、プレスリリース配信、SNS拡散サポートなど、研究成果の認知度を高めるプロモーションサービスをご提供しています。研究のリーチを広げ、引用数の向上に貢献します。',
  },
];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.headingWrapper}>
          <div className={styles.decorator} />
          <h2 className={styles.heading}>
            研究そのものに注力いただくための研究支援があります
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabBar}>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${
                activeTab === index ? styles.tabBtnActive : ''
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent} key={activeTab}>
          <div className={styles.tabInner}>
            <div className={styles.tabImage}>
              <span className={styles.tabImageIcon}>
                {tabs[activeTab].imageIcon}
              </span>
            </div>
            <div className={styles.tabText}>
              <h3 className={styles.tabTitle}>{tabs[activeTab].title}</h3>
              <p className={styles.tabSubtitle}>{tabs[activeTab].subtitle}</p>
              <p className={styles.tabDescription}>
                {tabs[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
