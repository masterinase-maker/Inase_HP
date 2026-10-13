"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "TOPへ", href: "/" },
  { label: "INASEとは", href: "/about" },
  {
    label: "チャリティ活動",
    href: "/charity",
    children: [
      { label: "支援実績", href: "/charity/achievements" },
      { label: "寄付報告", href: "/charity/reports" },
      { label: "活動レポート", href: "/charity/activities" },
    ],
  },
  {
    label: "大会情報",
    href: "/events",
    children: [
      { label: "次回大会", href: "/events/next" },
      { label: "対戦カード", href: "/events/matchups" },
      { label: "過去大会", href: "/events/past" },
    ],
  },
  { label: "選手募集", href: "/recruitment" },
  { label: "協賛募集", href: "/sponsorship" },
  { label: "協賛一覧", href: "/sponsors" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-inase-black border-b border-inase-red/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-inase-red flex items-center justify-center font-black text-white text-sm">
              I
            </div>
            <span className="font-black text-lg tracking-wider text-white group-hover:text-inase-red transition-colors">
              INASE
              <span className="text-inase-red text-xs ml-1 font-normal tracking-widest">
                CHARITY FIGHT
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm text-gray-300 hover:text-inase-red transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 bg-inase-black-light border border-inase-red/20 min-w-36 py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-inase-red hover:bg-inase-red/10 transition-colors whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-inase-red transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            <div className="w-6 space-y-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-inase-black-light border-t border-inase-red/20">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 px-3 text-gray-300 hover:text-inase-red hover:bg-inase-red/10 transition-colors rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 px-3 text-sm text-gray-400 hover:text-inase-red hover:bg-inase-red/10 transition-colors rounded"
                        onClick={() => setIsOpen(false)}
                      >
                        └ {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
