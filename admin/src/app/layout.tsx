import logo from '@/assets/images/logo.webp'
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper'
import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import Image from 'next/image'
import NextTopLoader from 'nextjs-toploader'
import '@/assets/scss/app.scss'
import { DEFAULT_PAGE_TITLE } from '@/context/constants'

const play = Play({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: 'Totally Health | Admin Dashboard',
    default: DEFAULT_PAGE_TITLE,
  },
  description: 'Totally Health | Admin Dashboard',
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body className={play.className}>
        <div id="splash-screen">
          <Image alt="Logo" width={112} height={24} src={logo} style={{ height: '7%', width: 'auto' }} priority />
        </div>
        <NextTopLoader color="#61844c" showSpinner={false} />
        <div id="__next_splash">
          <AppProvidersWrapper>{children}</AppProvidersWrapper>
        </div>
      </body>
    </html>
  )
}
