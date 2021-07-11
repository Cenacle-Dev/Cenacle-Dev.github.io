import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import GroupAddForm from './components/groups/group_add_from.jsx/group_add_form';
import LoginPage from './components/login_page/login_page';
import Maker from './components/maker/maker';
import Navbar from './components/navbar/navbar';
import Swiper from './components/swiper/swiper';
import { SwiperData } from './service/swiperData';


function App({ FileInput }) {
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
            <LoginPage />
          </Route>
          <Route path="/new">
            <GroupAddForm FileInput={FileInput} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
