import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import {useState} from 'react';
import UserContext from './utils/UserContext';

const App= ({userDetails}) => {
  const [user, setUser] = useState({
    user : 'rutuj',
    location : 'dombivali'
})
  return (
    <UserContext.Provider value={
      {
        userDetails : user,
        method : setUser
      }}>
      <Header sampleProp={user}/>
      <Outlet newProp={user}/>
      {/* <Body/> path / */}
      {/* <About /> /about
      <Contact/> /contact
      <Cart/> /cart */}
    </UserContext.Provider>
  )
}

export default App;
