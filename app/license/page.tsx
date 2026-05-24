import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import FormSection from '../test/FormSection'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://gangnam-beauty.com' },
    { '@type': 'ListItem', position: 2, name: '미용사 자격증 가이드', item: 'https://gangnam-beauty.com/license' },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '미용사 자격증 취득 방법 2026 | 헤어·피부·네일',
  description: '강남미용학원 자격증 과정 안내. 미용사(헤어)·피부미용사·네일미용사 국가자격증 취득 방법, 시험 구조, 합격률까지 2026년 최신 기준으로 정리했습니다.',
  datePublished: '2026-01-01',
  dateModified: '2026-05-24',
  author: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
  publisher: { '@type': 'Organization', name: '강남미용학원비교사이트', url: 'https://gangnam-beauty.com' },
}

export const metadata: Metadata = {
  title: '미용사 자격증 취득 방법 2026 | 헤어·피부·네일',
  description: '강남미용학원 자격증 과정 안내. 미용사(헤어)·피부미용사·네일미용사 국가자격증 취득 방법, 시험 구조, 합격률까지 2026년 최신 기준으로 정리했습니다.',
  alternates: { canonical: '/license' },
}

export default function LicensePage() {
  return (
    <>
      <Script id="license-breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} strategy="beforeInteractive" />
      <Script id="license-article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} strategy="beforeInteractive" />
    <div className="max-w-[1100px] mx-auto px-4 py-12">
      <p className="text-xs font-semibold text-stone-400 mb-2 uppercase tracking-widest">자격증 정보</p>
      <h1 className="text-3xl font-extrabold text-stone-900 mb-3">미용사 자격증 취득 가이드</h1>
      <p className="text-stone-500 mb-4">한국산업인력공단이 시행하는 미용사 국가기술자격증의 종류·시험 구조·합격 전략을 정리했습니다.</p>

      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 mb-10">
        <span className="text-lg shrink-0 mt-0.5">⚠️</span>
        <p className="text-xs text-amber-800 leading-relaxed">
          미용사 자격증 시험 일정·응시료·합격 기준은 매년 변경될 수 있습니다. 반드시{' '}
          <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-amber-900">한국산업인력공단 큐넷(Q-Net)</a>
          에서 최신 공고를 확인하세요. 이 페이지의 합격률은 공단 발표 연간 통계를 기반으로 한 참고 수치입니다.
        </p>
      </div>

      <div className="mb-14 animate-fade-in-up">
        <div className="flex justify-start mb-3">
          <span className="inline-block bg-[#FEE500] text-black text-sm font-extrabold px-4 py-1.5 rounded-full shadow-sm animate-bounce">자격증 합격 상담 받기 👇</span>
        </div>
        <FormSection />
      </div>

      {/* 자격증 종류 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">미용 분야 국가기술자격증 종류</h2>
        <p className="text-stone-500 text-sm mb-5">한국산업인력공단이 시행하며, 합격 시 전국 어디서나 동일하게 인정됩니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: '미용사(헤어)',
              icon: '✂️',
              color: 'bg-blue-50 border-blue-200',
              badgeColor: 'bg-blue-100 text-blue-700',
              written: '60문항 (객관식 4지선다)',
              practical: '커트·퍼머넌트·드라이 등',
              passRate: '필기 약 50~65% / 실기 약 45~60%',
              period: '연 4회',
              note: '국내 미용 자격증 중 응시자 수가 가장 많습니다. 헤어샵 개업·취업에 법적으로 필수입니다.',
            },
            {
              name: '미용사(피부)',
              icon: '🧴',
              color: 'bg-green-50 border-green-200',
              badgeColor: 'bg-green-100 text-green-700',
              written: '60문항 (객관식 4지선다)',
              practical: '피부 분석·관리·기기 사용 등',
              passRate: '필기 약 55~70% / 실기 약 50~65%',
              period: '연 4회',
              note: '피부관리실·에스테틱샵 운영에 필요합니다. 최근 피부 시술 관심 증가로 수요가 늘고 있습니다.',
            },
            {
              name: '미용사(네일)',
              icon: '💅',
              color: 'bg-amber-50 border-amber-200',
              badgeColor: 'bg-amber-100 text-amber-700',
              written: '60문항 (객관식 4지선다)',
              practical: '젤네일·아크릴·네일아트 등',
              passRate: '필기 약 45~60% / 실기 약 40~55%',
              period: '연 4회',
              note: '네일 분야에서 가장 인지도 있는 자격증입니다. 준비 기간이 비교적 짧아 단기간 취득이 가능합니다.',
            },
          ].map((item) => (
            <div key={item.name} className={`${item.color} border rounded-2xl p-5`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-extrabold text-stone-900">{item.name}</h3>
              </div>
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${item.badgeColor} mb-3 inline-block`}>국가기술자격증</span>
              <div className="space-y-1.5 text-xs text-stone-500 mb-3">
                <p><span className="font-semibold text-stone-600">필기:</span> {item.written}</p>
                <p><span className="font-semibold text-stone-600">실기:</span> {item.practical}</p>
                <p><span className="font-semibold text-stone-600">합격률(참고):</span> {item.passRate}</p>
                <p><span className="font-semibold text-stone-600">시험 횟수:</span> {item.period}</p>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed bg-white/60 rounded-xl p-3">{item.note}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">※ 합격률은 한국산업인력공단 연간 통계 기반 참고 수치이며, 매 시행 회차마다 차이가 있습니다.</p>
      </section>

      {/* 시험 구조 상세 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">시험 구조 및 합격 기준</h2>
        <p className="text-stone-500 text-sm mb-5">필기·실기 모두 100점 만점 기준 60점 이상이면 합격입니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-stone-100 rounded-2xl p-5">
            <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2"><span className="bg-brand text-white text-xs px-2 py-0.5 rounded">필기</span> 이론 시험</h3>
            <ul className="text-sm text-stone-500 space-y-2 leading-relaxed">
              <li>• 총 60문항 / 객관식 4지선다 / 60분</li>
              <li>• 60점 이상(36문항) 합격</li>
              <li>• 주요 출제 영역: 미용 이론, 피부학, 공중위생법규, 소독학</li>
              <li>• <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-brand-dark">큐넷(q-net.or.kr)</a>에서 기출문제 무료 제공 (활용 필수)</li>
            </ul>
          </div>
          <div className="bg-white border border-stone-100 rounded-2xl p-5">
            <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2"><span className="bg-violet-500 text-white text-xs px-2 py-0.5 rounded">실기</span> 작업형 시험</h3>
            <ul className="text-sm text-stone-500 space-y-2 leading-relaxed">
              <li>• 실제 시술 작업으로 평가 (헤어: 약 1~2시간)</li>
              <li>• 60점 이상 합격 (감점 방식으로 채점)</li>
              <li>• 위생 처리·작업 순서·완성도 포함 평가</li>
              <li>• 필기 합격 후 2년 내 실기 합격 필요</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 취득 단계 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">자격증 취득 단계별 가이드</h2>
        <p className="text-stone-500 text-sm mb-5">학원 등록부터 최종 합격까지 평균 4~8개월이 소요됩니다. (분야·수강 시간에 따라 차이 있음)</p>
        <div className="space-y-4">
          {[
            { step: '01', title: '학원 등록 및 이론·기초 실기 학습', desc: '미용사 자격증 과정이 포함된 학원을 선택합니다. 필기 이론(피부학·공중위생법규 등)과 기초 실기를 병행합니다. 이 시기에 큐넷 기출문제를 병행 학습하면 효과적입니다.', duration: '1~3개월' },
            { step: '02', title: '필기시험 접수 및 응시', desc: '큐넷(q-net.or.kr)에서 시험 일정을 확인하고 응시 접수합니다. 응시료는 헤어 기준 약 14,500원입니다. 기출 위주로 3~4회분을 반복 학습하면 합격 가능성이 높습니다.', duration: '필기 합격 목표' },
            { step: '03', title: '실기시험 집중 준비', desc: '필기 합격 후 실기에 집중합니다. 실기는 감점 방식이므로 위생 처리, 작업 순서, 완성도를 반복 훈련해야 합니다. 실제 시험 환경과 동일한 조건에서 모의 시험을 여러 번 해보는 것이 중요합니다.', duration: '2~4개월' },
            { step: '04', title: '실기시험 응시 및 자격증 발급', desc: '실기 합격 시 합격 발표 후 큐넷에서 자격증을 신청합니다. 불합격 시 다음 회차에 재응시 가능하며, 학원의 합격보장반을 이용하면 재수강 지원을 받을 수 있습니다.', duration: '자격증 발급' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 bg-white border border-stone-100 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-full bg-brand text-white font-extrabold text-sm flex items-center justify-center shrink-0">{item.step}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-stone-900">{item.title}</h3>
                  <span className="text-xs text-brand font-semibold bg-brand/10 px-2 py-0.5 rounded-full shrink-0 ml-2">{item.duration}</span>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 실기 시험 주요 감점 항목 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">실기 시험 주요 감점 항목</h2>
        <p className="text-stone-500 text-sm mb-5">실기는 감점 방식으로 채점됩니다. 아래 항목은 실제 시험에서 감점이 자주 발생하는 원인입니다. 학원 수업에서도 이 부분을 반복 점검하는 것이 합격률을 높이는 핵심입니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: '🧤',
              title: '위생 처리 미흡',
              desc: '도구 소독, 위생 가운 착용, 폐기물 처리 절차가 평가 항목입니다. 시술 전·중·후 위생 처리를 정해진 순서대로 수행하지 않으면 감점됩니다. 시험장에서 긴장 탓에 소독 단계를 건너뛰는 경우가 많습니다.',
            },
            {
              icon: '🔢',
              title: '작업 순서 역순·누락',
              desc: '헤어 커트·펌·드라이 모두 정해진 작업 순서가 있습니다. 단계를 임의로 바꾸거나 누락하면 채점 항목 자체가 0점 처리될 수 있습니다. 학원 수업과 동일한 순서를 시험장에서 반드시 지켜야 합니다.',
            },
            {
              icon: '✂️',
              title: '커트 선·길이 불균형',
              desc: '커트 후 좌우 길이 불균형, 기준선(baseline) 불일치는 완성도 영역에서 직접 감점됩니다. 특히 원랭스·그라데이션 커트는 빗 각도와 섹션 구분이 결과에 크게 영향을 줍니다.',
            },
            {
              icon: '🌀',
              title: '로드 배열·간격 불균일 (펌)',
              desc: '퍼머넌트 실기에서 로드 배열 간격이 불균일하거나 섹션이 지나치게 크면 감점됩니다. 로드 롤링 시 텐션(당김 강도)이 일정하지 않은 것도 주요 감점 원인입니다.',
            },
            {
              icon: '⏱️',
              title: '시간 초과',
              desc: '주어진 시간 내에 작업을 완료하지 못하면 미완성으로 처리되어 큰 감점이 발생합니다. 시험 시간보다 10~15분 빠르게 완료하는 것을 목표로 반복 훈련하는 것이 중요합니다.',
            },
            {
              icon: '🖐️',
              title: '모델 피부·두피 자극',
              desc: '네일·피부 실기에서 도구 사용 시 피부에 불필요한 자극이 가해지거나 출혈이 발생하면 즉시 감점 또는 실격 처리될 수 있습니다. 실습 단계에서부터 도구 압력을 일정하게 유지하는 훈련이 필요합니다.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-stone-100 rounded-2xl p-5 flex gap-4">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-stone-900 mb-1">{item.title}</p>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3">※ 감점 항목과 세부 기준은 시험 회차·분야에 따라 달라질 수 있습니다. 한국산업인력공단 공개 채점 기준을 참고하세요.</p>
      </section>

      {/* 합격보장반 체크포인트 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">합격보장반 선택 전 확인사항</h2>
        <p className="text-stone-500 text-sm mb-5">"합격보장"을 내세우는 학원이 많지만, 조건은 학원마다 다릅니다. 아래 사항을 꼭 확인하세요.</p>
        <div className="bg-violet-50 border border-violet-100 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: '📄', title: '보장 범위 확인', desc: '필기·실기 모두 보장인지, 실기만 해당인지 확인하세요. "무제한 재수강"이라도 수강 기간 제한이 있는 경우가 많습니다.' },
              { icon: '💸', title: '재료비 추가 여부', desc: '합격보장반 재수강 시 재료비를 추가로 부담해야 하는지 확인하세요. 학원에 따라 재료비는 재수강마다 별도 청구합니다.' },
              { icon: '📅', title: '재수강 일정 유연성', desc: '직장인이라면 야간·주말 재수강이 보장되는지 확인하세요. 정해진 시간대에만 재수강이 가능한 경우 실질적 활용이 어려울 수 있습니다.' },
              { icon: '👤', title: '수업 인원', desc: '소그룹(8인 이하)인지 대형 반인지 확인하세요. 인원이 많을수록 개인 실기 교정 시간이 줄어 합격률에 영향을 줄 수 있습니다.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-stone-900 mb-0.5">{item.title}</p>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 text-center">
        <h2 className="font-bold text-stone-900 mb-2 text-lg">자격증 취득 전략이 궁금하다면?</h2>
        <p className="text-sm text-stone-500">위 상담 신청 폼을 통해 합격보장반 조건과 자격증 시험 일정을 안내받으세요.</p>
      </div>
    </div>
    </>
  )
}
