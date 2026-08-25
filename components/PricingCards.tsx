import PricingCard from './PricingCard';

const pricingData = [
  {
    badge: '2名体制',
    title: 'ノーマル英文校正',
    description:
      '原稿の文章が「英語として正しいか」を重点的にチェックし添削する英文校正サービスです。徹底的な文法チェックに加え、専門用語の用法・スペルも精査し、正確で読みやすい論文英語に仕上げます。',
    pricePerWord: '5.5',
    features: [
      '10%単語削減',
      '原稿評価カルテ（詳細版1ページ）',
      '投稿規程チェック',
      '英文校正証明書',
    ],
    afterServices: [
      'ライティングアドバイス 無料 1年間',
      '査読対応オプション 無料 1年間',
      'あんしん保証（無制限再校正） 無料 1年間',
      '担当校正者Q&A 無料 1年間',
    ],
    recommended: false,
    showVipBadge: true,
    detailLink: '/proofreading/normal',
  },
  {
    badge: '2名体制',
    title: 'アドバンス英文校正',
    highlightLabel: 'おすすめ',
    description:
      '英語の文法チェックに加え、論旨の展開や内容の妥当性にまで踏み込んで文章を分析し、より説得力のある英文を提案する校正サービスです。論文としての構成もチェックして、英語原稿全体の質を高めます。',
    pricePerWord: '10',
    features: [
      '20%単語削減',
      '原稿評価カルテ（詳細版4ページ）',
      '投稿規程チェック',
      '英文校正証明書',
      '英文カバーレター',
    ],
    afterServices: [
      '再校正対象のご修正量に上限なし！',
      '査読対応オプション 無料 1年間',
      'あんしん保証（無制限再校正） 無料 1年間',
      '担当校正者Q&A 無料 1年間',
    ],
    recommended: true,
    showVipBadge: true,
    detailLink: '/proofreading/advance',
  },
  {
    badge: '3名体制 模擬査読付き',
    title: 'トップインパクト英文校正',
    description:
      '英語論文の言語や構造のチェックに加え、学術的内容も精査し、インパクトファクターの高いトップジャーナルへの研究論文掲載をサポート。ジャーナル投稿前の論文改善につながる事前査読が無料で含まれます。',
    pricePerWord: '27',
    features: [
      '20%単語削減',
      'トップインパクトレポート（事前査読レポート）',
      '原稿評価カルテ（論文診断レポートで評価）',
      '投稿規程チェック',
      '英文校正証明書',
      '英文カバーレター',
      '盗用・剽窃チェック',
    ],
    afterServices: [
      'ライティングアドバイス 無料 1年間',
      '再校正対象のご修正量に上限なし！',
      'あんしん保証（無制限再校正） 無料 1年間',
      '担当校正者Q&A 無料 1年間',
    ],
    recommended: false,
    showVipBadge: true,
    detailLink: '/proofreading/top-impact',
  },
];

/* Inline wrapper styles */
const sectionStyle: React.CSSProperties = {
  padding: '60px 0',
  background: '#ffffff',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 80px',
};

const headingWrapperStyle: React.CSSProperties = {
  textAlign: 'center' as const,
  marginBottom: '48px',
};

const decoratorStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '30px',
  height: '3px',
  background: '#e63946',
  borderRadius: '2px',
  marginBottom: '12px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '28px',
  fontWeight: 800,
  color: '#0f172a',
  letterSpacing: '-0.3px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '24px',
  alignItems: 'start',
};

export default function PricingCards() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <div style={headingWrapperStyle}>
          <div style={decoratorStyle} />
          <h2 style={headingStyle}>英文校正サービスの料金プラン</h2>
        </div>
        <div style={gridStyle} className="pricingGrid">
          {pricingData.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricingGrid {
            grid-template-columns: 1fr !important;
            padding: 0 !important;
          }
          section > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .pricingGrid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
