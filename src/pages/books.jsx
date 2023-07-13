import { useEffect, useState,} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../features/books/booksSlice';
import BooksContainer from '../components/books/bookscontainer';

import gif from '../assets/loading.gif';
import BooksNav from '../components/books/booksNav';

const urlNames = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=mrkQesiWSzjZaG3J1UrOOD4SmpfQ1aAa';
const urlStart = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=mrkQesiWSzjZaG3J1UrOOD4SmpfQ1aAa';

export default function Books() {
    const {isLoadingN, isLoadingB} = useSelector((state)=> state.books);
    const dispatch = useDispatch();
    const [toggleMenu, setMenu] = useState(false);
    
    useEffect(()=>{
      dispatch(getItems(urlNames));
      dispatch(getItems(urlStart));
    }, []);
   

    if(isLoadingN || isLoadingB){
      return <div className='content __container'>
                <h1 className='loading'> Loading... </h1>
                <img src={gif} alt="loading" className='loading__gif'/>
            </div>
    }
    return (
      <div className="content __container">
          <h1 className="main__title">Books</h1>
          <button className={toggleMenu ? 'toggle-menu active': 'toggle-menu'} onClick={()=> setMenu(!toggleMenu)}><span></span></button>
        <div className="main__books">
         <BooksNav toggle={toggleMenu} setToggle={setMenu}/>
         <BooksContainer />
        </div>
      </div>
    );
   
}