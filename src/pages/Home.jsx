import React from 'react'
import SomeThing from '../components/SomeThing'
import Card from '../components/card'
import Clints from '../components/Clints'
import NewAnimation from '../components/NewAnimation'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
       <SomeThing />
      <div>
        <Card />
        <Clints />
        <NewAnimation />
      </div>
    </div>
  )
}
