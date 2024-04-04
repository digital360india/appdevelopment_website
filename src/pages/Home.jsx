import React from 'react'
import SomeThing from '../components/SomeThing'
import Card from '../components/card'
import Clints from '../components/Clints'
import NewAnimation from '../components/NewAnimation'
import Hero from '../components/Hero'
import Industries from '../components/Industries'
import Cms_solutions from '../components/Cms_solutions'
import Approach from '../components/Approach'
import Talk from '../components/Talk'

export default function Home() {
  return (
    <div>
      <Hero />
      <NewAnimation />
      <Industries/>
       <Cms_solutions/>
        <Card />
        <Clints />
        <Approach/>
       <SomeThing />
       <Talk/>
      
    </div>
  )
}
