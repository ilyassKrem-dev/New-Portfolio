"use client"
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({ 
  subsets: ['latin'],
  weight: ['100' , '200' , '300' , '400' , '500' , '600' , '700' , '800']
})

import Nav from '@/assets/Nav'
import TopLeftImg from "@/assets/top-left-img"
import Head from "@/assets/Head"
import Transition from '@/assets/Transition'
import {usePathname} from 'next/navigation'
import {AnimatePresence , motion} from 'framer-motion'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body className={sora.className}>
        <Nav />
        <TopLeftImg />
        <Head />
        <AnimatePresence mode='wait'>
          <div className='page relative'>
              <motion.div  key={pathname} className='h-full'>
                <Transition />
                {children}
              </motion.div> 
          </div>
        </AnimatePresence> 
      </body>
    </html>
  )
}
