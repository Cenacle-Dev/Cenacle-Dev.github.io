import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import CreateGroup from './components/groups/create_group/create_group';
import LoginPage from './components/login_page/login_page';
import Maker from './components/maker/maker';
import Navbar from './components/navbar/navbar';
import Swiper from './components/swiper/swiper';
import { SwiperData } from './service/swiperData';


function App(authService) {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
    <Swiper slides={SwiperData} />
    <Maker />
    </Route>
    <Route path="/login">
    <LoginPage authService={authService} />
    </Route>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
