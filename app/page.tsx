
import { HeroSection } from '@/components/Home/page'
import React from 'react'

const Home = () => {
  return (
    <div className='relative w-full bg-red-200'>

      <div className='flex flex-col absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,78,216,0.15),rgba(0,0,0,1))]'>


      <HeroSection/>

      </div>
    </div>
  )
}

export default Home
