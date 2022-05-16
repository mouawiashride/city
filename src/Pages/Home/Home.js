import React from 'react'
import Header from '../../components/Header/Header'
import RentYourPropertyNow from '../../components/rentyourpropertyNow/RentYourPropertyNow'
import CardsBuilds from '../../components/CardsBuilds/CardsBuilds'
import WhoAreWe from '../../components/WhoAreWe/WhoAreWe'

export default function Home() {
  return (
    <>
   
   <RentYourPropertyNow/>
     <WhoAreWe/>
     <CardsBuilds/>
    </>
  )
}
