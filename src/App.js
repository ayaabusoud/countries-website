import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Details from './pages/details/Details';
import { getTheme } from './dataUtlis/dataStorage';
import { LIGHT_MODE, setTheme } from './controllers/themeController';
import { useState } from 'react';
import NotFound from './pages/notFound/NotFound';

function App() {
  let [initialTheme, setInitialTheme] = useState('')

  useState(()=>{
    let theme = getTheme();
    if(!theme){
      theme = LIGHT_MODE;
    }
    setTheme(theme);
    setInitialTheme(theme)
  },[])

  return (
    <>
    <Navbar theme={initialTheme}/>
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
