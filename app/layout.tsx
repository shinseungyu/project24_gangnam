import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/Header'
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal'
import LegalNoticeModal from '@/components/LegalNoticeModal'
import TermsModal from '@/components/TermsModal'
import './globals.css'

const pretendard = localFont({
  src: [
    { path: './fonts/Pretendard-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Pretendard-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Pretendard-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/Pretendard-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Pretendard-ExtraBold.woff2', weight: '800', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-pretendard',
})

const SITE_NAME = '강남미용학원비교사이트'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://gangnam-beauty.com'
const TITLE = '강남미용학원비교 사이트 | 서울·강남 네일·피부·메이크업·헤어 총정리'
const DESC = '강남미용학원비교사이트에서 서울·강남 네일·피부·메이크업·헤어 학원을 한눈에 비교하세요. 수강료·커리큘럼·취업률·자격증 과정까지 2026년 최신 기준으로 정리했습니다. 무료 상담 신청으로 나에게 맞는 학원을 안내받으세요.'
const KEYWORDS = '강남미용학원, 강남미용학원비교, 강남 미용학원 추천, 강남 헤어학원, 강남 피부미용학원, 강남 메이크업학원, 강남 네일학원, 미용학원 수강료, 미용사 자격증 학원, 강남 뷰티학원'

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `강남미용학원비교사이트 - %s`,
  },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  keywords: KEYWORDS.split(', '),
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: '강남미용학원 비교 총정리' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/images/thumb.webp'],
  },
  verification: {
    other: { 'naver-site-verification': '7e6419e6a73d61bf310dba9b2e9c2f43f72030a3' },
  },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
    'NaverBot': 'all',
    'Yeti': 'all',
    'googlebot': 'all',
    'subject': '강남미용학원 비교',
    'title': TITLE,
    'publisher': SITE_NAME,
    'author': SITE_NAME,
    'Other Agent': SITE_NAME,
    'location': 'South Korea',
    'distribution': 'global',
    'rating': 'general',
    'format-detection': 'telephone=no, date=no, address=no, email=no',
    'itemprop:name': TITLE,
    'itemprop:description': DESC,
    'itemprop:image': '/images/thumb.webp',
    // 지역 SEO
    'geo.region': 'KR-11',
    'geo.placename': '강남구, 서울특별시',
    'geo.position': '37.5172;127.0473',
    'ICBM': '37.5172, 127.0473',
    // 크롤 힌트
    'revisit-after': '3 days',
    // 저작권
    'copyright': '주식회사 와야미디어',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gangnam-beauty.com'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: '강남미용학원 비교',
        inLanguage: 'ko-KR',
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: '강남미용학원 비교',
        url: `${siteUrl}/`,
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service`,
        name: '강남미용학원 비교',
        serviceType: '강남 미용학원 정보 비교 및 상담 서비스',
        areaServed: { '@type': 'City', name: '서울특별시 강남구' },
        provider: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: '강남미용학원 비교 | 2026 강남 미용학원 수강료·커리큘럼·취업률 총정리',
        inLanguage: 'ko-KR',
        description: '강남 미용학원 수강료, 커리큘럼, 취업률, 자격증 과정을 한눈에 비교하세요.',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: ['강남미용학원', '강남미용학원비교', '강남 헤어학원', '강남 피부미용학원', '미용사 자격증'],
        mainEntity: { '@id': `${siteUrl}/#service` },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#localbusiness`,
        name: '강남미용학원 비교',
        url: `${siteUrl}/`,
        description: '강남 권역 미용학원 정보 비교 및 상담 서비스',
        image: `${siteUrl}/images/thumb.webp`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '구룡길 19, A429호',
          addressLocality: '마포구',
          addressRegion: '서울특별시',
          postalCode: '04116',
          addressCountry: 'KR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 37.5481,
          longitude: 126.9145,
        },
        areaServed: [
          { '@type': 'City', name: '강남구' },
          { '@type': 'City', name: '서초구' },
          { '@type': 'City', name: '송파구' },
        ],
        priceRange: '무료 상담',
        openingHours: 'Mo-Su 09:00-22:00',
        sameAs: [`${siteUrl}/`],
      },
      {
        '@type': 'VocationalSchool',
        '@id': `${siteUrl}/#vocationalschool`,
        name: '강남미용학원',
        description: '강남 권역 헤어·피부·메이크업·네일 국가자격증 취득 및 취업 연계 전문 교육기관',
        url: `${siteUrl}/`,
        image: `${siteUrl}/images/thumb.webp`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: '강남구',
          addressRegion: '서울특별시',
          addressCountry: 'KR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 37.5172,
          longitude: 127.0473,
        },
        areaServed: '강남구, 서초구, 서울특별시',
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: '미용사(헤어) 국가기술자격증' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: '미용사(피부) 국가기술자격증' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: '미용사(네일) 국가기술자격증' },
        ],
        offers: [
          { '@type': 'Offer', category: '헤어 자격증 과정', areaServed: '강남구' },
          { '@type': 'Offer', category: '피부관리 자격증 과정', areaServed: '강남구' },
          { '@type': 'Offer', category: '메이크업 전문 과정', areaServed: '강남구' },
          { '@type': 'Offer', category: '네일아트 자격증 과정', areaServed: '강남구' },
        ],
      },
      {
        '@type': 'Course',
        '@id': `${siteUrl}/#course-hair`,
        name: '미용사(헤어) 자격증 과정',
        description: '한국산업인력공단 시행 미용사(헤어) 국가기술자격증 필기·실기 준비 과정. 커트·펌·염색·업스타일 실기 집중 훈련.',
        url: `${siteUrl}/license`,
        provider: { '@id': `${siteUrl}/#vocationalschool` },
        educationalCredentialAwarded: '미용사(헤어) 국가기술자격증',
        timeRequired: 'P3M',
        courseMode: 'onsite',
        inLanguage: 'ko-KR',
        occupationalCategory: '미용사',
      },
      {
        '@type': 'Course',
        '@id': `${siteUrl}/#course-skin`,
        name: '미용사(피부) 자격증 과정',
        description: '한국산업인력공단 시행 미용사(피부) 국가기술자격증 필기·실기 준비 과정. 피부 분석·관리·기기 사용 실기 집중 훈련.',
        url: `${siteUrl}/license`,
        provider: { '@id': `${siteUrl}/#vocationalschool` },
        educationalCredentialAwarded: '미용사(피부) 국가기술자격증',
        timeRequired: 'P5M',
        courseMode: 'onsite',
        inLanguage: 'ko-KR',
        occupationalCategory: '피부미용사',
      },
      {
        '@type': 'Course',
        '@id': `${siteUrl}/#course-nail`,
        name: '미용사(네일) 자격증 과정',
        description: '한국산업인력공단 시행 미용사(네일) 국가기술자격증 필기·실기 준비 과정. 젤네일·아크릴·네일아트 실기 집중 훈련.',
        url: `${siteUrl}/license`,
        provider: { '@id': `${siteUrl}/#vocationalschool` },
        educationalCredentialAwarded: '미용사(네일) 국가기술자격증',
        timeRequired: 'P2M',
        courseMode: 'onsite',
        inLanguage: 'ko-KR',
        occupationalCategory: '네일미용사',
      },
      {
        '@type': 'Course',
        '@id': `${siteUrl}/#course-makeup`,
        name: '메이크업 전문 과정',
        description: '웨딩·무대·미디어 메이크업 전문 과정. 포트폴리오 제작 및 취업 연계 지원.',
        url: `${siteUrl}/curriculum`,
        provider: { '@id': `${siteUrl}/#vocationalschool` },
        educationalCredentialAwarded: '메이크업 전문가 수료증',
        timeRequired: 'P4M',
        courseMode: 'onsite',
        inLanguage: 'ko-KR',
        occupationalCategory: '메이크업아티스트',
      },
    ],
  }

  return (
    <html lang="ko">
      <head>
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESC} />
        <meta itemProp="image" content="/images/thumb.webp" />
        <meta name="theme-color" content="#7C3AED" />
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} strategy="afterInteractive" />
      </head>
      <body className={`${pretendard.className} antialiased`}>
        <Header />

        <main className="min-h-screen">{children}</main>

        {/* 푸터 */}
        <footer className="bg-stone-950 text-stone-400 text-sm py-16 mt-20">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-stone-800 pb-10 mb-10">
              <div>
                <p className="font-bold text-white text-lg mb-4 tracking-tight">💇 강남미용학원 비교</p>
                <p className="text-xs leading-relaxed max-w-xs text-stone-500">
                  본 사이트의 정보는 2026년 최신 기준을 바탕으로 하며, 실제 수강료 및 커리큘럼은 학원에 따라 상이할 수 있습니다.
                </p>
                <div className="text-xs text-stone-600 mt-4 space-y-1 leading-relaxed">
                  <p>상호: 주식회사 와야미디어</p>
                  <p>사업자등록번호: 105-87-55780</p>
                  <p>업종: 광고대행, 광고물작성, 기타광고</p>
                  <p>주소: 서울특별시 마포구 구룡길 19, A429호</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <p className="text-white font-semibold text-xs uppercase tracking-widest">학원 정보</p>
                  <ul className="text-xs space-y-2">
                    <li><a href="/curriculum" className="hover:text-brand transition-colors">커리큘럼 가이드</a></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-white font-semibold text-xs uppercase tracking-widest">정보 센터</p>
                  <ul className="text-xs space-y-2">
                    <li><a href="/license" className="hover:text-brand transition-colors">자격증 정보</a></li>
                    <li><a href="/review" className="hover:text-brand transition-colors">수강후기</a></li>
                    <li><a href="/qna" className="hover:text-brand transition-colors">자주 묻는 질문</a></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-white font-semibold text-xs uppercase tracking-widest">법적 고지</p>
                  <ul className="text-xs space-y-2">
                    <li><a href="/about" className="hover:text-brand transition-colors">사이트 소개</a></li>
                    <li><PrivacyPolicyModal /></li>
                    <li><TermsModal /></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-stone-500 flex items-center gap-3">
              <span>© 2026 강남미용학원 비교. All rights reserved.</span>
              <PrivacyPolicyModal />
              <TermsModal />
              <LegalNoticeModal />
            </p>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
