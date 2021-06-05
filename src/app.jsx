import './app.css';
import Maker from './components/maker/maker';
import Navbar from './components/navbar/navbar';
import Swiper from './components/swiper/swiper';
import { SwiperData } from './service/swiperData';


function App() {
  return (
    <>
    <Navbar />
    <Swiper slides={SwiperData} />
    <Maker />
    </>
  );
}

export default App;
