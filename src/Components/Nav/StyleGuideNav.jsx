import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const StyleGuideNav = ({ children }) => {
    const router = useRouter()
    
    const navItems = [
        { label: 'Overview', href: '/style-guide', icon: '📋' },
        { label: 'Colors', href: '/style-guide/colors', icon: '🎨' },
        { label: 'Typography', href: '/style-guide/typography', icon: '📝' },
        { label: 'Buttons', href: '/style-guide/buttons', icon: '🔘' },
        { label: 'Components', href: '/style-guide/components', icon: '🧩' },
        { label: 'Spacing', href: '/style-guide/spacing', icon: '📏' },
        { label: 'Icons', href: '/style-guide/icons', icon: '⭐' },
    ]

    const isActive = (href) => {
        if (href === '/style-guide') {
            return router.pathname === href
        }
        return router.pathname.startsWith(href)
    }

    return (
        <div className='flex min-h-screen pt-20'>
            {/* Sidebar */}
            <aside className='w-64 bg-white border-r border-gray-200 fixed left-0 top-20 bottom-0 overflow-y-auto'>
                <nav className='p-6'>
                    <h3 className='font-bold text__18 mb-6 text-gray-900'>Style Guide</h3>
                    <ul className='space-y-2'>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text__16 font-medium transition-all ${
                                        isActive(item.href)
                                            ? 'bg-[#6373AD] text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <span className='text-xl'>{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className='flex-1 ml-64'>
                {children}
            </main>
        </div>
    )
}

export default StyleGuideNav
