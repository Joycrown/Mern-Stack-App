import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/mynotes' element={<MyNotes/>}/>
          </Routes>
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
