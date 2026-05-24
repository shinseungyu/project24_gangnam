import type { Metadata } from 'next'
import Script from 'next/script'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://gangnam-beauty.com' },
    { '@type': 'ListItem', position: 2, name: '자주 묻는 질문', item: 'https://gangnam-beauty.com/qna' },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '강남미용학원 자주 묻는 질문 FAQ 2026',
  description: '강남미용학원 자주 묻는 질문 총정리. 강남미용학원 자격증, 취업, 법적 요건, 수강 방법까지 정확한 답변으로 확인하세요.',
  datePublished: '2026-01-01',
  dateModified: '2026-05-24',
  author: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
  publisher: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
}

export const metadata: Metadata = {
  title: '강남미용학원 자주 묻는 질문 FAQ 2026',
  description: '강남미용학원 자주 묻는 질문 총정리. 강남미용학원 자격증, 취업, 법적 요건, 수강 방법까지 정확한 답변으로 확인하세요.',
  alternates: { canonical: '/qna' },
}

const faqs = [
  {
    category: '자격증 & 시험',
    icon: '🎓',
    questions: [
      {
        q: '미용사 국가자격증 종류는 무엇인가요?',
        a: '한국산업인력공단이 시행하는 미용사 국가기술자격증은 ① 미용사(헤어) ② 미용사(피부) ③ 미용사(네일) 세 종류입니다. 각 자격증은 별도로 취득해야 하며, 헤어 자격증이 있다고 피부·네일 자격증이 부여되지 않습니다. 메이크업의 경우 현재 국가기술자격증이 없으며, 한국직업능력개발원 등록 민간자격증이 다수 존재합니다.',
      },
      {
        q: '미용사 자격증 시험이 어렵나요?',
        a: '필기는 60문항 중 36문항(60%) 이상을 맞히면 합격입니다. 큐넷(q-net.or.kr)에서 기출문제를 무료로 제공하므로 기출 위주 반복 학습이 효과적입니다. 실기는 감점 방식으로 위생 처리·작업 순서·완성도를 평가하며, 숙련도가 낮으면 탈락하기 쉽습니다. 한국산업인력공단 공식 통계 기준, 미용사(헤어) 실기 합격률은 연도에 따라 45~60% 수준입니다.',
      },
      {
        q: '자격증 시험은 1년에 몇 번 있나요?',
        a: <>미용사(헤어·피부·네일) 자격증 시험은 연 4회(1·2·3·4분기) 시행됩니다. 단, 회차별 응시 접수 인원이 제한되어 있어 조기에 마감되는 경우가 있습니다. <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="text-brand underline">큐넷(q-net.or.kr)</a>에서 연간 일정을 미리 확인하고 일정에 맞춰 학원 수강 계획을 세우는 것이 좋습니다.</>,
      },
    ],
  },
  {
    category: '법적 요건 & 취업',
    icon: '⚖️',
    questions: [
      {
        q: '미용사 자격증 없이 일할 수 있나요?',
        a: <><a href="https://www.law.go.kr/법령/공중위생관리법" target="_blank" rel="noopener noreferrer" className="text-brand underline">「공중위생관리법」 제6조</a>에 따라 미용업(헤어·피부·네일)을 영업 목적으로 수행하려면 해당 분야 국가자격증을 보유해야 합니다. 자격증 없이 고객에게 유료 시술을 하거나 개업하는 것은 불법이며, 위반 시 과태료 또는 영업정지 등의 행정처분을 받을 수 있습니다. 다만, 보조 스태프로 단순 도움을 주는 경우는 별도 규정이 적용됩니다. 메이크업의 경우 현재 별도 법적 자격 요건이 없습니다.</>,
      },
      {
        q: '강남미용학원 졸업 후 취업이 잘 되나요?',
        a: '강남 권역의 지리적 특성(살롱·뷰티업체 밀집)으로 취업 연계 기회가 상대적으로 많은 편입니다. 그러나 취업률은 학원마다 편차가 크고, 본인의 기술 수준과 포트폴리오가 핵심 변수입니다. "졸업 후 취업 보장"을 내세우는 학원은 구체적으로 어떤 업체에, 어떤 직급으로 연계되는지를 확인하세요.',
      },
      {
        q: '자격증 취득 후 바로 창업이 가능한가요?',
        a: '자격증 취득 후 법적으로는 개업이 가능합니다. 다만 실무 경험 없이 창업하면 고객 응대, 경영 관리, 트러블 대응 측면에서 어려움이 있습니다. 실제로 업계에서는 자격증 취득 후 1~3년 실무 경험을 쌓은 뒤 창업하는 경로가 일반적입니다. 일부 학원이 제공하는 창업 컨설팅의 경우 실제 내용이 무엇인지 구체적으로 확인하는 것이 중요합니다.',
      },
    ],
  },
  {
    category: '수강 방법 & 학원 선택',
    icon: '🏫',
    questions: [
      {
        q: '직장을 다니면서 수강이 가능한가요?',
        a: '가능합니다. 강남 권역 미용학원 대부분이 평일 야간반(오후 6~9시 내외)과 주말반을 운영합니다. 단, 야간·주말반은 수업 횟수가 적어 자격증 실기 준비 기간이 더 길어질 수 있습니다. 시험 직전에는 별도 연습 시간을 스스로 확보하는 것이 합격률을 높이는 데 중요합니다.',
      },
      {
        q: '초보자도 수강이 가능한가요?',
        a: '네, 강남 미용학원 대부분은 경험자와 초보자를 함께 받는 입문 과정을 운영합니다. 오히려 기초부터 체계적으로 배우는 것이 잘못된 습관 없이 기술을 익히는 데 유리합니다. 수강 전 체험 수업이나 상담을 통해 커리큘럼이 초보자 기준으로 구성되어 있는지 확인하세요.',
      },
      {
        q: '학원 선택 시 가장 중요한 기준은 무엇인가요?',
        a: '① 자격증 과정 포함 여부(필기·실기 모두 다루는지), ② 수강료와 총 발생 비용(재료비·교재비 포함 여부), ③ 수업 인원(소그룹 여부), ④ 강사 이력(현장 실무 경력), ⑤ 합격보장반 조건(재수강 범위·재료비 추가 여부)입니다. 모든 조건을 사전에 서면으로 확인하는 것을 권장합니다.',
      },
    ],
  },
]

export default function QnaPage() {
  return (
    <>
      <Script id="qna-breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} strategy="beforeInteractive" />
      <Script id="qna-article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} strategy="beforeInteractive" />
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자주 묻는 질문</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">강남미용학원 Q&A</h1>
      <p className="text-stone-500 mb-10">강남미용학원과 미용사 자격증에 대한 주요 질문과 정확한 답변을 정리했습니다.</p>

      <div className="space-y-10 mb-14">
        {faqs.map((section) => (
          <section key={section.category}>
            <header className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-xl font-bold text-stone-900">{section.category}</h2>
            </header>
            <div className="space-y-3">
              {section.questions.map((item) => (
                <details key={item.q} className="bg-white border border-stone-100 rounded-2xl overflow-hidden group">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-stone-900 list-none">
                    <span className="pr-4">{item.q}</span>
                    <span className="text-brand text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-stone-500 leading-relaxed border-t border-stone-50 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 text-center">
        <h2 className="font-bold text-stone-900 mb-2 text-lg">더 궁금한 점이 있으신가요?</h2>
        <p className="text-sm text-stone-500">메인 페이지의 상담 신청 폼을 이용하시면 분야·예산에 맞는 강남 미용학원 정보를 안내받으실 수 있습니다.</p>
      </div>
    </div>
    </>
  )
}
