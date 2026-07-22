'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function SidebarNav() {
    const pathname = usePathname()
    const menus = [
        { label: '文档管理', href: '/documents' },
        { label: 'AI对话', href: '/chat' },
        { label: '设置', href: '/settings' },
    ]
    return <>
        {
            menus.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded ${pathname === item.href ? 'bg-slate-200' : 'hover:bg-slate-100'
                        }`}
                >
                    {item.label}
                </Link>
            ))
        }</>
}