import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Details from './pages/details/Details';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/home' element={<Home />} ></Route>
      <Route path='/details' element={<Details />} ></Route>
      <Route path='*' element={<NotFound />} ></Route>
    </Routes>
    </>
  );
}

export default App;
