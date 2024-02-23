
// Option 1
// import Link from 'next/link'

// export default function Page(){
//   return <Link href="/dashboard">Dashboard</Link>
// }


// Option 2
'use client'

import { useRouter } from "next/navigation"

export default function HOme(){
  const router = useRouter()
  return(
    <>
    <button type="button" onClick={()=>router.push('/dashboard')}>
      DashBoard
    </button>
    </>
  )
}


