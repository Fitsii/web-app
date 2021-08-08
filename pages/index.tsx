import { useEffect, useState } from 'react';

import HeroSection from '../app/components/pages/Home/HeroSection';
import ActivityContainer from '../app/components/pages/Home/ActivityContainer'
import NearbyInstitues from '../app/components/pages/Home/NearbyInstitues'
import NearbyClasses from '../app/components/pages/Home/NearbyClasses'
import NearbyInstructors from '../app/components/pages/Home/NearbyInstructors'


const Home = () => {

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      let location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      setLocation(location)
    })
  }, [])
  return (
    <>
      <HeroSection />
      <ActivityContainer />
      <NearbyClasses location={location} />
      <NearbyInstructors location={location} />
      <NearbyInstitues location={location} />
    </>
  )
}

export default Home