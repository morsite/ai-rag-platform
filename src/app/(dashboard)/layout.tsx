'use client'
import SidebarNav from '@/components/ui/sidebar-nav'
import React from "react"
export default function DashboardLayout({
    children,
}:{children:React.ReactNode}){
  


  return (
    <div className="flex h-screen">
      {/* 侧边栏 */}
      <aside className="w-56 border-r p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold mb-4">AI文档助手</h2>
        <SidebarNav/>
      </aside>
      {/* 右侧页面内容 */}
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  )
}