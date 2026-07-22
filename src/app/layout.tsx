import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <header style={{background:'#eee',padding:'12px'}}>RAG系统顶部导航</header>
        {children} {/* page.tsx的页面内容会渲染在这里 */}
      </body>
    </html>
  )
}