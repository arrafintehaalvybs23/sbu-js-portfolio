'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Menu, X } from 'lucide-react' // hamburger + close icons

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setHeaderTheme(null)
    setMobileMenuOpen(false) // close mobile menu on route change
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme])

  return (
    <header className="container relative z-20">
      <div className="py-6 flex justify-between items-center">
        <Link href="/" className="z-30">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex">
          <HeaderNav data={data} />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-30"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-black z-20 shadow-md">
          <HeaderNav data={data} mobile />
        </div>
      )}
    </header>
  )
}
