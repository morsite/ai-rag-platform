import Hello from '@/components/Hello'
import { getGreet } from '@/lib/util'
export default function Home() {
  return (
    <main>
      <p>{getGreet('用户')}</p>
      <h1>我的RAG平台</h1>
      <p>测试第一段页面代码</p>
      <Hello />
    </main>
  )
}