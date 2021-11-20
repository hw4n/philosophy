import { Routes, Route } from 'react-router-dom';
import './App.css';
import Display from './components/Display';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/quote/:id" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
