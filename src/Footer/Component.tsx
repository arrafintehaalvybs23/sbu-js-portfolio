import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Footer as FooterType } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 1)()

  const navItems: { label: string; subNavItems: { link: any }[] }[] = (
    footerData?.navItems || []
  ).map((item: any) => ({
    label: item.label || '',
    subNavItems: (item.subNavItems || []).map((subItem: any) => ({
      link: subItem.link || {},
    })),
  }))

  return (
    <footer className="mt-auto border-t border-border bg-blue-950 text-white dark:bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
          {/* Navigation Sections */}
          <nav className="grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {navItems.map(({ label, subNavItems }, i) => (
              <div key={i}>
                <span className="text-sm font-semibold block mb-6">{label}</span>
                <div className="flex flex-col gap-1">
                  {subNavItems.map(({ link }, j) => (
                    <CMSLink
                      key={`${i}-${j}`}
                      {...link}
                      className="text-sm text-white hover:underline transition-all"
                    />
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
