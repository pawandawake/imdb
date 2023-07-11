import './App.css';
import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import Movies from './components/Movies'
import Pagination from './components/Pagination'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favourites from './components/Favourites'

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<>
          <Banner/>
          <Movies />
        </>}/>
        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
