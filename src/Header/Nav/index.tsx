'use client'

import React from 'react'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType; mobile?: boolean }> = ({
  data,
  mobile = false,
}) => {
  const navItems = data?.navItems || []

  return (
    <nav className={mobile ? 'flex flex-col gap-4 p-4' : 'flex gap-6 items-center relative'}>
      {navItems.map(({ link, ...rest }, i) => {
        const subNavItems = (rest as any).subNavItems || []
        const label = (link as { label?: string; id?: string | null })?.label || rest.label
        const hasChildren = subNavItems && subNavItems.length > 0

        return (
          <div key={i} className={mobile ? 'flex flex-col' : 'relative group'}>
            <CMSLink
              {...link}
              appearance="link"
              className={`text-sm font-medium transition-colors ${
                mobile ? '' : 'hover:text-primary'
              }`}
            >
              {label}
            </CMSLink>

            {hasChildren && (
              <div
                className={
                  mobile
                    ? 'ml-4 mt-2 flex flex-col gap-2'
                    : 'absolute left-0 top-full z-10 hidden min-w-[200px] flex-col gap-1 rounded-md bg-white p-3 shadow-md group-hover:flex dark:bg-muted'
                }
              >
                {subNavItems.map((sub: any, j: number) => (
                  <CMSLink
                    key={j}
                    {...sub.link}
                    appearance="link"
                    className="text-sm text-muted-foreground hover:text-primary"
                  />
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
