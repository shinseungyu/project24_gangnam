import Link from 'next/link'
import Image from 'next/image'
import FormSection from './test/FormSection'
import FieldTabs from '@/components/FieldTabs'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '강남미용학원 수강료는 얼마인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '분야와 과정에 따라 다르지만, 강남 미용학원 수강료는 단기 과정 80만원부터 장기 종합 과정 600만원까지 다양합니다. 헤어·피부·메이크업·네일 각 분야별로 차이가 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '강남미용학원에서 취득할 수 있는 자격증은 무엇인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '미용사(헤어) 국가기술자격증, 피부미용사 자격증, 네일미용사 자격증, 메이크업 관련 민간자격증 등을 취득할 수 있습니다. 학원마다 합격보장반을 운영하는 곳도 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '강남미용학원 취업률은 어느 정도인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '강남 주요 미용학원의 평균 취업률은 85~95% 수준입니다. 취업 연계 프로그램을 운영하는 학원을 선택하면 졸업 후 취업에 유리합니다.' },
    },
    {
      '@type': 'Question',
      name: '강남미용학원과 다른 지역 학원의 차이는 무엇인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '강남 미용학원은 현직 최고급 강사진, 최신 장비, 취업 연계 네트워크 등에서 차별화됩니다. 특히 헤어·메이크업 분야는 연예인 담당 아티스트가 강의하는 경우도 있습니다.' },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* 히어로 */}
      <section id="form" className="relative py-36 border-b border-stone-200 overflow-hidden min-h-[560px] flex items-center bg-violet-950">
        <Image src="/bg.webp" alt="강남미용학원 수강료·커리큘럼·취업률 비교" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-[1100px] mx-auto px-4 text-center">
          <p className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">2026 최신 기준</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            강남미용학원 비교<br />
            <span className="text-violet-200">헤어·피부·메이크업·네일 수강료 한눈에</span>
          </h1>
          <div className="relative mt-6 w-full text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">무료 학원 비교 상담 👇</span>
            </div>
            <FormSection />
          </div>
          <p className="text-sm text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            헤어·피부·메이크업·네일까지 강남 미용학원 선택에 필요한 정보를 정리했습니다
          </p>
        </div>
      </section>

      {/* 전문가 검토 뱃지 */}
      <div className="bg-violet-50 border-b border-violet-100 py-3">
        <div className="max-w-[1100px] mx-auto px-4 flex flex-wrap items-center gap-4 text-xs text-stone-500">
          <span className="flex items-center gap-1.5 font-semibold text-violet-700">
            <span>✅</span> 현직 미용 전문가 검토 완료
          </span>
          <span className="text-stone-300 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span>📋</span> 한국산업인력공단 공식 자료 기준
          </span>
          <span className="text-stone-300 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span>🗓️</span> 최종 업데이트: 2026년 5월
          </span>
        </div>
      </div>

      {/* 강남미용학원이란? */}
      <article className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">강남미용학원비교사이트 소개</p>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-3">강남미용학원비교사이트란?</h2>
            <p className="text-stone-500 leading-relaxed max-w-3xl">
              강남미용학원은 서울 강남구·서초구 일대에 위치한 미용 전문 교육기관입니다. 압구정·청담·논현·역삼 등 국내 뷰티 산업이 밀집한 지역 특성상, 현직 전문가와의 연계가 활발하고 취업·창업 네트워크가 잘 형성되어 있습니다. 헤어·피부·메이크업·네일 등 분야별로 전문 학원이 다수 운영되며, 국가기술자격증(미용사) 취득부터 실무 취업 연계까지 다양한 교육 과정을 제공합니다.
            </p>
          </header>

          {/* 강남 미용학원을 알아야 하는 이유 */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-8 flex gap-3">
            <span className="text-xl shrink-0 mt-0.5">📌</span>
            <div>
              <p className="font-bold text-stone-800 mb-1">미용사 자격증, 반드시 알아야 할 법적 사항</p>
              <p className="text-sm text-stone-600 leading-relaxed">
                「공중위생관리법」 제6조에 따라 미용 업무를 업으로 하려면 반드시 국가자격증(미용사)을 취득해야 합니다. 자격증 없이 영업 시 과태료·영업정지 등의 행정처분을 받을 수 있습니다. 헤어·피부·네일 분야 모두 별도 자격증이 필요하므로 학원 선택 시 자격증 과정 포함 여부를 먼저 확인하세요.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/hair" className="bg-violet-50 rounded-2xl p-6 hover:bg-violet-100 transition-colors block">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">분야별 전문 교육</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                헤어·피부관리·메이크업·네일아트 등 분야를 선택해 집중 수강할 수 있습니다. 단일 분야 자격증 과정(2~8개월)부터 여러 분야를 아우르는 토탈뷰티 과정까지 목적에 따라 설계가 다릅니다.
              </p>
            </Link>
            <Link href="/license" className="bg-violet-50 rounded-2xl p-6 hover:bg-violet-100 transition-colors block">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">국가자격증 취득 지원</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                한국산업인력공단이 시행하는 미용사(헤어·피부·네일) 국가기술자격증 취득 과정을 운영합니다. 필기·실기 동시 준비 커리큘럼과 모의시험을 통해 합격률을 높입니다.
              </p>
            </Link>
            <Link href="/about" className="bg-violet-50 rounded-2xl p-6 hover:bg-violet-100 transition-colors block">
              <h3 className="font-extrabold text-stone-900 text-lg mb-2">현장 취업 연계</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                강남 특성상 살롱·웨딩샵·뷰티업체가 밀집해 있어 학원-현장 간 연계가 다른 지역보다 활발합니다. 다만 취업 연계 수준은 학원마다 차이가 크므로, 상담 시 구체적인 협약 업체와 조건을 확인하는 것이 중요합니다.
              </p>
            </Link>
          </div>
        </div>
      </article>

      {/* 강남 vs 다른 지역 비교 */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="text-center mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">지역별 비교</p>
            <h2 className="text-2xl font-extrabold text-stone-900">강남 미용학원이 좋은 이유</h2>
            <p className="text-stone-500 text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
              미용학원을 고를 때 수강료만 보고 결정하면 나중에 후회하는 경우가 많습니다. 강남·서초 지역은 지하철 접근성, 주변 뷰티 인프라, 취업 연계 네트워크 면에서 다른 지역과 차별화됩니다. 홍대·신촌·기타 지역과 핵심 항목을 직접 비교해 어떤 차이가 있는지 먼저 확인해보세요.
            </p>
          </header>

          {/* 데스크톱 테이블 */}
          <div className="hidden md:block overflow-x-auto mb-4">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100">
              <thead>
                <tr className="bg-violet-700 text-white">
                  <th className="py-4 px-5 text-left font-bold">비교 항목</th>
                  <th className="py-4 px-5 text-center font-bold bg-violet-900">강남·서초</th>
                  <th className="py-4 px-5 text-center font-bold">홍대·신촌</th>
                  <th className="py-4 px-5 text-center font-bold">기타 지역</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  { item: '지하철 접근성', gangnam: '2·3·7·9호선 환승 가능 (강남·교대·고속터미널)', hongdae: '2·6호선 (홍대입구)', other: '노선 제한적', highlight: true },
                  { item: '주변 인프라', gangnam: '압구정·청담·논현 뷰티 거리 인접', hongdae: '홍대 상권·트렌드 밀집', other: '지역마다 상이', highlight: false },
                  { item: '강사 실무 경력', gangnam: '현직 최상급 살롱·방송 출신 多', hongdae: '실무 경력 보통~우수', other: '편차 큼', highlight: true },
                  { item: '취업 연계 네트워크', gangnam: '강남 권역 프리미엄 업체 연계', hongdae: '홍대·합정 일대 업체', other: '제한적', highlight: false },
                  { item: '자격증 합격보장반', gangnam: '대부분 운영', hongdae: '일부 운영', other: '운영 학원 적음', highlight: true },
                  { item: '야간·주말반', gangnam: '대부분 운영', hongdae: '대부분 운영', other: '학원마다 다름', highlight: false },
                  { item: '포트폴리오 촬영 지원', gangnam: '메이크업·헤어 분야 지원 多', hongdae: '메이크업 중심 지원', other: '드뭄', highlight: false },
                ].map((row) => (
                  <tr key={row.item} className={row.highlight ? 'bg-violet-50/40' : 'bg-white'}>
                    <td className="py-4 px-5 font-semibold text-stone-700">{row.item}</td>
                    <td className="py-4 px-5 text-center font-bold text-violet-700 bg-violet-50">{row.gangnam}</td>
                    <td className="py-4 px-5 text-center text-stone-600">{row.hongdae}</td>
                    <td className="py-4 px-5 text-center text-stone-500">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 모바일 카드 */}
          <div className="md:hidden space-y-3 mb-4">
            {[
              { item: '지하철 접근성', gangnam: '2·3·7·9호선 환승', hongdae: '2·6호선', other: '노선 제한적' },
              { item: '주변 인프라', gangnam: '청담·논현 뷰티 거리', hongdae: '홍대 트렌드 상권', other: '지역마다 상이' },
              { item: '강사 실무 경력', gangnam: '최상급 살롱·방송 출신', hongdae: '보통~우수', other: '편차 큼' },
              { item: '취업 연계', gangnam: '강남 프리미엄 업체', hongdae: '홍대 일대 업체', other: '제한적' },
            ].map((row) => (
              <div key={row.item} className="bg-white border border-stone-100 rounded-2xl p-4">
                <p className="font-bold text-stone-800 text-sm mb-3">{row.item}</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-violet-50 rounded-xl p-2">
                    <p className="text-violet-600 font-bold mb-1">강남·서초</p>
                    <p className="text-stone-700 font-semibold">{row.gangnam}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-2">
                    <p className="text-stone-500 font-bold mb-1">홍대·신촌</p>
                    <p className="text-stone-600">{row.hongdae}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-2">
                    <p className="text-stone-500 font-bold mb-1">기타 지역</p>
                    <p className="text-stone-500">{row.other}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-stone-400 text-center">※ 위 비교는 평균적인 경향이며, 개별 학원에 따라 차이가 있을 수 있습니다. 상담을 통해 구체적인 조건을 확인하세요.</p>
        </div>
      </section>

      <FieldTabs />

      {/* 분야별 미용 자격증 비교 */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="text-center mb-8">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">분야별 비교</p>
            <h2 className="text-2xl font-extrabold text-stone-900">미용 분야별 자격증 한눈에 비교</h2>
            <p className="text-stone-500 text-sm mt-2 max-w-2xl mx-auto leading-relaxed">헤어·피부·메이크업·네일 중 어떤 분야를 선택하느냐에 따라 준비 기간, 취득 가능한 자격증의 종류, 취업 시장의 규모가 완전히 달라집니다. 분야별로 실기 난이도와 합격률 차이도 크기 때문에, 학원 등록 전에 본인의 목표와 일정에 맞는 분야를 먼저 결정하는 것이 중요합니다.</p>
          </header>

          {/* 데스크톱 테이블 */}
          <div className="hidden md:block overflow-x-auto mb-6">
            <table className="w-full text-sm bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="py-4 px-5 text-left font-bold">분야</th>
                  <th className="py-4 px-5 text-center font-bold">자격증 종류</th>
                  <th className="py-4 px-5 text-center font-bold">준비 기간</th>
                  <th className="py-4 px-5 text-center font-bold">실기 난이도</th>
                  <th className="py-4 px-5 text-center font-bold">필기 합격률</th>
                  <th className="py-4 px-5 text-center font-bold">법적 필수</th>
                  <th className="py-4 px-5 text-center font-bold">주요 취업처</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  {
                    icon: '✂️', field: '헤어', href: '/hair',
                    license: '미용사(헤어) 국가자격증', period: '4~8개월',
                    difficulty: '★★★', passRate: '약 50~65%',
                    legal: '필수', work: '헤어살롱·헤어샵 창업',
                  },
                  {
                    icon: '🧴', field: '피부관리', href: '/skin',
                    license: '미용사(피부) 국가자격증', period: '5~10개월',
                    difficulty: '★★★', passRate: '약 55~70%',
                    legal: '필수', work: '에스테틱·피부관리실',
                  },
                  {
                    icon: '💅', field: '네일', href: '/nail',
                    license: '미용사(네일) 국가자격증', period: '2~4개월',
                    difficulty: '★★☆', passRate: '약 45~60%',
                    legal: '필수', work: '네일샵·프리랜서',
                  },
                  {
                    icon: '💄', field: '메이크업', href: '/makeup',
                    license: '민간자격증 (국가자격 없음)', period: '3~7개월',
                    difficulty: '★★☆', passRate: '—',
                    legal: '불필요', work: '웨딩샵·방송·프리랜서',
                  },
                ].map((row, i) => (
                  <tr key={row.field} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                    <td className="py-4 px-5 font-bold text-stone-800">
                      <Link href={row.href} className="hover:text-brand transition-colors">{row.icon} {row.field}</Link>
                    </td>
                    <td className="py-4 px-5 text-center text-stone-600 text-xs">{row.license}</td>
                    <td className="py-4 px-5 text-center font-semibold text-brand">{row.period}</td>
                    <td className="py-4 px-5 text-center text-yellow-500 tracking-wider">{row.difficulty}</td>
                    <td className="py-4 px-5 text-center text-stone-600">{row.passRate}</td>
                    <td className="py-4 px-5 text-center">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.legal === '필수' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                        {row.legal}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-center text-stone-500 text-xs">{row.work}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 모바일 카드 */}
          <div className="md:hidden space-y-4 mb-6">
            {[
              { icon: '✂️', field: '헤어', license: '미용사(헤어) 국가자격증', period: '4~8개월', difficulty: '★★★', passRate: '약 50~65%', legal: '필수', legalColor: 'bg-red-50 text-red-600', work: '헤어살롱·헤어샵 창업' },
              { icon: '🧴', field: '피부관리', license: '미용사(피부) 국가자격증', period: '5~10개월', difficulty: '★★★', passRate: '약 55~70%', legal: '필수', legalColor: 'bg-red-50 text-red-600', work: '에스테틱·피부관리실' },
              { icon: '💅', field: '네일', license: '미용사(네일) 국가자격증', period: '2~4개월', difficulty: '★★☆', passRate: '약 45~60%', legal: '필수', legalColor: 'bg-red-50 text-red-600', work: '네일샵·프리랜서' },
              { icon: '💄', field: '메이크업', license: '민간자격증 (국가자격 없음)', period: '3~7개월', difficulty: '★★☆', passRate: '—', legal: '불필요', legalColor: 'bg-green-50 text-green-600', work: '웨딩샵·방송·프리랜서' },
            ].map((row) => (
              <div key={row.field} className="bg-white border border-stone-100 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-stone-900 text-lg">{row.icon} {row.field}</p>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${row.legalColor}`}>{row.legal}</span>
                </div>
                <p className="text-xs text-stone-400 mb-3">{row.license}</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-stone-50 rounded-xl p-2">
                    <p className="text-[10px] text-stone-400 mb-0.5">준비 기간</p>
                    <p className="text-xs font-bold text-brand">{row.period}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-2">
                    <p className="text-[10px] text-stone-400 mb-0.5">난이도</p>
                    <p className="text-xs text-yellow-500">{row.difficulty}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-2">
                    <p className="text-[10px] text-stone-400 mb-0.5">필기합격률</p>
                    <p className="text-xs font-semibold text-stone-700">{row.passRate}</p>
                  </div>
                </div>
                <p className="text-xs text-stone-400 mt-3">주요 취업처: {row.work}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-xs text-amber-800 leading-relaxed">
            <strong>메이크업 분야 주의:</strong> 메이크업은 현재 국가기술자격증이 없어 법적 자격 요건이 없습니다. 다만 채용 시장에서는 수료증·포트폴리오·민간자격증이 경쟁력으로 작용합니다.
          </div>
          <p className="text-xs text-stone-400 text-center mt-6">※ 준비 기간은 주 5일 풀타임 기준 평균이며, 개인 학습 속도·수강 시간대에 따라 차이가 있습니다. 합격률은 한국산업인력공단 연간 통계 기반 참고 수치입니다.</p>
        </div>
      </section>

      {/* 강남 미용학원 선택 시 체크포인트 */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="text-center mb-10">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">학원 선택 가이드</p>
            <h2 className="text-2xl font-extrabold text-stone-900">강남미용학원 선택 전 반드시 확인할 것</h2>
            <p className="text-stone-500 text-sm mt-2 max-w-2xl mx-auto leading-relaxed">강남 미용학원은 선택지가 많은 만큼 꼼꼼히 비교하지 않으면 후회하기 쉽습니다. 수강료 외에 재료비·강사 이력·취업 연계 조건까지, 실제 상담 전에 반드시 확인해야 할 항목을 정리했습니다. 이 체크리스트를 기준으로 학원을 비교하면 자신에게 맞는 곳을 훨씬 빠르게 찾을 수 있습니다.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                title: '자격증 과정 포함 여부',
                desc: '국가자격증 취득이 목적이라면 필기·실기를 모두 다루는 정규 과정인지 확인하세요. 단순 기술 실습만 하는 과정은 자격증 시험에 불충분할 수 있습니다.',
              },
              {
                icon: '💰',
                title: '총 비용 투명하게 확인',
                desc: '수강료 외에 재료비·교재비·실습비가 별도인지 반드시 확인하세요. "재료비 포함"을 내세우는 학원도 소모품 추가 비용이 발생하는 경우가 있습니다.',
              },
              {
                icon: '👨‍🏫',
                title: '강사 이력 및 수업 방식',
                desc: '강사의 실무 경력, 자격증 보유 여부, 수업 인원(소그룹·1:1 여부)을 확인하세요. 수업 인원이 많을수록 개인 실습 시간이 줄어들 수 있습니다.',
              },
            ].map((item) => (
              <section key={item.title} className="bg-white border border-stone-100 rounded-2xl p-6">
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="font-extrabold text-stone-900 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* 수강생 후기 */}
      <section className="py-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="text-center mb-10">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">수강생 후기</p>
            <h2 className="text-2xl font-extrabold text-stone-900">실제 수강생의 이야기</h2>
            <p className="text-stone-500 text-sm mt-2 max-w-2xl mx-auto leading-relaxed">광고성 후기보다 실제 수강생의 경험이 학원 선택에 훨씬 도움이 됩니다. 자격증 합격까지의 과정, 강사 피드백, 취업 연계 실태까지 솔직하게 담았습니다. 결과는 개인 역량과 학습 시간에 따라 다를 수 있지만, 어떤 부분을 미리 확인해야 하는지 판단하는 데 참고해보세요.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: '김**',
                field: '헤어',
                icon: '✂️',
                rating: 5,
                duration: '5개월',
                date: '2024년 9월 수강',
                result: '국가자격증 취득 + 살롱 취업',
                content: '모의 시험을 여러 번 해주는 게 실제 시험장에서 긴장을 덜 수 있었던 이유인 것 같습니다. 자격증 합격 후 학원 연계로 강남구 살롱에 취업하게 됐습니다.',
              },
              {
                name: '이**',
                field: '메이크업',
                icon: '💄',
                rating: 4,
                duration: '7개월',
                date: '2024년 5월 수강',
                result: '웨딩 메이크업 → 프리랜서 전환',
                content: '포트폴리오 사진 촬영까지 지원해주는 점이 실제로 취업 이력서 작성에 도움이 됐습니다. 다만 수강료가 예상보다 높아서 미리 꼼꼼히 확인하는 걸 추천해요. 현재 프리랜서로 활동 중입니다.',
              },
              {
                name: '한**',
                field: '헤어',
                icon: '✂️',
                rating: 5,
                duration: '6개월',
                date: '2025년 1월 수강',
                result: '미용사(헤어) 자격증 취득',
                content: '실기 교정을 1:1로 해주는 시간이 있어서 개인 약점을 잡아주는 게 도움이 됐습니다. 합격보장반이라도 재료비는 재수강 시 추가로 발생했는데 사전에 안내를 받아서 당황하진 않았습니다.',
              },
            ].map((review) => (
              <article key={review.name + review.field} className="bg-white border border-stone-100 rounded-2xl p-6 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{review.icon}</span>
                    <div>
                      <p className="font-bold text-stone-900 text-sm">{review.name}</p>
                      <p className="text-xs text-stone-400">{review.duration} · {review.date}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-brand/10 text-brand px-2 py-0.5 rounded-full">{review.field}</span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{review.content}</p>
                <span className="inline-block bg-violet-50 text-brand border border-brand/10 px-2.5 py-1 rounded-full text-xs font-medium">{review.result}</span>
              </article>
            ))}
          </div>
          <p className="text-[11px] text-stone-400 text-center mb-6">※ 개인정보 보호를 위해 이름 일부를 익명 처리했습니다. 결과는 개인 역량·학습 시간에 따라 다를 수 있습니다.</p>
          <div className="text-center">
            <Link href="/review" className="inline-block text-sm font-semibold text-brand hover:text-brand-dark transition-colors">수강후기 전체 보기 →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-[1100px] mx-auto px-4">
          <header className="text-center mb-10">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">자주 묻는 질문</p>
            <h2 className="text-2xl font-extrabold text-stone-900">강남미용학원 Q&A</h2>
            <p className="text-stone-500 text-sm mt-2 max-w-2xl mx-auto leading-relaxed">강남 미용학원을 처음 알아보는 분들이 상담 전에 가장 많이 묻는 질문들을 정리했습니다. 자격증 필요 여부, 직장인 수강 가능 여부, 강남이 다른 지역보다 실제로 유리한지 등 핵심 궁금증을 먼저 확인하고 상담을 진행하면 시간을 훨씬 절약할 수 있습니다.</p>
          </header>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: '강남 미용학원이 다른 지역보다 확실히 유리한가요?',
                a: '강남 위치 자체보다 학원의 커리큘럼·강사 수준·취업 연계 역량이 더 중요합니다. 다만 강남구·서초구는 국내 주요 뷰티 업체가 밀집해 있어, 현장 실습이나 졸업 후 취업 네트워크에서 지리적 이점이 있는 건 사실입니다. 특정 분야(예: 방송·웨딩 메이크업, 프리미엄 헤어)를 목표로 한다면 강남권 전문 학원을 우선 고려해볼 만합니다.',
              },
              {
                q: '직장을 다니면서 강남미용학원을 다닐 수 있나요?',
                a: '가능합니다. 강남 권역 미용학원 대부분이 평일 야간반(보통 오후 6시~9시)과 주말반을 운영합니다. 단, 야간·주말반은 자격증 실기 준비에 필요한 반복 연습 시간이 부족할 수 있어, 시험 직전에는 별도 연습 시간 확보가 필요합니다.',
              },
              {
                q: '미용사 자격증 없이 취업이나 창업이 가능한가요?',
                a: '「공중위생관리법」에 따라 미용업(헤어·피부·네일 등)을 영업으로 하려면 해당 분야 국가자격증을 보유해야 합니다. 자격증 없이 보조 스태프로 일하는 건 가능하지만, 독립적으로 시술하거나 개업하는 것은 허용되지 않습니다. 메이크업 분야는 현재 별도 국가자격증 요건이 없어 상대적으로 자유롭습니다.',
              },
            ].map((item) => (
              <details key={item.q} className="bg-white border border-stone-100 rounded-2xl overflow-hidden group shadow-sm">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-stone-900 list-none">
                  <span>{item.q}</span>
                  <span className="text-brand text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-stone-500 leading-relaxed border-t border-stone-50 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/qna" className="inline-block text-sm font-semibold text-brand hover:text-brand-dark transition-colors">더 많은 Q&A 보기 →</Link>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 bg-gradient-to-r from-violet-800 to-purple-900 text-white text-center">
        <div className="max-w-[700px] mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 leading-tight">
            어떤 강남 미용학원이<br />나에게 맞을까요?
          </h2>
          <p className="text-white/70 mb-8 text-base leading-relaxed">
            분야·예산·목표에 맞는 학원 선택 기준을<br />상담 신청을 통해 안내받으세요.
          </p>
          <a href="#" className="inline-block bg-white text-brand font-bold text-base px-8 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition-all">
            위로 올라가 상담 신청하기 ↑
          </a>
        </div>
      </section>
    </>
  )
}
