'use client'

import { useState } from 'react'

const tabs = [
  {
    id: 'hair',
    label: '✂️ 헤어',
    color: 'blue',
    href: '/hair',
    linkLabel: '헤어학원 자세히 보기 →',
    title: '강남 헤어학원 · 미용사(헤어) 자격증',
    subtitle: '국가자격증 취득부터 헤어살롱 취업·창업까지 체계적으로 준비할 수 있습니다.',
    cards: [
      { icon: '🎓', title: '국가자격증 필수', desc: '미용사(헤어) 국가기술자격증은 헤어샵 취업·창업에 법적으로 필요합니다. 한국산업인력공단이 시행합니다.' },
      { icon: '📚', title: '커리큘럼 4~8개월', desc: '기초 커트부터 퍼머·염색·드라이까지 단계별로 익힙니다. 필기·실기 모의시험으로 합격률을 높입니다.' },
      { icon: '✂️', title: '실기 감점 포인트', desc: '커트선 불균일, 로드 배열 오류, 위생 처리 미흡이 주요 감점 항목입니다. 반복 연습이 핵심입니다.' },
      { icon: '💼', title: '헤어살롱·창업 진로', desc: '강남 권역 헤어살롱 취업, 프리랜서 헤어 디자이너, 1인 헤어샵 창업 등 다양한 진로를 선택할 수 있습니다.' },
    ],
  },
  {
    id: 'skin',
    label: '🧴 피부',
    color: 'emerald',
    href: '/skin',
    linkLabel: '피부학원 자세히 보기 →',
    title: '강남 피부미용학원 · 미용사(피부) 자격증',
    subtitle: '에스테틱 전문 기술과 피부미용사 국가자격증을 함께 준비할 수 있습니다.',
    cards: [
      { icon: '🎓', title: '국가자격증 필수', desc: '미용사(피부) 국가기술자격증이 있어야 에스테틱·피부관리실 창업·취업이 가능합니다.' },
      { icon: '📚', title: '커리큘럼 5~10개월', desc: '클렌징·각질·마사지·팩부터 전문 기기 관리까지 체계적으로 학습합니다. 실기 비중이 높습니다.' },
      { icon: '🔬', title: '전문 기기 교육', desc: '초음파·갈바닉·고주파·LED 기기 사용법을 실습합니다. 기기 종류에 따라 추가 교육 이수가 필요할 수 있습니다.' },
      { icon: '💼', title: '에스테틱·피부관리실', desc: '강남 에스테틱 샵, 피부과 보조, 호텔 스파, 1인 피부관리실 창업 등 다양한 진로를 선택할 수 있습니다.' },
    ],
  },
  {
    id: 'makeup',
    label: '💄 메이크업',
    color: 'rose',
    href: '/makeup',
    linkLabel: '메이크업학원 자세히 보기 →',
    title: '강남 메이크업학원 · 웨딩·방송 메이크업',
    subtitle: '포트폴리오 중심 교육으로 웨딩·방송·패션 메이크업 아티스트를 준비합니다.',
    cards: [
      { icon: 'ℹ️', title: '국가자격증 없음', desc: '메이크업은 현재 국가기술자격증이 없습니다. 대신 포트폴리오와 수료증이 취업 경쟁력으로 작용합니다.' },
      { icon: '📚', title: '커리큘럼 3~12개월', desc: '데일리부터 웨딩·방송·특수분장까지 단계별로 배웁니다. 포트폴리오 촬영 지원 여부를 꼭 확인하세요.' },
      { icon: '📸', title: '포트폴리오가 핵심', desc: '다양한 스타일의 작업물을 사진으로 아카이빙합니다. 촬영 지원을 해주는 학원을 선택하면 경쟁력이 높아집니다.' },
      { icon: '💼', title: '웨딩·방송·프리랜서', desc: '웨딩샵 메이크업 아티스트, 방송국·광고 스태프, SNS 기반 프리랜서 등으로 활동할 수 있습니다.' },
    ],
  },
  {
    id: 'nail',
    label: '💅 네일',
    color: 'amber',
    href: '/nail',
    linkLabel: '네일학원 자세히 보기 →',
    title: '강남 네일학원 · 미용사(네일) 자격증',
    subtitle: '미용사 3개 분야 중 준비 기간이 가장 짧아 직장인·전직 준비생에게 인기입니다.',
    cards: [
      { icon: '🎓', title: '단기 자격증 취득', desc: '풀타임 기준 2~4개월이면 미용사(네일) 국가자격증 취득이 가능합니다. 미용사 분야 중 준비 기간이 가장 짧습니다.' },
      { icon: '📚', title: '커리큘럼 2~6개월', desc: '젤네일·아크릴 연장·네일아트부터 창업 실무까지 단계별로 배웁니다. 실기 반복 훈련이 합격률을 좌우합니다.' },
      { icon: '⚠️', title: '실기 감점 주의사항', desc: '위생 처리 미흡, 큐티클 자극, 젤 두께 불균일, 시간 초과가 주요 감점 원인입니다. 도구 압력 조절이 핵심입니다.' },
      { icon: '🏪', title: '네일샵·1인 창업', desc: '네일샵 취업, 1인 네일샵 창업, 방문 네일 프리랜서 등 다양한 형태로 활동할 수 있습니다.' },
    ],
  },
]

const colorMap: Record<string, { tab: string; activeTab: string; text: string; border: string; bg: string; sectionBg: string }> = {
  blue:    { tab: 'text-blue-600 border-blue-600',    activeTab: 'bg-blue-600 text-white border-blue-600',    text: 'text-blue-600',    border: 'border-blue-100',    bg: 'bg-blue-50',    sectionBg: 'bg-blue-50' },
  emerald: { tab: 'text-emerald-600 border-emerald-600', activeTab: 'bg-emerald-600 text-white border-emerald-600', text: 'text-emerald-600', border: 'border-emerald-100', bg: 'bg-emerald-50', sectionBg: 'bg-emerald-50' },
  rose:    { tab: 'text-rose-600 border-rose-600',    activeTab: 'bg-rose-600 text-white border-rose-600',    text: 'text-rose-600',    border: 'border-rose-100',    bg: 'bg-rose-50',    sectionBg: 'bg-rose-50' },
  amber:   { tab: 'text-amber-600 border-amber-600',  activeTab: 'bg-amber-600 text-white border-amber-600',  text: 'text-amber-600',  border: 'border-amber-100',  bg: 'bg-amber-50',  sectionBg: 'bg-amber-50' },
}

export default function FieldTabs() {
  const [active, setActive] = useState('hair')
  const current = tabs.find((t) => t.id === active)!
  const c = colorMap[current.color]

  return (
    <section className={`py-16 ${c.sectionBg} border-b border-stone-100`}>
      <div className="max-w-[1100px] mx-auto px-4">
        <header className="text-center mb-8">
          <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">분야별 안내</p>
          <h2 className="text-2xl font-extrabold text-stone-900">강남미용학원 분야별 안내</h2>
          <p className="text-stone-500 text-sm mt-2">헤어·피부·메이크업·네일 분야별 자격증 정보, 커리큘럼, 취업 진로를 한눈에 비교해보세요. 탭을 눌러 관심 분야를 먼저 확인하세요.</p>
        </header>

        {/* 탭 버튼 */}
        <div className="flex gap-2 mb-8 flex-wrap justify-center">
          {tabs.map((tab) => {
            const isActive = tab.id === active
            const tc = colorMap[tab.color]
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all ${
                  isActive ? tc.activeTab : `bg-white ${tc.tab} hover:opacity-80`
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* 탭 콘텐츠 */}
        <div>
          <header className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold text-stone-900 mb-2">{current.title}</h3>
              <p className="text-stone-500 text-sm">{current.subtitle}</p>
            </div>
            <a href={current.href} className={`shrink-0 text-sm font-semibold ${c.text} hover:opacity-70 transition-colors whitespace-nowrap`}>
              {current.linkLabel}
            </a>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {current.cards.map((card) => (
              <a key={card.title} href={current.href} className={`bg-white ${c.border} border rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all block`}>
                <span className="text-2xl block mb-3">{card.icon}</span>
                <h4 className="font-bold text-stone-900 mb-2 text-sm">{card.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{card.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
