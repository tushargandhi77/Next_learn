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
