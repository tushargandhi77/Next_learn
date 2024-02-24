import Link from 'next/link'

export default function Dash() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/dashboard/settings">Settings</Link>
      <Link href="/dashboard/analytics">Analytics</Link>
    </div>
  )
}

// import { Suspense } from 'react'
// import { PostFeed, Weather } from './Components'
 
// export default function Posts() {
//   return (
//     <section>
//       <Suspense fallback={<p>Loading feed...</p>}>
//         <PostFeed />
//       </Suspense>
//       <Suspense fallback={<p>Loading weather...</p>}>
//         <Weather />
//       </Suspense>
//     </section>
//   )
// }
