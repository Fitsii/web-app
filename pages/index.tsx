import HeroSection from '../app/components/pages/Home/HeroSection';
import ActivityContainer from '../app/components/pages/Home/ActivityContainer'
import NearbyInstitues from '../app/components/pages/Home/NearbyInstitues'
import NearbyClasses from '../app/components/pages/Home/NearbyClasses'
import NearbyInstructors from '../app/components/pages/Home/NearbyInstructors'


const Home = () => {
  return (
    <>
      <HeroSection />
      <ActivityContainer />
      <NearbyClasses />
      <NearbyInstructors />
      <NearbyInstitues />
    </>
  )
}

export default Home