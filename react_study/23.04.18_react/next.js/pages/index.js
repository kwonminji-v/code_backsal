// import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li><a href="/sub">링크를 클릭하면 pages에 sub폴더에 만든 파일이 보여짐 
        /pages/sub/index.js</a></li>
        <li><a href="/sub/about">링크 클릭 sub안에 about안에 about.js로 이동 /pages/sub/about.js</a></li>
      </ul>
    </div>
  )
}
