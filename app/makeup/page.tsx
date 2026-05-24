import type { Metadata } from 'next'
import Script from 'next/script'
import FormSection from '../test/FormSection'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '강남 메이크업학원은 국가자격증이 없어도 취업이 되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '메이크업 분야는 현재 국가기술자격증 법적 의무가 없어 자격증 없이도 취업과 영업이 가능합니다. 대신 포트폴리오, 전문 수료증, 실무 경력이 채용 과정에서 핵심 경쟁력이 됩니다.' },
    },
    {
      '@type': 'Question',
      name: '강남 메이크업학원 수료 후 바로 취업이 가능한가요?',
      acceptedAnswer: { '@type': 'Answer', text: '수료 후 바로 웨딩샵·방송 보조 스태프로 취업하는 경우가 많습니다. 다만 독립적으로 메인 아티스트가 되려면 보조 경력 6개월~2년이 일반적으로 필요합니다.' },
    },
    {
      '@type': 'Question',
      name: '강남 메이크업학원에서 포트폴리오 제작을 지원해주나요?',
      acceptedAnswer: { '@type': 'Answer', text: '메이크업은 자격증보다 실력을 직접 보여주는 포트폴리오가 채용 기준이 됩니다. 학원에서 포트폴리오 사진 촬영을 지원하는지 확인하고, 다양한 스타일의 작품을 꾸준히 쌓는 것이 중요합니다.' },
    },
  ],
}

export const metadata: Metadata = {
  title: '강남 메이크업학원 | 수강료·커리큘럼 2026',
  description: '강남 메이크업학원 정보 총정리. 강남미용학원 메이크업 과정의 커리큘럼, 포트폴리오, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
  alternates: { canonical: '/makeup' },
  keywords: ['강남 메이크업학원', '강남미용학원 메이크업', '메이크업아티스트 학원', '웨딩 메이크업 학원', '방송 메이크업 학원'],
  openGraph: {
    title: '강남 메이크업학원 | 수강료·커리큘럼 2026',
    description: '강남미용학원 메이크업 과정의 커리큘럼, 포트폴리오 제작, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
    url: '/makeup',
    type: 'article',
    images: [{ url: '/images/thumb.webp', width: 1200, height: 630, alt: '강남 메이크업학원 가이드' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강남 메이크업학원 | 수강료·커리큘럼 2026',
    description: '강남미용학원 메이크업 과정의 커리큘럼, 포트폴리오 제작, 취업 전망까지.',
    images: ['/images/thumb.webp'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://gangnam-beauty.com' },
    { '@type': 'ListItem', position: 2, name: '강남 메이크업학원', item: 'https://gangnam-beauty.com/makeup' },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '강남 메이크업학원 | 수강료·커리큘럼 2026',
  description: '강남 메이크업학원 정보 총정리. 강남미용학원 메이크업 과정의 커리큘럼, 포트폴리오 제작, 취업 전망까지 2026년 최신 기준으로 안내합니다.',
  datePublished: '2026-01-01',
  dateModified: '2026-05-24',
  author: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
  publisher: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
}

export default function MakeupPage() {
  return (
    <>
      <Script id="makeup-faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} strategy="beforeInteractive" />
      <Script id="makeup-breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} strategy="beforeInteractive" />
      <Script id="makeup-article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} strategy="beforeInteractive" />
      {/* 히어로 */}
      <section className="relative py-28 border-b border-stone-200 overflow-hidden flex items-center bg-gradient-to-br from-rose-900 via-pink-800 to-violet-900">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-[1100px] mx-auto px-4 text-center">
          <p className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">2026 최신 기준</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            강남 메이크업학원<br />
            <span className="text-pink-200">웨딩·방송 메이크업 수강료 가이드</span>
          </h1>
          <p className="text-base text-white/70 mb-4 max-w-xl mx-auto leading-relaxed">
            웨딩·방송·패션 메이크업 전문 과정부터 프리랜서 활동까지, 강남 메이크업학원 선택에 필요한 정보를 정리했습니다.
          </p>
          <div className="relative mt-10 w-full text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">강남 메이크업학원 무료 상담 👇</span>
            </div>
            <FormSection />
          </div>
        </div>
      </section>

      {/* 강남 메이크업학원이란? */}
      <article className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">메이크업학원 소개</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">강남 메이크업학원이란?</h2>
            <p className="text-stone-500 leading-relaxed max-w-3xl">
              강남 메이크업학원은 웨딩·방송·패션·무대 메이크업 전문 기술 교육을 제공하는 학원입니다. 메이크업 분야는 현재 국가기술자격증 의무가 없어 포트폴리오와 전문 수료증이 취업 경쟁력의 핵심입니다.
            </p>
          </header>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6 flex gap-3">
            <span className="text-lg shrink-0">ℹ️</span>
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>메이크업 국가자격증 안내:</strong> 메이크업 분야는 현재 미용사 국가기술자격증이 존재하지 않습니다. 한국직업능력개발원 등록 민간자격증이 다수 운영 중이며, 법적 자격 요건 없이 영업이 가능합니다. 대신 <strong>포트폴리오와 수료증</strong>이 채용 과정에서 경쟁력으로 작용합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="bg-rose-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">💄 다양한 메이크업 스타일</h3>
              <p className="text-sm text-stone-500 leading-relaxed">데일리·웨딩·무대·방송·패션위크 등 다양한 장르의 메이크업 기술을 배웁니다.</p>
            </section>
            <section className="bg-rose-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">📸 포트폴리오 제작</h3>
              <p className="text-sm text-stone-500 leading-relaxed">포트폴리오 사진 촬영을 지원하는 학원을 선택하면 취업 이력서 경쟁력이 크게 높아집니다.</p>
            </section>
            <section className="bg-rose-50 rounded-2xl p-6">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">💼 웨딩·방송 취업 연계</h3>
              <p className="text-sm text-stone-500 leading-relaxed">강남 권역 웨딩샵·방송사·패션 에이전시와의 네트워크를 통한 취업 연계 기회가 있습니다.</p>
            </section>
          </div>
        </div>
      </article>

      {/* 메이크업 커리큘럼 */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">교육과정</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">메이크업 커리큘럼 단계별 안내</h2>
            <p className="text-stone-500 text-sm">입문부터 취업 연계까지 평균 3~12개월 과정입니다.</p>
          </header>
          <div className="space-y-4">
            {[
              { step: '01', level: '기초 과정', badge: '1~2개월', items: ['메이크업 기초 이론·도구', '데일리 메이크업', '베이스·컨실러 기법', '눈·입술 기초 메이크업'] },
              { step: '02', level: '전문 과정', badge: '3~6개월', items: ['웨딩 메이크업', '무대·행사 메이크업', '포토그래픽 메이크업', '미디어·방송 메이크업', '포트폴리오 제작'] },
              { step: '03', level: '마스터 과정', badge: '6~12개월', items: ['특수 분장·캐릭터 메이크업', '패션위크 트렌드 메이크업', '포트폴리오 아카이빙', '프리랜서 에이전시 연결'] },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand text-white font-extrabold text-sm flex items-center justify-center shrink-0">{item.step}</div>
                  <h3 className="font-bold text-stone-900">{item.level}</h3>
                  <span className="text-xs font-bold bg-rose-100 text-rose-700 px-2.5 py-1 rounded-full">{item.badge}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 취업 전망 */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">진로 & 취업</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">메이크업 과정 수료 후 진로</h2>
            <p className="text-stone-500 text-sm">포트폴리오와 전문성이 취업의 핵심 경쟁력입니다.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '💍', title: '웨딩 메이크업', desc: '웨딩홀·사진관·웨딩 스튜디오에서 신부 메이크업을 담당합니다. 보조로 시작해 수석 아티스트로 성장하는 경로가 일반적입니다.' },
              { icon: '🎬', title: '방송·미디어', desc: '방송국, 광고 촬영, 유튜브 크리에이터 지원 등 미디어 분야에서 메이크업 아티스트로 활동할 수 있습니다.' },
              { icon: '🎨', title: '프리랜서 활동', desc: '일정 경력을 쌓은 후 프리랜서로 독립하는 경우가 많습니다. SNS 기반 포트폴리오 운영이 중요한 경쟁력이 됩니다.' },
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
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="text-center mb-10">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">자주 묻는 질문</p>
            <h2 className="text-2xl font-extrabold text-stone-900">강남 메이크업학원 Q&A</h2>
            <p className="text-stone-500 text-sm mt-2">메이크업 과정 수강 전 자주 묻는 질문을 정리했습니다.</p>
          </header>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: '메이크업은 국가자격증이 없어도 취업이 되나요?', a: '메이크업 분야는 현재 국가기술자격증 법적 의무가 없어 자격증 없이도 취업과 영업이 가능합니다. 대신 포트폴리오, 전문 수료증, 실무 경력이 채용 과정에서 핵심 경쟁력이 됩니다.' },
              { q: '메이크업 학원 수료 후 바로 취업이 가능한가요?', a: '수료 후 바로 웨딩샵·방송 보조 스태프로 취업하는 경우가 많습니다. 다만 독립적으로 메인 아티스트가 되려면 보조 경력 6개월~2년이 일반적으로 필요합니다.' },
              { q: '포트폴리오가 왜 중요한가요?', a: '메이크업은 자격증보다 실력을 직접 보여주는 포트폴리오가 채용 기준이 됩니다. 학원에서 포트폴리오 사진 촬영을 지원하는지 확인하고, 다양한 스타일의 작품을 꾸준히 쌓는 것이 중요합니다.' },
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
      <section className="py-20 bg-gradient-to-r from-rose-800 to-violet-900 text-white text-center">
        <div className="max-w-[700px] mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 leading-tight">강남 메이크업학원<br />무료 상담 신청</h2>
          <p className="text-white/70 mb-8 text-base leading-relaxed">커리큘럼, 포트폴리오 지원, 취업 연계까지<br />나에게 맞는 메이크업 과정을 안내받으세요.</p>
          <a href="/#form" className="inline-block bg-white text-brand font-bold text-base px-8 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition-all">무료 상담 신청하기 →</a>
        </div>
      </section>
    </>
  )
}
