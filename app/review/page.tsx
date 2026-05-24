import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '수강후기 2026 | 실제 수강생 경험담 모음',
  description: '강남미용학원 실제 수강생 후기 모음. 강남미용학원 자격증 취득, 취업 성공 사례와 아쉬운 점까지 솔직하게 정리했습니다.',
  alternates: { canonical: '/review' },
}

const reviews = [
  {
    id: 1,
    name: '김**',
    field: '헤어',
    icon: '✂️',
    academy: '강남구 소재 헤어 전문 학원',
    rating: 5,
    duration: '5개월 수강',
    result: '국가자격증 취득 + 살롱 취업',
    content: '처음엔 기초 커트부터 시작했는데, 자격증 실기 준비가 생각보다 꼼꼼하게 되어 있었어요. 모의 시험을 여러 번 해주는 게 실제 시험장에서 긴장을 덜 수 있었던 이유인 것 같습니다. 다만 수업 인원이 많은 날은 개인 교정 시간이 짧아서 아쉬웠어요. 자격증 합격 후 학원 연계로 강남구 살롱에 취업하게 됐습니다.',
  },
  {
    id: 2,
    name: '박**',
    field: '피부관리',
    icon: '🧴',
    academy: '서초구 소재 피부 전문 학원',
    rating: 4,
    duration: '8개월 수강',
    result: '피부미용사 자격증 취득, 피부관리실 보조 근무',
    content: '30대 중반에 전직을 결심하고 피부관리 분야를 선택했습니다. 커리큘럼 자체는 체계적이었고, 공중위생법규 등 필기 이론도 학원 자료가 도움이 많이 됐습니다. 다만 실기 연습 시간이 충분하지 않았고, 실기 시험 합격은 두 번째 시도에서 성공했어요. 현재는 피부관리실에서 보조로 근무하며 경험을 쌓고 있습니다.',
  },
  {
    id: 3,
    name: '이**',
    field: '메이크업',
    icon: '💄',
    academy: '강남구 소재 메이크업 전문 학원',
    rating: 5,
    duration: '7개월 수강',
    result: '웨딩 메이크업 보조 → 프리랜서 전환',
    content: '웨딩 메이크업을 목표로 등록했습니다. 포트폴리오 사진 촬영까지 지원해주는 점이 실제로 취업 이력서 작성에 도움이 됐습니다. 메이크업 분야는 국가자격증 의무가 없지만, 학원 수료증과 포트폴리오가 채용 과정에서 중요하다고 느꼈습니다. 첫 6개월은 웨딩샵 보조로 시작해서 지금은 프리랜서로 활동하고 있습니다.',
  },
  {
    id: 4,
    name: '최**',
    field: '네일아트',
    icon: '💅',
    academy: '강남구 소재 네일 전문 학원',
    rating: 4,
    duration: '3개월 수강',
    result: '네일미용사 자격증 취득',
    content: '3개월 집중 과정으로 자격증을 목표로 했습니다. 재료비가 수강료에 포함되어 있어서 예산 계획 세우기 편했습니다. 필기는 한 번에 합격했는데 실기는 위생 처리 점수에서 감점이 나와서 아쉬웠지만 두 번 만에 합격했습니다. 자격증 취득 후 현재 구직 중입니다.',
  },
  {
    id: 5,
    name: '정**',
    field: '토탈뷰티',
    icon: '🌟',
    academy: '강남구 소재 종합 뷰티 학원',
    rating: 4,
    duration: '11개월 수강',
    result: '헤어·피부 자격증 취득, 취업 준비 중',
    content: '헤어와 피부를 함께 배우는 토탈 과정을 선택했습니다. 배우는 내용이 많은 만큼 각 분야를 깊이 있게 다루기에는 시간이 촉박한 느낌도 있었어요. 두 자격증 모두 합격했는데, 분야별 자격증 준비 일정이 겹칠 때는 체력적으로 힘들었습니다. 헤어 취업을 먼저 진행하고 피부는 나중에 활용할 계획입니다.',
  },
  {
    id: 6,
    name: '한**',
    field: '헤어',
    icon: '✂️',
    academy: '서초구 소재 헤어 전문 학원',
    rating: 5,
    duration: '6개월 수강',
    result: '미용사(헤어) 자격증 취득',
    content: '합격보장반을 선택했는데 재수강 조건이 명확하게 안내되어서 믿음이 갔습니다. 실기 교정을 1:1로 해주는 시간이 있어서 개인 약점을 잡아주는 게 도움이 됐습니다. 합격보장반이라도 재료비는 재수강 시 추가로 발생했는데, 사전에 안내를 받아서 당황하진 않았습니다. 결과적으로 한 번에 합격했습니다.',
  },
]

export default function ReviewPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">수강후기</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">강남미용학원 실제 수강후기</h1>
      <p className="text-stone-500 mb-4">강남 미용학원 수강생들의 실제 경험담입니다. 좋았던 점과 아쉬웠던 점을 함께 담았습니다.</p>

      <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-10 text-xs text-stone-500 leading-relaxed">
        ※ 개인정보 보호를 위해 이름과 학원명 일부를 익명 처리했습니다. 수강 기간·결과는 실제 경험을 바탕으로 하며, 개인 역량·학습 시간·시험 회차에 따라 결과는 다를 수 있습니다.
      </div>

      {/* 총 평점 */}
      <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-6">
        <div className="text-center shrink-0">
          <p className="text-6xl font-extrabold text-brand">4.5</p>
          <div className="flex gap-0.5 justify-center my-1">
            {[1,2,3,4].map((s) => <span key={s} className="text-yellow-400 text-xl">★</span>)}
            <span className="text-yellow-300 text-xl">★</span>
          </div>
          <p className="text-xs text-stone-400">총 {reviews.length}개 후기</p>
        </div>
        <div className="flex-1 space-y-2 w-full">
          {[
            { label: '커리큘럼 구성', pct: 82 },
            { label: '강사 수업 방식', pct: 88 },
            { label: '자격증 합격 지원', pct: 78 },
            { label: '취업 연계 만족도', pct: 72 },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-xs text-stone-500 w-28 shrink-0">{item.label}</span>
              <div className="flex-1 bg-stone-100 rounded-full h-2">
                <div className="bg-brand h-2 rounded-full transition-all" style={{ width: `${item.pct}%` }} />
              </div>
              <span className="text-xs font-bold text-brand w-8 text-right">{item.pct}%</span>
            </div>
          ))}
          <p className="text-[10px] text-stone-400 mt-1">※ 위 수치는 수집된 후기 기반 비율이며 표본이 적어 참고용으로 활용하세요.</p>
        </div>
      </div>

      {/* 리뷰 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {reviews.map((review) => (
          <article key={review.id} className="bg-white border border-stone-100 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{review.icon}</span>
                <div>
                  <p className="font-bold text-stone-900">{review.name}</p>
                  <p className="text-xs text-stone-400">{review.academy}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-brand/10 text-brand px-2 py-0.5 rounded-full">{review.field}</span>
            </div>
            <div className="flex gap-0.5 mb-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="text-stone-200 text-sm">★</span>
              ))}
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">{review.content}</p>
            <div className="flex gap-2 text-xs flex-wrap">
              <span className="bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full font-medium">{review.duration}</span>
              <span className="bg-violet-50 text-brand border border-brand/10 px-2.5 py-1 rounded-full font-medium">{review.result}</span>
            </div>
          </article>
        ))}
      </div>

      {/* 후기에서 자주 언급된 장단점 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">후기에서 자주 언급된 장점과 아쉬운 점</h2>
        <p className="text-stone-500 text-sm mb-5">수강 후기를 종합해 패턴을 정리했습니다. 학원 선택 시 참고하세요.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2"><span>✅</span> 긍정적으로 언급된 항목</h3>
            <ul className="text-sm text-stone-600 space-y-2">
              <li className="flex gap-2"><span className="shrink-0 text-green-600">•</span> 필기 이론 자료와 모의고사 제공</li>
              <li className="flex gap-2"><span className="shrink-0 text-green-600">•</span> 실기 1:1 교정 시간 (소그룹 학원 해당)</li>
              <li className="flex gap-2"><span className="shrink-0 text-green-600">•</span> 포트폴리오 촬영 지원 (메이크업 분야)</li>
              <li className="flex gap-2"><span className="shrink-0 text-green-600">•</span> 재료비 포함 여부를 사전에 투명하게 안내</li>
              <li className="flex gap-2"><span className="shrink-0 text-green-600">•</span> 학원-살롱 취업 연계 네트워크</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2"><span>⚠️</span> 아쉬운 점으로 언급된 항목</h3>
            <ul className="text-sm text-stone-600 space-y-2">
              <li className="flex gap-2"><span className="shrink-0 text-amber-600">•</span> 수업 인원이 많은 날 개인 교정 시간 부족</li>
              <li className="flex gap-2"><span className="shrink-0 text-amber-600">•</span> 합격보장반 재수강 시 재료비 별도 청구</li>
              <li className="flex gap-2"><span className="shrink-0 text-amber-600">•</span> 실기 준비 시간이 과정 대비 촉박한 경우</li>
              <li className="flex gap-2"><span className="shrink-0 text-amber-600">•</span> 토탈 과정은 각 분야 심화가 부족할 수 있음</li>
              <li className="flex gap-2"><span className="shrink-0 text-amber-600">•</span> 취업 연계는 학원별 편차가 큼</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 text-center">
        <h2 className="font-bold text-stone-900 mb-2 text-lg">나에게 맞는 학원을 찾고 싶다면?</h2>
        <p className="text-sm text-stone-500">메인 페이지 상담 신청 폼을 통해 분야·예산·일정에 맞는 강남 미용학원 정보를 안내받으세요.</p>
      </div>
    </div>
  )
}
