import type { Metadata } from 'next'
import Script from 'next/script'
import FormSection from '../test/FormSection'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '강남 네일학원 수강료 및 자격증 취득 기간은 얼마나 걸리나요?',
      acceptedAnswer: { '@type': 'Answer', text: '풀타임 기준 평균 2~4개월이면 자격증 취득이 가능합니다. 미용사 3개 분야 중 준비 기간이 가장 짧습니다. 야간·주말반의 경우 4~6개월 정도 소요됩니다.' },
    },
    {
      '@type': 'Question',
      name: '네일미용사 자격증 없이 네일샵을 열 수 없나요?',
      acceptedAnswer: { '@type': 'Answer', text: '「공중위생관리법」 제6조에 따라 네일미용업을 영업 목적으로 하려면 미용사(네일) 국가자격증이 필요합니다. 자격증 없이 유료 시술이나 개업을 하면 과태료 등 행정처분을 받을 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '강남 네일학원 실기 시험에서 자주 감점되는 부분은?',
      acceptedAnswer: { '@type': 'Answer', text: '위생 처리 미흡, 큐티클 정리 시 피부 자극, 아크릴·젤 도포 두께 불균일, 시간 초과가 주요 감점 원인입니다. 도구 압력을 일정하게 유지하는 반복 훈련이 합격률을 높이는 핵심입니다.' },
    },
  ],
}

export const metadata: Metadata = {
  title: '강남 네일학원 | 네일 자격증·수강료 2026',
  description: '강남 네일학원 정보 총정리. 강남미용학원 네일 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
  alternates: { canonical: '/nail' },
  keywords: ['강남 네일학원', '강남미용학원 네일', '미용사 네일 자격증', '네일아트 학원', '강남 네일리스트 학원'],
  openGraph: {
    title: '강남 네일학원 | 네일 자격증·수강료 2026',
    description: '강남미용학원 네일 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
    url: '/nail',
    type: 'article',
    images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: '강남 네일학원 자격증 가이드' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강남 네일학원 | 네일 자격증·수강료 2026',
    description: '강남미용학원 네일 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지.',
    images: ['/images/thumb.webp'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://gangnam-beauty.com' },
    { '@type': 'ListItem', position: 2, name: '강남 네일학원', item: 'https://gangnam-beauty.com/nail' },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '강남 네일학원 | 네일 자격증·수강료 2026',
  description: '강남 네일학원 정보 총정리. 강남미용학원 네일 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
  datePublished: '2026-01-01',
  dateModified: '2026-05-24',
  author: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
  publisher: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
}

export default function NailPage() {
  return (
    <>
      <Script id="nail-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} strategy="beforeInteractive" />
      <Script id="nail-breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} strategy="beforeInteractive" />
      <Script id="nail-article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} strategy="beforeInteractive" />
      {/* 히어로 */}
      <section className="relative py-28 border-b border-stone-200 overflow-hidden flex items-center bg-gradient-to-br from-amber-800 via-orange-800 to-violet-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-[1100px] mx-auto px-4 text-center">
          <p className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">2026 최신 기준</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            강남 네일학원<br />
            <span className="text-amber-200">네일미용사 자격증·수강료 가이드</span>
          </h1>
          <p className="text-base text-white/70 mb-4 max-w-xl mx-auto leading-relaxed">
            미용사(네일) 국가자격증 취득부터 네일샵 취업까지, 강남 네일학원 선택에 필요한 정보를 정리했습니다.
          </p>
          <div className="relative mt-10 w-full text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">강남 네일학원 무료 상담 👇</span>
            </div>
            <FormSection />
          </div>
        </div>
      </section>

      {/* 강남 네일학원이란? */}
      <article className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">네일학원 소개</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">강남 네일학원이란?</h2>
            <p className="text-stone-500 leading-relaxed max-w-3xl">
              강남 네일학원은 미용사(네일) 국가기술자격증 취득과 네일아트 전문 기술 교육을 제공하는 학원입니다. 상대적으로 준비 기간이 짧고 단기 취득이 가능해 직장인이나 전직을 준비하는 분들에게 인기가 높은 분야입니다.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="bg-amber-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">💅 젤네일·아크릴 전문</h3>
              <p className="text-sm text-stone-500 leading-relaxed">젤네일·아크릴 연장·네일아트 등 다양한 시술 기술을 체계적으로 배웁니다.</p>
            </section>
            <section className="bg-amber-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">🎓 단기 자격증 취득</h3>
              <p className="text-sm text-stone-500 leading-relaxed">미용사 자격증 3개 분야 중 준비 기간이 2~4개월로 가장 짧아 빠른 취득이 가능합니다.</p>
            </section>
            <section className="bg-amber-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">💼 네일샵 취업·창업</h3>
              <p className="text-sm text-stone-500 leading-relaxed">네일샵 취업, 1인 네일샵 창업, 프리랜서 네일리스트 등 다양한 진로 선택이 가능합니다.</p>
            </section>
          </div>
        </div>
      </article>

      {/* 미용사(네일) 자격증 */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">자격증 정보</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">미용사(네일) 국가자격증</h2>
            <p className="text-stone-500 text-sm">한국산업인력공단 시행. 네일샵 취업·창업에 법적으로 필요합니다.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-stone-100 rounded-2xl p-5">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="bg-brand text-white text-xs px-2 py-0.5 rounded">필기</span> 이론 시험
              </h3>
              <ul className="text-sm text-stone-500 space-y-2">
                <li>• 60문항 / 객관식 4지선다 / 60분</li>
                <li>• 60점(36문항) 이상 합격</li>
                <li>• 출제 영역: 네일 개론, 피부학, 공중위생법규, 소독학</li>
                <li>• 참고 합격률: 약 45~60% (한국산업인력공단 기준)</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-5">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="bg-violet-500 text-white text-xs px-2 py-0.5 rounded">실기</span> 작업형 시험
              </h3>
              <ul className="text-sm text-stone-500 space-y-2">
                <li>• 젤네일·아크릴·네일아트 작업 평가</li>
                <li>• 60점 이상 합격 (감점 방식)</li>
                <li>• 위생 처리·작업 순서·완성도 포함</li>
                <li>• 참고 합격률: 약 40~55% (한국산업인력공단 기준)</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-xs text-amber-800">
            ⚠️ 시험 일정·응시료는 매년 변경될 수 있습니다. 반드시 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="font-bold underline">큐넷(q-net.or.kr)</a>에서 최신 공고를 확인하세요.
          </div>
        </div>
      </section>

      {/* 네일 커리큘럼 */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">교육과정</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">네일아트 커리큘럼 단계별 안내</h2>
            <p className="text-stone-500 text-sm">입문부터 취업 연계까지 평균 2~6개월 과정입니다.</p>
          </header>
          <div className="space-y-4">
            {[
              { step: '01', level: '기초 과정', badge: '1개월', items: ['네일 기초 이론·위생', '젤네일 기초 (단색·프렌치)', '손톱 파일링·큐티클 관리', '간단한 아트 기법'] },
              { step: '02', level: '자격증 과정', badge: '2~4개월', items: ['미용사(네일) 필기 이론 집중', '젤네일 실기 심화', '아크릴 연장 기법', '네일아트 (마블링·그라데이션)', '팁·랩 시술', '모의 시험 반복 훈련'] },
              { step: '03', level: '창업·취업 과정', badge: '3~6개월', items: ['고급 3D 네일아트', '풋케어·페디큐어', '네일샵 창업 실무', '고객 관리 및 SNS 마케팅'] },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand text-white font-extrabold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                  <h3 className="font-bold text-stone-900">{item.level}</h3>
                  <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">{item.badge}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 취업 전망 */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">진로 & 취업</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">네일미용사 자격증 취득 후 진로</h2>
            <p className="text-stone-500 text-sm">비교적 짧은 준비 기간으로 다양한 진로를 선택할 수 있습니다.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '💅', title: '네일샵 취업', desc: '강남 프리미엄 네일샵부터 동네 네일숍까지 취업처가 다양합니다. 기술과 속도가 올라갈수록 수입도 증가하는 구조입니다.' },
              { icon: '🏪', title: '1인 네일샵 창업', desc: '초기 비용이 비교적 적고 1인 운영이 가능해 창업 진입 장벽이 낮습니다. 자격증 취득 후 경험을 쌓으면 빠른 독립이 가능합니다.' },
              { icon: '🎨', title: '프리랜서 네일리스트', desc: '방문 네일 서비스, SNS 기반 개인 영업 등 프리랜서 형태로 활동하는 네일리스트가 증가하고 있습니다.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-stone-100 rounded-2xl p-6">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-extrabold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="text-center mb-10">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">자주 묻는 질문</p>
            <h2 className="text-2xl font-extrabold text-stone-900">강남 네일학원 Q&A</h2>
            <p className="text-stone-500 text-sm mt-2">네일 과정 수강 전 자주 묻는 질문을 정리했습니다.</p>
          </header>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: '네일 자격증은 얼마나 걸리나요?', a: '풀타임 기준 평균 2~4개월이면 자격증 취득이 가능합니다. 미용사 3개 분야 중 준비 기간이 가장 짧습니다. 야간·주말반의 경우 4~6개월 정도 소요됩니다.' },
              { q: '네일미용사 자격증 없이 네일샵을 열 수 없나요?', a: '「공중위생관리법」 제6조에 따라 네일미용업을 영업 목적으로 하려면 미용사(네일) 국가자격증이 필요합니다. 자격증 없이 유료 시술이나 개업을 하면 과태료 등 행정처분을 받을 수 있습니다.' },
              { q: '네일 실기 시험에서 자주 감점되는 부분은?', a: '위생 처리 미흡, 큐티클 정리 시 피부 자극, 아크릴·젤 도포 두께 불균일, 시간 초과가 주요 감점 원인입니다. 도구 압력을 일정하게 유지하는 반복 훈련이 합격률을 높이는 핵심입니다.' },
            ].map((item) => (
              <details key={item.q} className="bg-white border border-stone-100 rounded-2xl overflow-hidden group shadow-sm">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-stone-900 list-none">
                  <span>{item.q}</span>
                  <span className="text-brand text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-stone-500 leading-relaxed border-t border-stone-50 pt-4">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-violet-900 text-white text-center">
        <div className="max-w-[700px] mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 leading-tight">강남 네일학원<br />무료 상담 신청</h2>
          <p className="text-white/70 mb-8 text-base leading-relaxed">자격증 과정, 커리큘럼, 취업 연계까지<br />나에게 맞는 네일 과정을 안내받으세요.</p>
          <a href="/#form" className="inline-block bg-white text-brand font-bold text-base px-8 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition-all">무료 상담 신청하기 →</a>
        </div>
      </section>
    </>
  )
}
