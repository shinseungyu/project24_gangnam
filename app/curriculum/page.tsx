import type { Metadata } from 'next'
import Script from 'next/script'
import FormSection from '../test/FormSection'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://gangnam-beauty.com' },
    { '@type': 'ListItem', position: 2, name: '미용학원 커리큘럼', item: 'https://gangnam-beauty.com/curriculum' },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '강남미용학원 커리큘럼 | 헤어·피부·메이크업·네일',
  description: '강남미용학원 커리큘럼을 헤어·피부·메이크업·네일 분야별로 정리했습니다. 강남미용학원 단계별 교육과정과 취득 가능한 자격증까지 2026년 기준으로 확인하세요.',
  datePublished: '2026-01-01',
  dateModified: '2026-05-24',
  author: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
  publisher: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
}

export const metadata: Metadata = {
  title: '강남미용학원 커리큘럼 | 헤어·피부·메이크업·네일',
  description: '강남미용학원 커리큘럼을 헤어·피부·메이크업·네일 분야별로 정리했습니다. 강남미용학원 단계별 교육과정과 취득 가능한 자격증까지 2026년 기준으로 확인하세요.',
  alternates: { canonical: '/curriculum' },
}

export default function CurriculumPage() {
  return (
    <>
      <Script id="curriculum-breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} strategy="beforeInteractive" />
      <Script id="curriculum-article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} strategy="beforeInteractive" />
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">커리큘럼 가이드</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">강남미용학원 커리큘럼 완벽 가이드</h1>
      <p className="text-stone-500 mb-8">강남 미용학원의 분야별 교육과정을 단계별로 정리했습니다. 입문부터 전문가 과정까지 나에게 맞는 커리큘럼을 확인해보세요.</p>

      <div className="mb-14 animate-fade-in-up">
        <div className="flex justify-start mb-3">
          <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">커리큘럼 무료 상담 👇</span>
        </div>
        <FormSection />
      </div>

      {/* 헤어 커리큘럼 */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">✂️</span>
          <h2 className="text-xl font-bold text-stone-900">헤어 커리큘럼</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              level: '기초 과정',
              badge: '1~2개월',
              badgeColor: 'bg-green-100 text-green-700',
              items: ['기초 두피·모발 이론', '샴푸·트리트먼트 기술', '기초 커트 (원랭스·세임레이어)', '헤어 위생 및 안전 교육'],
            },
            {
              level: '자격증 과정',
              badge: '3~5개월',
              badgeColor: 'bg-blue-100 text-blue-700',
              items: ['국가미용사(헤어) 자격증 이론', '커트 실기 (그라데이션·레이어·원랭스)', '펌 실기 (롤링·세팅·스파이럴)', '염색 실기 (탈색·컬러링)', '업스타일 기초'],
            },
            {
              level: '심화·취업 과정',
              badge: '6~10개월',
              badgeColor: 'bg-violet-100 text-violet-700',
              items: ['트렌드 커트·펌 심화', '미디어·셀러브리티 헤어 테크닉', '모발 교정·케어 전문', '포트폴리오 제작 및 살롱 실습', '취업 연계 인터뷰 준비'],
            },
          ].map((level) => (
            <div key={level.level} className="bg-white border border-stone-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-stone-900">{level.level}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${level.badgeColor}`}>{level.badge}</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {level.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 피부 커리큘럼 */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🧴</span>
          <h2 className="text-xl font-bold text-stone-900">피부관리 커리큘럼</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              level: '기초 과정',
              badge: '2~3개월',
              badgeColor: 'bg-green-100 text-green-700',
              items: ['피부과학 기초 이론', '클렌징·스킨케어 기법', '기초 마사지 기술', '피부 유형 분석 및 관리'],
            },
            {
              level: '자격증 과정',
              badge: '4~8개월',
              badgeColor: 'bg-blue-100 text-blue-700',
              items: ['국가피부미용사 자격증 이론', '얼굴 피부관리 실기', '몸 피부관리 실기', '림프 드레이니지', '눈썹·속눈썹 관리'],
            },
            {
              level: '에스테틱 심화',
              badge: '6~12개월',
              badgeColor: 'bg-violet-100 text-violet-700',
              items: ['고주파·초음파 기기 관리', 'LED 피부 치료', '피부 트러블 케어', '한방 피부관리', '창업 실무 및 고객 관리'],
            },
          ].map((level) => (
            <div key={level.level} className="bg-white border border-stone-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-stone-900">{level.level}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${level.badgeColor}`}>{level.badge}</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {level.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 메이크업 커리큘럼 */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💄</span>
          <h2 className="text-xl font-bold text-stone-900">메이크업 커리큘럼</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              level: '기초 과정',
              badge: '1~2개월',
              badgeColor: 'bg-green-100 text-green-700',
              items: ['메이크업 기초 이론·도구', '데일리 메이크업', '베이스·컨실러 기법', '눈·입술 기초 메이크업'],
            },
            {
              level: '전문 과정',
              badge: '3~6개월',
              badgeColor: 'bg-rose-100 text-rose-700',
              items: ['웨딩 메이크업', '무대·행사 메이크업', '포토그래픽 메이크업', '미디어·방송 메이크업', '헤어·메이크업 통합'],
            },
            {
              level: '마스터 과정',
              badge: '6~12개월',
              badgeColor: 'bg-violet-100 text-violet-700',
              items: ['특수 분장·캐릭터 메이크업', '패션위크 트렌드 메이크업', '포트폴리오 촬영 및 아카이빙', '프리랜서 에이전시 연결', '자체 브랜드 창업 지원'],
            },
          ].map((level) => (
            <div key={level.level} className="bg-white border border-stone-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-stone-900">{level.level}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${level.badgeColor}`}>{level.badge}</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {level.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 네일 커리큘럼 */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💅</span>
          <h2 className="text-xl font-bold text-stone-900">네일아트 커리큘럼</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              level: '기초 과정',
              badge: '1개월',
              badgeColor: 'bg-amber-100 text-amber-700',
              items: ['네일 기초 이론·위생', '젤네일 기초 (단색·프렌치)', '손톱 파일링·큐티클 관리', '간단한 아트 기법'],
            },
            {
              level: '자격증 과정',
              badge: '2~4개월',
              badgeColor: 'bg-orange-100 text-orange-700',
              items: ['국가네일미용사 자격증 이론', '젤네일 실기 심화', '아크릴 연장 기법', '네일아트 (마블링·그라데이션)', '팁·랩 시술'],
            },
            {
              level: '창업·취업 과정',
              badge: '3~6개월',
              badgeColor: 'bg-violet-100 text-violet-700',
              items: ['고급 3D 네일아트', '풋 케어·페디큐어', '네일샵 창업 실무', '고객 관리 및 SNS 마케팅', '프리랜서 네일리스트 활동'],
            },
          ].map((level) => (
            <div key={level.level} className="bg-white border border-stone-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold text-stone-900">{level.level}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${level.badgeColor}`}>{level.badge}</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {level.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 text-center">
        <h2 className="font-bold text-stone-900 mb-2 text-lg">내 목적에 맞는 커리큘럼이 궁금하다면?</h2>
        <p className="text-sm text-stone-500">위 상담 신청 폼을 통해 전문 상담사에게 최적 커리큘럼을 추천받으세요.</p>
      </div>
    </div>
    </>
  )
}
