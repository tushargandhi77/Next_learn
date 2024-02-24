
// Option 1
// import Link from 'next/link'

// export default function Page(){
//   return <Link href="/dashboard">Dashboard</Link>
// }


// Option 2
'use client'

import { useRouter } from "next/navigation"
import { Links } from './components/links'

export default function Home(){
  const router = useRouter()
  return(
    <>
    <Links/>
    <button type="button" onClick={()=>router.push('/dashboard')}>
      DashBoard
    </button>
    </>
  )
}

// // option 3
// 'use client'
 
// import { useState } from 'react'
 
// export default function Counter() {
//   const [count, setCount] = useState(0)
 
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   )
// }


