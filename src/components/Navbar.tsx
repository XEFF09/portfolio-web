'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"
import { useEffect, useState } from 'react';

export default function Navbar() {

    const [scroll, setScroll] = useState<boolean>(false)

    const NavColor = () => {
        if (window.scrollY >= 65) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', NavColor)
    })

    const pathName = usePathname();

    const NavItem = ({ page, href }: { page: string, href: string }) => {
        return (
            <Link 
                href={href} 
                className={`${pathName === href ? 'text-yellow-500' : 'text-white'} mr-3 p-2 hover:text-yellow-500 transition-colors duration-300 text-sm`}
            >
                {page}
            </Link>
        )
    }

    return (
        <nav className={ `fixed flex justify-center w-screen top-0 ${scroll ? 'bg-slate-950 transition-colors duration-300' : 'bg-slate-900 transition-colors duration-300' }` }>
            <div className="container flex justify-end">
                <NavItem 
                    page={'Portfolio'} 
                    href={'/portfolio'}
                />
                <NavItem 
                    page={'Contact'} 
                    href={'/contact'}
                />
                <NavItem 
                    page={'Home'} 
                    href={'/'}
                />
            </div>
        </nav>
    )
}