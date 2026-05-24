'use client'
import { useState } from 'react'

const navItems = [
  { label: '헤어학원', href: '/hair' },
  { label: '피부학원', href: '/skin' },
  { label: '메이크업', href: '/makeup' },
  { label: '네일학원', href: '/nail' },
  { label: '자격증', href: '/license' },
  { label: '커리큘럼', href: '/curriculum' },
  { label: '수강후기', href: '/review' },
  { label: 'Q&A', href: '/qna' },
]

const mobileNavItems = navItems

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-violet-100/50">
      <div className="max-w-[1100px] mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-lg text-stone-900 tracking-tight flex items-center gap-2 shrink-0">
          <span className="text-xl">💇</span>
          <span>강남미용학원 <span className="text-brand">비교</span></span>
        </a>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-5 text-[11px] text-stone-500 font-semibold uppercase tracking-wider">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand transition-colors whitespace-nowrap">
              {item.label}
            </a>
          ))}
        </nav>

        {/* 햄버거 버튼 (모바일) */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 items-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        >
          <span className={`block w-5 h-0.5 bg-stone-700 transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-stone-700 transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-stone-700 transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-lg">
          <nav className="max-w-[1100px] mx-auto px-4 py-4 grid grid-cols-2 gap-1">
            {mobileNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-stone-600 hover:text-brand px-4 py-3 rounded-xl hover:bg-brand/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
