import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreateForm from './components/CreateForm';
import Display from './components/Display';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/:objectId" element={<Display />} />
        <Route path="/create" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
