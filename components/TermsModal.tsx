"use client"

import { useState } from "react"

export default function TermsModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{ color: "inherit", textDecoration: "none", fontWeight: "inherit", background: "none", border: "none", cursor: "pointer", fontSize: "inherit", padding: 0 }}
      >
        이용약관
      </button>

      {open && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
          <div style={{ backgroundColor: "#fff", borderRadius: "1rem", width: "100%", maxWidth: "620px", maxHeight: "85dvh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* 헤더 */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", borderBottom: "1px solid #e5e7eb" }}>
              <h2 style={{ margin: 0, fontSize: "1.125rem", fontWeight: 700 }}>이용약관</h2>
              <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem", color: "#6b7280", lineHeight: 1 }}>✕</button>
            </div>

            {/* 본문 */}
            <div style={{ overflowY: "auto", padding: "1.5rem", fontSize: "0.875rem", lineHeight: 1.9, color: "#374151" }}>
              <Section title="제1조 (목적)">
                이 약관은 주식회사 와야미디어(이하 &apos;회사&apos;)가 운영하는 강남미용학원 비교 서비스(이하 &apos;서비스&apos;)의 이용 조건 및 절차, 이용자와 회사 간의 권리·의무·책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
              </Section>

              <Section title="제2조 (약관의 효력과 변경)">
                1. 이 약관은 서비스를 통하여 이를 공지하거나 전자우편 등의 방법으로 이용자에게 통지함으로써 효력이 발생합니다.<br />
                2. 회사는 사정상 중요한 사유가 발생될 경우 사전 고지 없이 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력이 발생합니다.
              </Section>

              <Section title="제3조 (서비스 내용)">
                본 서비스는 강남 미용학원 정보 비교, 수강료 안내, 자격증 정보 제공, 전문 상담사 연결 등의 정보 제공 서비스입니다. 제공되는 모든 정보는 참고용이며 실제와 다를 수 있습니다.
              </Section>

              <Section title="제4조 (서비스 이용 제한)">
                이용자가 제공하는 정보의 내용이 허위인 것으로 판명되거나, 허위가 있다고 의심할 만한 합리적인 사유가 발생할 경우 회사는 이용자의 본 서비스 사용을 일부 또는 전부 중지할 수 있습니다.
              </Section>

              <Section title="제5조 (면책조항)">
                회사는 본 서비스에서 제공하는 강남 미용학원 수강료, 커리큘럼, 취업률 등의 정보에 대해 정확성·완전성을 보장하지 않습니다. 이용자는 제공된 정보를 기반으로 최종 판단을 직접 내려야 하며, 이로 인해 발생하는 결과에 대한 책임은 이용자 본인에게 있습니다.
              </Section>

              <Section title="제6조 (지식재산권)">
                본 서비스에 게재된 모든 콘텐츠(텍스트, 이미지, 데이터 등)는 회사의 지식재산권에 의해 보호됩니다. 이용자는 회사의 사전 동의 없이 이를 복제·배포·수정·전송·전시할 수 없습니다.
              </Section>

              <Section title="제7조 (약관 외 준칙)">
                이 약관에 명시되지 않은 사항이 관계 법령에 규정되어 있을 경우에는 그 규정에 따릅니다.
              </Section>

              <Section title="제8조 (관할법원)">
                본 서비스 이용과 관련하여 분쟁이 발생할 경우 회사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.
              </Section>

              <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "#9ca3af" }}>
                <b>공고일자:</b> 2026년 05월 01일&nbsp;&nbsp;<b>시행일자:</b> 2026년 05월 01일
              </p>
            </div>

            {/* 닫기 버튼 */}
            <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid #e5e7eb" }}>
              <button
                onClick={() => setOpen(false)}
                style={{ width: "100%", padding: "0.75rem", backgroundColor: "#1c1917", color: "#fff", border: "none", borderRadius: "0.75rem", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>{title}</h3>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  )
}
