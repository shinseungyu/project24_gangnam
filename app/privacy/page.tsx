import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보처리방침 | 강남미용학원 비교',
  alternates: { canonical: '/privacy' },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <h1 className="text-2xl font-extrabold text-stone-900 mb-6">개인정보처리방침</h1>
      <div className="prose prose-stone max-w-none text-sm leading-relaxed text-stone-600 space-y-6">
        <p>주식회사 와야미디어(이하 &apos;회사&apos;)는 강남미용학원 비교 상담 서비스 운영을 위해 아래와 같이 개인정보를 처리합니다.</p>
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-2">제1조 (개인정보의 처리 목적)</h2>
          <p>회사는 강남 미용학원 상담 신청, 학원 정보 안내, 전문 상담사 연결을 위하여 개인정보를 처리합니다. 처리 목적 이외의 용도로는 이용되지 않습니다.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-2">제2조 (수집하는 개인정보 항목)</h2>
          <p>성명, 휴대폰 번호, 생년월일, 성별, 거주 지역, 관심 분야(헤어/피부/메이크업/네일), 자격증 보유 여부를 수집합니다.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-2">제3조 (개인정보의 보유 및 이용 기간)</h2>
          <p>수집일로부터 1년간 보유하며, 목적 달성 시 즉시 파기합니다. 이용자 요청 시 즉시 삭제합니다.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-2">제4조 (개인정보의 제3자 제공)</h2>
          <p>담당 상담사(컨설턴트)에게 상담 목적으로만 제공되며, 상담 완료 후 즉시 파기됩니다.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-stone-900 mb-2">제5조 (정보주체의 권리)</h2>
          <p>이용자는 언제든지 개인정보 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 문의: privacy@wayamedia.kr</p>
        </section>
        <p className="text-xs text-stone-400">본 방침은 2026년 1월 1일부터 시행됩니다.</p>
      </div>
    </div>
  )
}
