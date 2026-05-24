import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '사이트 소개 | 강남미용학원 비교',
  description: '강남미용학원 비교 사이트의 운영 주체, 정보 작성 기준, 광고 관계를 투명하게 안내합니다.',
  alternates: { canonical: '/about' },
  robots: { index: true, follow: true },
}

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">사이트 소개</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">이 사이트에 대해</h1>
      <p className="text-stone-500 mb-10 leading-relaxed">강남미용학원 비교 사이트의 운영 목적, 정보 작성 기준, 광고 관계를 투명하게 안내합니다.</p>

      <div className="space-y-8">

        {/* 콘텐츠 검토 전문가 */}
        <section className="bg-violet-50 border border-violet-100 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-stone-900 mb-4">콘텐츠 검토 전문가</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 bg-white rounded-xl p-5 border border-violet-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-lg shrink-0">✂️</div>
                <div>
                  <p className="font-bold text-stone-900 text-sm">헤어·피부 분야 자문</p>
                  <p className="text-xs text-stone-400">미용사(헤어·피부) 국가자격증 보유 · 현직 살롱 운영 10년+</p>
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                강남구 소재 헤어살롱을 직접 운영하며 수강생 멘토링을 병행하고 있습니다. 자격증 시험 트렌드, 실기 감점 포인트, 학원 선택 기준에 대한 실무 경험을 바탕으로 콘텐츠를 검토합니다.
              </p>
            </div>
            <div className="flex-1 bg-white rounded-xl p-5 border border-violet-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-lg shrink-0">💄</div>
                <div>
                  <p className="font-bold text-stone-900 text-sm">메이크업·네일 분야 자문</p>
                  <p className="text-xs text-stone-400">웨딩·방송 메이크업 아티스트 · 미용사(네일) 자격증 보유</p>
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">
                웨딩·방송 현장에서 10년 이상 활동한 메이크업 아티스트입니다. 포트폴리오 구성, 프리랜서 전환 노하우, 학원별 커리큘럼 차이에 대한 현장 경험을 콘텐츠에 반영합니다.
              </p>
            </div>
          </div>
          <p className="text-[11px] text-stone-400 mt-4">※ 자격증·합격률 등 수치 정보는 한국산업인력공단(q-net.or.kr) 공식 자료를 1차 출처로 하며, 전문가 검토를 거쳐 최종 게재합니다.</p>
        </section>

        {/* 운영 목적 */}
        <section className="bg-white border border-stone-100 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-stone-900 mb-3">운영 목적</h2>
          <p className="text-sm text-stone-500 leading-relaxed">
            이 사이트는 미용 분야 진로를 고려하는 분들이 강남 권역 미용학원에 대한 정보를 수집하고 상담을 받을 수 있도록 안내하기 위해 운영됩니다.
            헤어·피부·메이크업·네일 분야의 국가자격증 정보, 커리큘럼 가이드, 수강생 후기, 자주 묻는 질문을 제공하며,
            방문자가 자신에게 맞는 학원과 과정을 선택하는 데 실질적인 도움이 되는 것을 목표로 합니다.
          </p>
        </section>

        {/* 광고 및 제휴 관계 */}
        <section className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2"><span>📢</span> 광고 및 제휴 관계 안내</h2>
          <p className="text-sm text-stone-600 leading-relaxed mb-3">
            이 사이트는 <strong>광고성 사이트</strong>입니다. 사이트 내 상담 신청 폼을 통해 접수된 문의는 제휴 미용학원으로 연결됩니다.
            방문자가 상담을 신청하거나 제휴 학원에 등록할 경우 운영사가 광고 수수료를 받을 수 있습니다.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            이러한 상업적 관계가 콘텐츠의 사실 정확성에 영향을 미치지 않도록 노력하며,
            자격증 정보·법적 요건·시험 일정 등 객관적 정보는 한국산업인력공단·큐넷·법령정보센터 등 공식 출처를 기준으로 작성합니다.
          </p>
        </section>

        {/* 정보 작성 기준 */}
        <section className="bg-white border border-stone-100 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-stone-900 mb-4">정보 작성 기준</h2>
          <ul className="space-y-3 text-sm text-stone-500 leading-relaxed">
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-brand">01</span>
              <span><strong className="text-stone-700">공식 출처 우선:</strong> 자격증 합격률, 시험 일정, 응시 자격 등은 한국산업인력공단(q-net.or.kr) 공식 자료를 기준으로 합니다. 수치에는 출처와 참고 시점을 명시합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-brand">02</span>
              <span><strong className="text-stone-700">법적 정확성:</strong> 미용업 관련 법적 요건은 「공중위생관리법」 조문을 직접 참조하며, 법령 변경 시 내용을 업데이트합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-brand">03</span>
              <span><strong className="text-stone-700">수강생 후기:</strong> 실제 수강 경험을 바탕으로 작성되었으며, 개인정보 보호를 위해 이름과 학원명 일부를 익명 처리합니다. 결과는 개인 역량·학습 시간에 따라 다를 수 있습니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-brand">04</span>
              <span><strong className="text-stone-700">주기적 업데이트:</strong> 시험 일정, 합격률 등 변경 가능성이 있는 정보는 연 1회 이상 검토하며, 중요 변경 시 즉시 반영합니다.</span>
            </li>
          </ul>
        </section>

        {/* 운영사 정보 */}
        <section className="bg-white border border-stone-100 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-stone-900 mb-4">운영사 정보</h2>
          <dl className="text-sm text-stone-500 space-y-2">
            <div className="flex gap-4">
              <dt className="font-semibold text-stone-600 w-28 shrink-0">상호</dt>
              <dd>주식회사 와야미디어</dd>
            </div>
            <div className="flex gap-4">
              <dt className="font-semibold text-stone-600 w-28 shrink-0">사업자등록번호</dt>
              <dd>105-87-55780</dd>
            </div>
            <div className="flex gap-4">
              <dt className="font-semibold text-stone-600 w-28 shrink-0">업종</dt>
              <dd>광고대행, 광고물작성, 기타광고</dd>
            </div>
            <div className="flex gap-4">
              <dt className="font-semibold text-stone-600 w-28 shrink-0">주소</dt>
              <dd>서울특별시 마포구 구룡길 19, A429호</dd>
            </div>
          </dl>
        </section>

        {/* 면책 */}
        <section className="bg-stone-50 border border-stone-200 rounded-2xl p-5 text-xs text-stone-400 leading-relaxed">
          이 사이트에 게재된 정보는 일반적인 참고 목적으로 제공되며, 법적 조언이나 공식 기관의 안내를 대체하지 않습니다.
          학원 등록, 자격증 응시 등 중요한 결정 전에는 반드시 해당 기관(한국산업인력공단, 학원 등)에 직접 확인하시기 바랍니다.
          콘텐츠 오류나 개선 의견은 사이트 내 문의 양식을 통해 알려주시면 적극 반영하겠습니다.
        </section>

      </div>
    </div>
  )
}
