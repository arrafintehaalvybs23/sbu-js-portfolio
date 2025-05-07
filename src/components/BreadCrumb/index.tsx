// components/Breadcrumbs.tsx

import Link from 'next/link'
import { cn } from '@/utilities/ui'

type Crumb = {
  label: string
  href?: string
}

type Props = {
  crumbs: Crumb[]
  className?: string
}

export const Breadcrumbs: React.FC<Props> = ({ crumbs, className }) => {
  return (
    <nav className={cn('text-sm text-muted-foreground', className)} aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {crumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center space-x-1">
            {crumb.href ? (
              <Link href={crumb.href} className="hover:underline text-blue-600">
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {idx < crumbs.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
