import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BookTrip from '../components/BookTrip';
import Featured from '../components/Featured';
import Overlay from '../components/Overlay';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BookTrip />
      <Overlay />
      <Featured />
    </>
  )
}

export default SharedLayout;