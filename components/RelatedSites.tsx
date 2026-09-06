// 같은 운영사(주식회사 와야미디어)가 운영하는 뷰티 정보 사이트로 연결되는 섹션.
// 강남미용학원 비교에서 다루지 않는 세부 주제(분야별 수강료 시세·국비지원·입시)를
// 각 전문 사이트로 넘겨 주는 용도이며, 페이지 최하단에 배치한다.

const sites = [
  {
    icon: '💄',
    name: '메이크업학원 수강료 비교',
    href: 'https://makeuphagwon.kr',
    domain: 'makeuphagwon.kr',
    desc: '메이크업학원 수강료 시세와 국비지원, 과정별 커리큘럼을 지역별로 비교할 수 있습니다.',
    tags: ['메이크업학원', '수강료', '국비지원'],
  },
  {
    icon: '💅',
    name: '네일학원 종합가이드',
    href: 'https://nailcost.kr',
    domain: 'nailcost.kr',
    desc: '네일학원 수강료, 내일배움카드 국비지원 활용법, 네일 국가자격증 취득 절차를 정리했습니다.',
    tags: ['네일학원', '네일 자격증', '내일배움카드'],
  },
  {
    icon: '🎓',
    name: '미용입시 학원비 비교',
    href: 'https://beautyip.kr',
    domain: 'beautyip.kr',
    desc: '미용 특성화고·대학 진학을 준비하는 미용입시학원의 학원비와 전공별 준비 방법을 안내합니다.',
    tags: ['미용입시', '학원비', '전공별 준비'],
  },
]

export default function RelatedSites() {
  return (
    <section className="py-16 bg-stone-50 border-t border-stone-100">
      <div className="max-w-[1100px] mx-auto px-4">
        <header className="text-center mb-10">
          <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-2">관련 사이트</p>
          <h2 className="text-2xl font-extrabold text-stone-900">함께 보면 좋은 뷰티 정보 사이트</h2>
          <p className="text-stone-500 text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
            분야를 좁혀서 더 깊게 알아보고 싶다면 아래 사이트를 참고하세요. 수강료 시세, 국비지원, 자격증·입시처럼
            분야별로 조건이 크게 달라지는 정보를 각 주제에 맞춰 따로 정리해 두었습니다.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sites.map((site) => (
            <a
              key={site.domain}
              href={site.href}
              target="_blank"
              rel="noopener"
              className="group bg-white border border-stone-100 rounded-2xl p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="text-3xl block mb-4">{site.icon}</span>
              <h3 className="font-extrabold text-stone-900 text-lg mb-1 group-hover:text-brand transition-colors">{site.name}</h3>
              <p className="text-xs text-stone-400 mb-3">{site.domain}</p>
              <p className="text-sm text-stone-500 leading-relaxed mb-4 flex-1">{site.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {site.tags.map((tag) => (
                  <span key={tag} className="text-[11px] bg-violet-50 text-brand border border-brand/10 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-brand group-hover:text-brand-dark transition-colors">바로가기 →</span>
            </a>
          ))}
        </div>

        <p className="text-[11px] text-stone-400 text-center mt-8">
          ※ 위 사이트는 본 사이트와 동일한 운영 주체(주식회사 와야미디어)가 운영하는 정보 사이트입니다.
        </p>
      </div>
    </section>
  )
}
