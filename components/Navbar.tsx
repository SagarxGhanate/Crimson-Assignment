'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

/* ===== Data Types ===== */
interface NavItem {
  label: string;
  href: string;
}

interface NavCategory {
  label: string;
  href?: string;
  items?: NavItem[];
}

/* ===== Navigation Data (data-driven, rendered with .map()) ===== */
const navData: NavCategory[] = [
  {
    label: '英語ネイティブの英文校正',
    href: 'https://www.enago.jp/editing/',
    items: [
      { label: 'ノーマル英文校正', href: 'https://www.enago.jp/editing/normal-editing/' },
      { label: 'アドバンス英文校正', href: 'https://www.enago.jp/editing/substantive-editing/' },
      { label: 'トップインパクト英文校正', href: 'https://www.enago.jp/editing/top-impact-editing/' },
      { label: 'AIコンテンツ校正', href: 'https://www.enago.jp/editing/' },
      { label: '料金プラン', href: 'https://www.enago.jp/editing/pricing/' },
    ],
  },
  {
    label: 'ジャーナル投稿支援',
    href: 'https://www.enago.jp/publication-support/',
    items: [
      { label: 'ジャーナル選定支援', href: 'https://www.enago.jp/publication-support/' },
      { label: '論文投稿サポート', href: 'https://www.enago.jp/publication-support/' },
      { label: 'プレサブミッションレビュー', href: 'https://www.enago.jp/publication-support/' },
      { label: 'テクニカルレビュー', href: 'https://www.enago.jp/publication-support/' },
    ],
  },
  {
    label: '学術AIツール',
    href: 'https://www.enago.jp/',
    items: [
      { label: 'AI英文校正ツール', href: 'https://www.enago.jp/' },
      { label: 'AI要約ツール', href: 'https://www.enago.jp/' },
      { label: 'AI翻訳ツール', href: 'https://www.enago.jp/' },
      { label: 'AI論文作成支援', href: 'https://www.enago.jp/' },
    ],
  },
  {
    label: '学術翻訳',
    href: 'https://www.enago.jp/translation/',
  },
  {
    label: 'エナゴについて',
    href: 'https://www.enago.jp/about-us/',
    items: [
      { label: '会社概要', href: 'https://www.enago.jp/about-us/' },
      { label: '品質管理プロセス', href: 'https://www.enago.jp/about-us/' },
      { label: '校正者について', href: 'https://www.enago.jp/about-us/' },
      { label: 'お客様の声', href: 'https://www.enago.jp/share-your-story/listen-to-researchers' },
    ],
  },
  {
    label: 'FAQ & 学習リソース',
    href: 'https://www.enago.jp/resources/',
    items: [
      { label: 'よくある質問', href: 'https://www.enago.jp/faq' },
      { label: '学術出版ガイド', href: 'https://www.enago.jp/resources/' },
      { label: 'ブログ', href: 'https://www.enago.jp/resources/' },
      { label: 'ウェビナー', href: 'https://www.enago.jp/resources/' },
    ],
  },
];

/* ===== Reusable NavDropdown Component ===== */
function NavDropdown({ category }: { category: NavCategory }) {
  const hasDropdown = category.items && category.items.length > 0;

  return (
    <div className={styles.menuItem}>
      <a
        href={category.href || '#'}
        className={styles.menuButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        {category.label}
        {hasDropdown && <span className={styles.menuArrow}>▼</span>}
      </a>
      {hasDropdown && (
        <div className={styles.dropdown}>
          {category.items!.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={styles.dropdownItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ===== Reusable MobileNavSection Component ===== */
function MobileNavSection({
  category,
  isOpen,
  onToggle,
}: {
  category: NavCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const hasDropdown = category.items && category.items.length > 0;

  return (
    <div className={styles.mobileMenuItem}>
      {hasDropdown ? (
        <button
          className={styles.mobileMenuLink}
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          {category.label}
          <span className={`${styles.mobileArrow} ${isOpen ? styles.mobileArrowOpen : ''}`}>▼</span>
        </button>
      ) : (
        <a
          href={category.href || '#'}
          className={styles.mobileMenuLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {category.label}
        </a>
      )}
      {hasDropdown && isOpen && (
        <div className={styles.mobileMenuSub}>
          {category.items!.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={styles.mobileMenuSubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ===== Main Navbar ===== */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleSection = useCallback((index: number) => {
    setOpenSections(prev => ({ ...prev, [index]: !prev[index] }));
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      {/* ===== Top Bar ===== */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoColon}>:</span>
            <span className={styles.logoText}>enago</span>
          </Link>
          <div className={styles.topBarActions}>
            <a href="https://www.enago.jp/contact/" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
              お問い合わせ
            </a>
            <a href="https://www.enago.jp/mypage/" target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
              マイページへログイン
            </a>
            <a href="https://www.enago.jp/order/" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              お見積もり・ご注文
            </a>
          </div>
        </div>
      </div>

      {/* ===== Menu Bar — rendered with .map() ===== */}
      <div className={styles.menuBar}>
        <div className={styles.menuBarInner}>
          {navData.map((category, index) => (
            <NavDropdown key={index} category={category} />
          ))}

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニューを開く"
            aria-expanded={mobileOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu — rendered with .map() ===== */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        {navData.map((category, index) => (
          <MobileNavSection
            key={index}
            category={category}
            isOpen={!!openSections[index]}
            onToggle={() => toggleSection(index)}
          />
        ))}
        <div className={styles.mobileMenuActions}>
          <a href="https://www.enago.jp/contact/" target="_blank" rel="noopener noreferrer" className={styles.btnOutline} style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            お問い合わせ
          </a>
          <a href="https://www.enago.jp/mypage/" target="_blank" rel="noopener noreferrer" className={styles.btnOutline} style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            マイページへログイン
          </a>
          <a href="https://www.enago.jp/order/" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            お見積もり・ご注文
          </a>
        </div>
      </div>
    </nav>
  );
}
