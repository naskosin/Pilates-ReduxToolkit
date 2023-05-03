import logo from './logo.svg';
import { Login } from './Login/Login';
import { store } from './store';
import './App.css';
import { Provider } from 'react-redux';
import {Header} from './Header/Header'

function App() {
  return (
    <Provider store={store}>
      <Header/>
    <div className="App">
      <Login/>
    </div>
    </Provider>
  );
}

export default App;
