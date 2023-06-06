import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BookTrip from '../components/BookTrip';
import Featured from '../components/Featured';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BookTrip />
      <Featured />
    </>
  )
}

export default SharedLayout;