import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 | 강남미용학원 비교',
  alternates: { canonical: '/terms' },
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <h1 className="text-2xl font-extrabold text-stone-900 mb-6">이용약관</h1>
      <div className="text-sm leading-relaxed text-stone-600 space-y-6">
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-2">제1조 (목적)</h2>
          <p>본 약관은 주식회사 와야미디어(이하 &apos;회사&apos;)가 운영하는 강남미용학원 비교 서비스의 이용 조건 및 절차, 이용자와 회사 간의 권리·의무 등을 규정함을 목적으로 합니다.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-2">제2조 (서비스 내용)</h2>
          <p>본 서비스는 강남 미용학원 정보 비교, 수강료 안내, 자격증 정보, 전문 상담사 연결 등의 정보 제공 서비스입니다. 제공되는 정보는 참고용이며 실제와 다를 수 있습니다.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-2">제3조 (면책조항)</h2>
          <p>본 사이트의 정보는 참고용으로만 제공되며, 회사는 정보의 정확성·완전성을 보장하지 않습니다. 이용자는 제공된 정보를 기반으로 최종 판단을 직접 내려야 합니다.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-2">제4조 (지식재산권)</h2>
          <p>본 서비스의 모든 콘텐츠는 회사의 지식재산권에 의해 보호됩니다. 무단 복제·배포를 금지합니다.</p>
        </section>
        <p className="text-xs text-stone-400">본 약관은 2026년 1월 1일부터 시행됩니다.</p>
      </div>
    </div>
  )
}
