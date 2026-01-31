'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, UserIcon, FolderIcon, MailIcon } from '@/assets/icons'

const SideNavigation = () => {
  const pathname = usePathname()
  
  const navItems = [
    { icon: HomeIcon, href: '/home' },
    { icon: UserIcon, href: '/about' },
    { icon: FolderIcon, href: '/projects' },
    { icon: MailIcon, href: '/contact' },
  ]

  return (
    <div className='fixed right-10 top-1/2 -translate-y-1/2 w-16 h-auto bg-background border-4 border-primary rounded-full z-50 flex flex-col items-center justify-space-around gap-10 py-2'>
      {navItems.map((item, index) => {
        const IconComponent = item.icon
        const isActive = pathname === item.href
        
        return (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center justify-center transition-all ${
              isActive
                ? 'w-12 h-12 rounded-full bg-primary'
                : 'w-10 h-10'
            }`}
          >
            <IconComponent
              className={isActive ? 'text-background' : 'text-primary'}
              width={isActive ? 28 : 32}
              height={isActive ? 28 : 32}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default SideNavigation