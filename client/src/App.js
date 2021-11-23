import { Routes, Route } from 'react-router-dom';
import './App.css';
import Display from './components/Display';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App container">
      <Header />
      <Display />
    </div>
  );
}

export default App;
