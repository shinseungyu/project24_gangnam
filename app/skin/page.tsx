import type { Metadata } from 'next'
import Script from 'next/script'
import FormSection from '../test/FormSection'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '강남 피부미용학원 자격증 없이 피부관리실을 운영할 수 없나요?',
      acceptedAnswer: { '@type': 'Answer', text: '「공중위생관리법」 제6조에 따라 피부미용업을 영업 목적으로 수행하려면 미용사(피부) 국가자격증이 필요합니다. 자격증 없이 유료 시술을 하거나 개업하면 과태료·영업정지 등 행정처분을 받을 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '강남 피부미용학원 자격증 시험이 헤어보다 어렵나요?',
      acceptedAnswer: { '@type': 'Answer', text: '일반적으로 필기 합격률은 피부가 헤어보다 약간 높은 편입니다. 다만 실기는 피부 분석·관리 순서가 세밀하게 평가되어 반복 훈련이 중요합니다. 개인 학습 능력에 따라 다를 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '강남 피부관리 분야 취업 전망은 어떤가요?',
      acceptedAnswer: { '@type': 'Answer', text: '피부 시술에 대한 관심 증가와 함께 에스테틱·피부관리 수요가 꾸준히 늘고 있습니다. 특히 강남 권역은 프리미엄 피부 관리 수요가 높아 경쟁력 있는 기술을 갖추면 취업이 유리합니다.' },
    },
  ],
}

export const metadata: Metadata = {
  title: '강남 피부미용학원 | 자격증·수강료 2026',
  description: '강남 피부미용학원 정보 총정리. 강남미용학원 피부관리 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
  alternates: { canonical: '/skin' },
  keywords: ['강남 피부미용학원', '강남미용학원 피부', '미용사 피부 자격증', '피부관리사 자격증', '강남 에스테틱 학원'],
  openGraph: {
    title: '강남 피부미용학원 | 자격증·수강료 2026',
    description: '강남미용학원 피부관리 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
    url: '/skin',
    type: 'article',
    images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: '강남 피부미용학원 자격증 가이드' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강남 피부미용학원 | 자격증·수강료 2026',
    description: '강남미용학원 피부관리 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지.',
    images: ['/images/thumb.webp'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://gangnam-beauty.com' },
    { '@type': 'ListItem', position: 2, name: '강남 피부미용학원', item: 'https://gangnam-beauty.com/skin' },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '강남 피부미용학원 | 자격증·수강료 2026',
  description: '강남 피부미용학원 정보 총정리. 강남미용학원 피부관리 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
  datePublished: '2026-01-01',
  dateModified: '2026-05-24',
  author: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
  publisher: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
}

export default function SkinPage() {
  return (
    <>
      <Script id="skin-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} strategy="beforeInteractive" />
      <Script id="skin-breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} strategy="beforeInteractive" />
      <Script id="skin-article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} strategy="beforeInteractive" />
      {/* 히어로 */}
      <section className="relative py-28 border-b border-stone-200 overflow-hidden flex items-center bg-gradient-to-br from-green-900 via-green-800 to-violet-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-[1100px] mx-auto px-4 text-center">
          <p className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">2026 최신 기준</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            강남 피부미용학원<br />
            <span className="text-green-200">피부미용사 자격증·수강료 가이드</span>
          </h1>
          <p className="text-base text-white/70 mb-4 max-w-xl mx-auto leading-relaxed">
            미용사(피부) 국가자격증 취득부터 에스테틱 취업까지, 강남 피부미용학원 선택에 필요한 정보를 정리했습니다.
          </p>
          <div className="relative mt-10 w-full text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">강남 피부미용학원 무료 상담 👇</span>
            </div>
            <FormSection />
          </div>
        </div>
      </section>

      {/* 강남 피부미용학원이란? */}
      <article className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">피부미용학원 소개</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">강남 피부미용학원이란?</h2>
            <p className="text-stone-500 leading-relaxed max-w-3xl">
              강남 피부미용학원은 미용사(피부) 국가기술자격증 취득과 피부관리 전문 기술 교육을 제공하는 학원입니다. 강남구·서초구 일대는 프리미엄 에스테틱·피부관리실이 밀집해 있어 실습 연계와 취업 네트워크가 발달되어 있습니다.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">🧴 피부관리 전문 교육</h3>
              <p className="text-sm text-stone-500 leading-relaxed">클렌징·마사지·기기 관리·림프 드레이니지 등 피부관리 전 과정을 체계적으로 배웁니다.</p>
            </section>
            <section className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">🎓 국가자격증 취득</h3>
              <p className="text-sm text-stone-500 leading-relaxed">미용사(피부) 자격증은 피부관리실·에스테틱샵 취업과 개업에 법적으로 필수입니다.</p>
            </section>
            <section className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">💼 에스테틱 취업 연계</h3>
              <p className="text-sm text-stone-500 leading-relaxed">강남 권역 피부관리실·에스테틱과의 취업 연계 네트워크를 통해 자격증 취득 후 빠른 현장 투입이 가능합니다.</p>
            </section>
          </div>
        </div>
      </article>

      {/* 미용사(피부) 자격증 */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">자격증 정보</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">미용사(피부) 국가자격증</h2>
            <p className="text-stone-500 text-sm">한국산업인력공단 시행. 피부관리실·에스테틱샵 취업·창업에 법적으로 필요합니다.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-stone-100 rounded-2xl p-5">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="bg-brand text-white text-xs px-2 py-0.5 rounded">필기</span> 이론 시험
              </h3>
              <ul className="text-sm text-stone-500 space-y-2">
                <li>• 60문항 / 객관식 4지선다 / 60분</li>
                <li>• 60점(36문항) 이상 합격</li>
                <li>• 출제 영역: 피부학, 해부생리학, 공중위생법규, 소독학</li>
                <li>• 참고 합격률: 약 55~70% (한국산업인력공단 기준)</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-5">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="bg-violet-500 text-white text-xs px-2 py-0.5 rounded">실기</span> 작업형 시험
              </h3>
              <ul className="text-sm text-stone-500 space-y-2">
                <li>• 얼굴·몸 피부관리 실기 작업 평가</li>
                <li>• 60점 이상 합격 (감점 방식)</li>
                <li>• 위생 처리·관리 순서·완성도 포함</li>
                <li>• 참고 합격률: 약 50~65% (한국산업인력공단 기준)</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-xs text-amber-800">
            ⚠️ 시험 일정·응시료는 매년 변경될 수 있습니다. 반드시 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="font-bold underline">큐넷(q-net.or.kr)</a>에서 최신 공고를 확인하세요.
          </div>
        </div>
      </section>

      {/* 피부 커리큘럼 */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">교육과정</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">피부관리 커리큘럼 단계별 안내</h2>
            <p className="text-stone-500 text-sm">입문부터 취업 연계까지 평균 5~12개월 과정입니다.</p>
          </header>
          <div className="space-y-4">
            {[
              { step: '01', level: '기초 과정', badge: '2~3개월', items: ['피부과학 기초 이론', '클렌징·스킨케어 기법', '기초 마사지 기술', '피부 유형 분석 및 관리'] },
              { step: '02', level: '자격증 과정', badge: '4~8개월', items: ['피부미용사 필기 이론 집중', '얼굴 피부관리 실기', '몸 피부관리 실기', '림프 드레이니지', '모의 시험 반복 훈련'] },
              { step: '03', level: '에스테틱 심화', badge: '6~12개월', items: ['고주파·초음파 기기 관리', 'LED 피부 치료', '피부 트러블 케어', '창업 실무 및 고객 관리'] },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand text-white font-extrabold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                  <h3 className="font-bold text-stone-900">{item.level}</h3>
                  <span className="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">{item.badge}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />{i}
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
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">피부미용사 자격증 취득 후 진로</h2>
            <p className="text-stone-500 text-sm">피부관리 수요 증가와 함께 취업·창업 기회가 넓어지고 있습니다.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🏪', title: '에스테틱·피부관리실', desc: '강남 프리미엄 에스테틱부터 일반 피부관리실까지 취업처가 다양합니다. 보조 관리사로 시작해 수석 관리사로 성장하는 경로가 일반적입니다.' },
              { icon: '🏥', title: '피부과·의원 연계', desc: '의료 피부과 내 에스테틱룸, 피부 전문 병원 등에서 의료진과 협력해 피부 관리 서비스를 제공합니다.' },
              { icon: '🌿', title: '독립 창업', desc: '자격증 취득 후 일정 경험을 쌓으면 1인 피부관리실 창업이 가능합니다. 법적으로 자격증 보유자만 피부관리업 개업이 허용됩니다.' },
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
            <h2 className="text-2xl font-extrabold text-stone-900">강남 피부미용학원 Q&A</h2>
            <p className="text-stone-500 text-sm mt-2">피부 과정 수강 전 자주 묻는 질문을 정리했습니다.</p>
          </header>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: '피부미용사 자격증이 없으면 피부관리실을 운영할 수 없나요?', a: '「공중위생관리법」 제6조에 따라 피부미용업을 영업 목적으로 수행하려면 미용사(피부) 국가자격증이 필요합니다. 자격증 없이 유료 시술을 하거나 개업하면 과태료·영업정지 등 행정처분을 받을 수 있습니다.' },
              { q: '피부 자격증 시험이 헤어보다 어렵나요?', a: '일반적으로 필기 합격률은 피부가 헤어보다 약간 높은 편입니다. 다만 실기는 피부 분석·관리 순서가 세밀하게 평가되어 반복 훈련이 중요합니다. 개인 학습 능력에 따라 다를 수 있습니다.' },
              { q: '피부관리 분야 취업 전망은 어떤가요?', a: '피부 시술에 대한 관심 증가와 함께 에스테틱·피부관리 수요가 꾸준히 늘고 있습니다. 특히 강남 권역은 프리미엄 피부 관리 수요가 높아 경쟁력 있는 기술을 갖추면 취업이 유리합니다.' },
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
      <section className="py-20 bg-gradient-to-r from-green-800 to-violet-900 text-white text-center">
        <div className="max-w-[700px] mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 leading-tight">강남 피부미용학원<br />무료 상담 신청</h2>
          <p className="text-white/70 mb-8 text-base leading-relaxed">자격증 과정, 커리큘럼, 취업 연계까지<br />나에게 맞는 피부관리 과정을 안내받으세요.</p>
          <a href="/#form" className="inline-block bg-white text-brand font-bold text-base px-8 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition-all">무료 상담 신청하기 →</a>
        </div>
      </section>
    </>
  )
}
