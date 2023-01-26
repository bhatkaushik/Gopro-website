import Hero from '@/components/Hero-section/Hero'
import MainPageContentLayout from '@/components/mainpage-content/MainPageContentLayout'
import Image from 'next/image'
import styles from './page.module.css'



export default function Home() {
  return (
    <>
<Hero />
<MainPageContentLayout />
    </>

  )
}
