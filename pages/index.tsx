import { useEffect, useState } from 'react';

import HeroBanner from '../app/components/Hero/HeroBanner'
import ActivityContainer from '../app/components/pages/Home/ActivityContainer'
import NearbyInstitues from '../app/components/pages/Home/NearbyInstitues'
import NearbyClasses from '../app/components/pages/Home/NearbyClasses'
import NearbyInstructors from '../app/components/pages/Home/NearbyInstructors'

import Layout from '../app/components/layouts/Page'


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
      <HeroBanner title="DISCOVER THE POWER OF TRAINNING" caption="Get more from every workout with customized guideance of personal training" />
      <ActivityContainer />
      <NearbyClasses location={location} />
      <NearbyInstructors location={location} />
      <NearbyInstitues location={location} />
    </>
  )
}

// eslint-disable-next-line 
Home.getLayout = (page: any) => (
  <Layout>{page}</Layout>
)

Home.layout = Layout;

export default Home