
import { Login } from './Login/Login';
import { store } from './store';
import './App.css';
import { Provider } from 'react-redux';
import {Header} from './Header/Header';
import {Routes, Route} from 'react-router-dom';
import {Trainings} from './Trainings/Trainings';
//import{Exercises} from './Exercises/Exercises';
import {Prices} from './Prices/Prices';

function App() {
  return (
    <Provider store={store}>
      <Header/>
    <div className="App">
      <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path='/trainings' element={<Trainings/>}/>
     {/* <Route path='/exercises' element={<Exercises/>}/> */}
     <Route path='/prices' element={<Prices/>}/>

      
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
