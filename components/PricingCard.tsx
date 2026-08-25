import Link from 'next/link';
import styles from './PricingCard.module.css';

interface PricingCardProps {
  badge: string;
  title: string;
  highlightLabel?: string;
  description: string;
  pricePerWord: string;
  features: string[];
  afterServices: string[];
  recommended: boolean;
  showVipBadge?: boolean;
  detailLink: string;
}

export default function PricingCard({
  badge,
  title,
  highlightLabel,
  description,
  pricePerWord,
  features,
  afterServices,
  recommended,
  showVipBadge,
  detailLink,
}: PricingCardProps) {
  return (
    <div className={`${styles.card} ${recommended ? styles.cardRecommended : ''}`}>
      {recommended && <div className={styles.recommendedPill}>{highlightLabel || 'おすすめ'}</div>}

      <div className={styles.badgeRow}>
        <span className={styles.badge}>{badge}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>

      {showVipBadge && (
        <div className={styles.vipRow}>
          <img src="/assets/vip-editor.svg" alt="VIP Editor" className={styles.vipIcon} />
          <span className={styles.vipText}>
            最高評価の校正者による<br />
            VIP Editor VIP校正者パックも
          </span>
        </div>
      )}

      <div className={styles.priceRow}>
        <span className={styles.priceLabel}>1単語&nbsp;</span>
        <span className={styles.priceAmount}>{pricePerWord}</span>
        <span className={styles.priceSuffix}>&nbsp;円～</span>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.features}>
        <div className={styles.featuresTitle}>含まれるサービス</div>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className={styles.afterServices}>
        <div className={styles.afterServicesTitle}>アフターサービス</div>
        {afterServices.map((service, index) => (
          <div key={index} className={styles.afterServiceItem}>
            <span className={styles.afterServiceBullet}>●</span>
            <span>{service}</span>
          </div>
        ))}
      </div>

      <Link href={detailLink} className={styles.ctaButton}>
        詳細へ
        <span className={styles.ctaArrow}>›</span>
      </Link>
    </div>
  );
}
