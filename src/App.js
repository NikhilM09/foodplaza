import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App= () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Body/> path / */}
      {/* <About /> /about
      <Contact/> /contact
      <Cart/> /cart */}
    </div>
  )
}

export default App;
