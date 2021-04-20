import './app.css';
import Navbar from './components/navbar/navbar';
import Swiper from './components/swiper/swiper';
import { SwiperData } from './service/swiperData';


function App() {
  return (
    <>
    <Navbar />
    <Swiper slides={SwiperData} />
    {/* <Header /> */}
    </>
  );
}

export default App;
