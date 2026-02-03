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
    <>
      {/* Mobile/Tablet Bottom Navigation */}
      <div className='fixed bottom-4 left-1/2 -translate-x-1/2 lg:hidden w-auto max-w-[90vw] h-auto bg-background border-4 border-primary rounded-full z-50 flex flex-row items-center justify-center gap-6 sm:gap-8 px-3 sm:px-3 py-3 shadow-lg'>
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
                width={isActive ? 24 : 28}
                height={isActive ? 24 : 28}
              />
            </Link>
          )
        })}
      </div>

      {/* Desktop Side Navigation */}
      <div className='hidden lg:flex fixed right-4 xl:right-10 top-1/2 -translate-y-1/2 w-16 xl:w-16 h-auto bg-background border-4 border-primary rounded-full z-50 flex-col items-center justify-space-around gap-8 xl:gap-10 py-2'>
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
    </>
  )
}

export default SideNavigation