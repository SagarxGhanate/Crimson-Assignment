import Link from 'next/link';
import styles from './Footer.module.css';

/* ===== Data Types ===== */
interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/* ===== Footer Data (data-driven) ===== */
const footerColumns: FooterColumn[] = [
  {
    title: '英文校正サービス',
    links: [
      { label: 'ノーマル英文校正', href: 'https://www.enago.jp/editing/normal-editing/' },
      { label: 'アドバンス英文校正', href: 'https://www.enago.jp/editing/substantive-editing/' },
      { label: 'トップインパクト英文校正', href: 'https://www.enago.jp/editing/top-impact-editing/' },
      { label: '料金プラン', href: 'https://www.enago.jp/editing/pricing/' },
      { label: '英文校正サンプル', href: 'https://www.enago.jp/editing/' },
    ],
  },
  {
    title: '投稿支援サービス',
    links: [
      { label: 'ジャーナル選定支援', href: 'https://www.enago.jp/publication-support/' },
      { label: '論文投稿サポート', href: 'https://www.enago.jp/publication-support/' },
      { label: 'プレサブミッションレビュー', href: 'https://www.enago.jp/publication-support/' },
      { label: '翻訳サービス', href: 'https://www.enago.jp/translation/' },
    ],
  },
  {
    title: 'エナゴについて',
    links: [
      { label: '会社概要', href: 'https://www.enago.jp/about-us/' },
      { label: 'よくあるご質問', href: 'https://www.enago.jp/faq' },
      { label: 'お客様の声', href: 'https://www.enago.jp/share-your-story/listen-to-researchers' },
      { label: 'お問い合わせ', href: 'https://www.enago.jp/contact/' },
    ],
  },
  {
    title: 'リソース',
    links: [
      { label: '学術出版ガイド', href: 'https://www.enago.jp/resources/' },
      { label: 'ブログ', href: 'https://www.enago.jp/resources/' },
      { label: '無料サービス一覧', href: 'https://www.enago.jp/editing/' },
      { label: '単語集', href: 'https://www.enago.jp/resources/' },
    ],
  },
];

/* ===== Reusable FooterColumn Component ===== */
function FooterColumnBlock({ column }: { column: FooterColumn }) {
  return (
    <div className={styles.column}>
      <h4 className={styles.columnTitle}>{column.title}</h4>
      <ul className={styles.columnLinks}>
        {column.links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.columnLink}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top row: Logo + Columns */}
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoColon}>:</span>
              <span className={styles.logoText}>enago</span>
            </Link>
            <p className={styles.brandDesc}>
              エナゴは、1500以上の専門分野に対応する英文校正・学術翻訳サービスを提供しています。
            </p>
            <div className={styles.certBadges}>
              <img src="/assets/hero/apras-logo.png" alt="A-PRAS" className={styles.certBadge} />
            </div>
          </div>

          <div className={styles.columnsGrid}>
            {footerColumns.map((col, idx) => (
              <FooterColumnBlock key={idx} column={col} />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Crimson Interactive Pvt. Ltd. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="https://www.enago.jp/" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
            <a href="https://www.enago.jp/" target="_blank" rel="noopener noreferrer">利用規約</a>
            <a href="https://www.enago.jp/" target="_blank" rel="noopener noreferrer">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
