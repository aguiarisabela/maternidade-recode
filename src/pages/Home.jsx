import Header from '../components/Header.jsx';
//import AccessibilityMenu from '../components/AccessibilityMenu.jsx';
import Banner from '../components/Banner.jsx';
import MainContent from '../components/MainContent.jsx';
import ImageGallery from '../components/ImageGallery.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <MainContent />
      <ImageGallery />
      <Footer />
    </>
  );
}

export default Home;