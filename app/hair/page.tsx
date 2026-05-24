import type { Metadata } from 'next'
import Script from 'next/script'
import FormSection from '../test/FormSection'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '미용사(헤어) 자격증이 없으면 헤어샵에서 일할 수 없나요?',
      acceptedAnswer: { '@type': 'Answer', text: '「공중위생관리법」 제6조에 따라 미용업을 영업 목적으로 수행하려면 국가자격증이 필요합니다. 보조 스태프로 단순 보조 업무는 가능하지만, 독립적으로 시술하거나 창업하려면 자격증이 필수입니다.' },
    },
    {
      '@type': 'Question',
      name: '강남 헤어학원은 다른 지역보다 무조건 좋은가요?',
      acceptedAnswer: { '@type': 'Answer', text: '지역보다 학원의 커리큘럼과 강사 역량이 더 중요합니다. 다만 강남 권역은 취업 네트워크가 발달해 있어, 자격증 취득 후 살롱 취업 연계 기회가 상대적으로 많은 것은 사실입니다.' },
    },
    {
      '@type': 'Question',
      name: '직장을 다니면서 강남 헤어학원을 다닐 수 있나요?',
      acceptedAnswer: { '@type': 'Answer', text: '대부분의 강남 헤어학원이 평일 야간반(오후 6~9시)과 주말반을 운영합니다. 다만 실기 준비 시간이 줄어들어 자격증 취득까지 더 오래 걸릴 수 있으므로 시험 전 별도 연습 시간 확보가 중요합니다.' },
    },
  ],
}

export const metadata: Metadata = {
  title: '강남 헤어학원 | 미용사 자격증·수강료 2026',
  description: '강남 헤어학원 정보 총정리. 강남미용학원 헤어 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
  alternates: { canonical: '/hair' },
  keywords: ['강남 헤어학원', '강남미용학원 헤어', '미용사 헤어 자격증', '헤어학원 커리큘럼', '강남 헤어 자격증 취득'],
  openGraph: {
    title: '강남 헤어학원 | 미용사 자격증·수강료 2026',
    description: '강남미용학원 헤어 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
    url: '/hair',
    type: 'article',
    images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: '강남 헤어학원 자격증 가이드' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강남 헤어학원 | 미용사 자격증·수강료 2026',
    description: '강남미용학원 헤어 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지.',
    images: ['/images/thumb.webp'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://gangnam-beauty.com' },
    { '@type': 'ListItem', position: 2, name: '강남 헤어학원', item: 'https://gangnam-beauty.com/hair' },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '강남 헤어학원 | 미용사 자격증·수강료 2026',
  description: '강남 헤어학원 정보 총정리. 강남미용학원 헤어 과정의 자격증 취득 방법, 커리큘럼, 합격률, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
  datePublished: '2026-01-01',
  dateModified: '2026-05-24',
  author: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
  publisher: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
}

export default function HairPage() {
  return (
    <>
      <Script id="hair-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} strategy="beforeInteractive" />
      <Script id="hair-breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} strategy="beforeInteractive" />
      <Script id="hair-article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} strategy="beforeInteractive" />
      {/* 히어로 */}
      <section className="relative py-28 border-b border-stone-200 overflow-hidden flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-violet-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-[1100px] mx-auto px-4 text-center">
          <p className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">2026 최신 기준</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            강남 헤어학원<br />
            <span className="text-blue-200">미용사(헤어) 자격증·수강료 가이드</span>
          </h1>
          <p className="text-base text-white/70 mb-4 max-w-xl mx-auto leading-relaxed">
            미용사(헤어) 국가자격증 취득부터 살롱 취업까지, 강남 헤어학원 선택에 필요한 정보를 정리했습니다.
          </p>
          <div className="relative mt-10 w-full text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">강남 헤어학원 무료 상담 👇</span>
            </div>
            <FormSection />
          </div>
        </div>
      </section>

      {/* 강남 헤어학원이란? */}
      <article className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">헤어학원 소개</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">강남 헤어학원이란?</h2>
            <p className="text-stone-500 leading-relaxed max-w-3xl">
              강남 헤어학원은 서울 강남구·서초구 일대에서 미용사(헤어) 국가기술자격증 취득과 헤어 기술 전문 교육을 제공하는 학원입니다. 압구정·청담 등 국내 최고급 살롱이 밀집한 지역 특성상, 현직 헤어 아티스트와의 네트워크가 활발하고 취업 연계 기회가 풍부합니다.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">✂️ 커트·펌·염색 전문</h3>
              <p className="text-sm text-stone-500 leading-relaxed">원랭스·그라데이션·레이어 커트부터 퍼머넌트·염색·탈색까지 체계적인 실기 교육을 받을 수 있습니다.</p>
            </section>
            <section className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">🎓 국가자격증 취득</h3>
              <p className="text-sm text-stone-500 leading-relaxed">한국산업인력공단 시행 미용사(헤어) 자격증은 헤어샵 취업과 창업에 법적으로 필수입니다. 필기·실기 준비를 병행 진행합니다.</p>
            </section>
            <section className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">💼 살롱 취업 연계</h3>
              <p className="text-sm text-stone-500 leading-relaxed">강남 권역 살롱·헤어샵과의 취업 연계 네트워크가 잘 발달되어 있어 자격증 취득 후 취업 전환이 빠릅니다.</p>
            </section>
          </div>
        </div>
      </article>

      {/* 미용사(헤어) 자격증 */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">자격증 정보</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">미용사(헤어) 국가자격증</h2>
            <p className="text-stone-500 text-sm">한국산업인력공단이 시행하는 국가기술자격증으로, 헤어샵 취업·창업에 법적으로 필요합니다.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-stone-100 rounded-2xl p-5">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="bg-brand text-white text-xs px-2 py-0.5 rounded">필기</span> 이론 시험
              </h3>
              <ul className="text-sm text-stone-500 space-y-2">
                <li>• 60문항 / 객관식 4지선다 / 60분</li>
                <li>• 60점(36문항) 이상 합격</li>
                <li>• 출제 영역: 미용 이론, 모발학, 공중위생법규, 소독학</li>
                <li>• 참고 합격률: 약 50~65% (한국산업인력공단 기준)</li>
              </ul>
            </div>
            <div className="bg-white border border-stone-100 rounded-2xl p-5">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="bg-violet-500 text-white text-xs px-2 py-0.5 rounded">실기</span> 작업형 시험
              </h3>
              <ul className="text-sm text-stone-500 space-y-2">
                <li>• 커트·퍼머넌트·드라이 작업 평가</li>
                <li>• 60점 이상 합격 (감점 방식)</li>
                <li>• 위생 처리·작업 순서·완성도 포함</li>
                <li>• 참고 합격률: 약 45~60% (한국산업인력공단 기준)</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-xs text-amber-800">
            ⚠️ 시험 일정·응시료는 매년 변경될 수 있습니다. 반드시 <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="font-bold underline">큐넷(q-net.or.kr)</a>에서 최신 공고를 확인하세요.
          </div>
        </div>
      </section>

      {/* 헤어 커리큘럼 */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">교육과정</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">헤어 커리큘럼 단계별 안내</h2>
            <p className="text-stone-500 text-sm">입문부터 취업 연계까지 평균 4~10개월 과정입니다.</p>
          </header>
          <div className="space-y-4">
            {[
              { step: '01', level: '기초 과정', badge: '1~2개월', items: ['기초 두피·모발 이론', '샴푸·트리트먼트 기술', '기초 커트 (원랭스·세임레이어)', '헤어 위생 및 도구 관리'] },
              { step: '02', level: '자격증 과정', badge: '3~5개월', items: ['미용사(헤어) 필기 이론 집중', '커트 실기 (그라데이션·레이어)', '펌 실기 (롤링·세팅·스파이럴)', '염색 실기 (탈색·컬러링)', '모의 시험 반복 훈련'] },
              { step: '03', level: '심화·취업 과정', badge: '6~10개월', items: ['트렌드 커트·펌 심화', '업스타일 및 브라이덜 헤어', '포트폴리오 제작', '살롱 실습 및 취업 연계'] },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand text-white font-extrabold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                  <h3 className="font-bold text-stone-900">{item.level}</h3>
                  <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">{item.badge}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />{i}
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
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">헤어 자격증 취득 후 진로</h2>
            <p className="text-stone-500 text-sm">미용사(헤어) 자격증은 취업과 창업 두 경로 모두 가능합니다.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '✂️', title: '헤어살롱 취업', desc: '강남·청담 프리미엄 살롱부터 동네 헤어샵까지 폭넓은 취업처. 어시스턴트로 시작해 디자이너로 성장하는 경로가 일반적입니다.' },
              { icon: '🏪', title: '1인 헤어샵 창업', desc: '자격증 취득 후 1~3년 실무 경험을 쌓으면 소규모 창업이 가능합니다. 법적으로 자격증 보유자만 미용업 개업이 허용됩니다.' },
              { icon: '🎬', title: '방송·웨딩 헤어', desc: '방송 촬영장, 웨딩 스튜디오, 패션위크 등 전문 분야로 진출할 수 있습니다. 포트폴리오와 특화 기술이 중요합니다.' },
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
            <h2 className="text-2xl font-extrabold text-stone-900">강남 헤어학원 Q&A</h2>
            <p className="text-stone-500 text-sm mt-2">헤어 과정 수강 전 자주 묻는 질문을 정리했습니다.</p>
          </header>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: '미용사(헤어) 자격증이 없으면 헤어샵에서 일할 수 없나요?', a: '「공중위생관리법」 제6조에 따라 미용업을 영업 목적으로 수행하려면 국가자격증이 필요합니다. 보조 스태프로 단순 보조 업무는 가능하지만, 독립적으로 시술하거나 창업하려면 자격증이 필수입니다.' },
              { q: '강남 헤어학원은 다른 지역보다 무조건 좋은가요?', a: '지역보다 학원의 커리큘럼과 강사 역량이 더 중요합니다. 다만 강남 권역은 취업 네트워크가 발달해 있어, 자격증 취득 후 살롱 취업 연계 기회가 상대적으로 많은 것은 사실입니다.' },
              { q: '직장을 다니면서 헤어학원을 다닐 수 있나요?', a: '대부분의 강남 헤어학원이 평일 야간반(오후 6~9시)과 주말반을 운영합니다. 다만 실기 준비 시간이 줄어들어 자격증 취득까지 더 오래 걸릴 수 있으므로 시험 전 별도 연습 시간 확보가 중요합니다.' },
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
      <section className="py-20 bg-gradient-to-r from-blue-800 to-violet-900 text-white text-center">
        <div className="max-w-[700px] mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 leading-tight">강남 헤어학원<br />무료 상담 신청</h2>
          <p className="text-white/70 mb-8 text-base leading-relaxed">자격증 과정, 커리큘럼, 취업 연계까지<br />나에게 맞는 헤어 과정을 안내받으세요.</p>
          <a href="/#form" className="inline-block bg-white text-brand font-bold text-base px-8 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition-all">무료 상담 신청하기 →</a>
        </div>
      </section>
    </>
  )
}
