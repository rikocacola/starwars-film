import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { FilmDetails } from './components/FilmDetails/FilmDetails';

const App = () => {
  return(
    <main>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:filmId' element={<FilmDetails/>}></Route>
      </Routes>
    </main>
  )
}

export default App;
