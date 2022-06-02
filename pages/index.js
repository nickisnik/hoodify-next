import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='home__wrapper'>
      <div className="home__preview__container">
          <span className='home__preview__header'>Welcome!</span>
          <span className='home__preview__details'>The homepage will live here. <br/> While it&apos;s in development, you can click &apos;shop&apos; to view our products!</span>
      </div>
    </div>
  )
}
