import BooksButton from './booksbutton';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';

export default function BooksNav({toggle, setToggle}) {
  const {namesItems} = useSelector((state)=> state.books);
  const [filtered, setFiltered] = useState(namesItems);

  function handleChange(e){
    let value = e.target.value;
    setFiltered(namesItems.filter(elem=> elem.list_name_encoded.includes(value)));
  }
  return (
    <nav className={toggle ? "books__nav active": 'books__nav'}>
      <input className='books__nav-input search'  type="text"  onChange={handleChange} placeholder='Search heading '/>
    {filtered.map((elem, i)=>{
      return <BooksButton key={i} i={i} value={elem.list_name_encoded} name={elem.display_name} setToggle={setToggle} />
    
    })}
  </nav>
  )
}