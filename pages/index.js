import Link from 'next/link'

export default function Homepage() {
  return (
    <div>
      <h2>HOMEPAGE</h2>
      <Link href='/article'>to article</Link>
      <br />
      <Link href='/login'>Login</Link>
    </div>
  )
}
