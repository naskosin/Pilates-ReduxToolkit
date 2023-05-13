
import { Login } from './Login/Login';
import { store } from './store';
import './App.css';
import { Provider } from 'react-redux';
import {Header} from './Header/Header';
import {Routes, Route} from 'react-router-dom';
import {Trainings} from './Trainings/Trainings';
import{Exercises} from './Exercises/Exercises';
import {Prices} from './Prices/Prices';
import {Home} from './Home/Home';
import {CountContext} from './context'
import { ShoppingCart } from './ShoppingCart/Shoppingcart';

function App() {
  return (
    <CountContext>
    <Provider store={store}>
      <Header/>
    <div className="App">
      <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path='/' element={<Home/>}/>
    <Route path = '/shoppingcart'  element={<ShoppingCart/>}/>
     <Route path='/trainings' element={<Trainings/>}/>
     <Route path='/exercises' element={<Exercises/>}/>
     <Route path='/prices' element={<Prices/>}/>

      
      </Routes>
    </div>
    </Provider>
    </CountContext>
  );
}

export default App;
