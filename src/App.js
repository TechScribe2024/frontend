import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header/>
      </div>
    </Provider>
  );
}

export default App;
