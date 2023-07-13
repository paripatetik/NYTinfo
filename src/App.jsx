
import { Route, Routes } from 'react-router-dom';

import './scss/style.scss';

import Books from './pages/books';
import Home from './pages/home';
import Articles from './pages/articles';
import Header from './components/header';




function App() {
 

  return (
    <div className='body'>
     <Header/>
     <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/books'element={<Books/>} />
      <Route path='/articles'element={<Articles/>} />
   </Routes>
    </div>
  )
}

export default App;
