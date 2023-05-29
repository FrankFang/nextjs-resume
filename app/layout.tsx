import { Metadata } from 'next'
import './globals.css'
import './a4.css'

export const metadata: Metadata = {
  title: "FrankFang's Resume",
  viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover',
  other: {
    "X-UA-Compatible": "IE=edge",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
