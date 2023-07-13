import BookItem from "./bookItem";

import { useState } from "react";
import {  useSelector } from 'react-redux';

export default function BooksContainer() {
    const {booksItems} = useSelector((state)=> state.books);
    const [selected, setSelected] = useState('');
    const [filtered, setFiltered] = useState(booksItems.books);

   function handleSubmit(e){
    e.preventDefault();
    let value = e.target.elements[0].value;
    setFiltered(booksItems.books.filter(elem=>{
      if(selected=='title') return elem.title.toLowerCase().includes(value);
      if(selected=='author') return elem.author.toLowerCase().includes(value);
      if(selected=='publisher') return elem.publisher.toLowerCase().includes(value);
    }))
   }

   function handleChange(e){
    setSelected(e.target.value);
   }
  return (
  <div className="books_container">
    <h1 className="books_container-title">{booksItems.list_name}</h1>
    <form className="books__form" onSubmit={handleSubmit} >
      <div className="books__form-wrapper">
        <input type="text" className="books__input search" placeholder='Search'/>
        <input className="form__btn" type="submit" value='Search'/>
      </div>
     
      <div className="select">
        <select className="books__select" value={selected} onChange={handleChange}>
            <option value="title" >Title</option>
            <option value="author">Author</option>
            <option value="publisher">Publisher</option>
        </select>
      </div>
    </form>
    <div className="books__grid">
        {filtered && filtered.map((elem, i)=>{
            const {title, publisher, book_image, author, amazon_product_url:buy, description
            } = elem;
            return <BookItem key={i} title={title} publisher={publisher} img={book_image} author={author} buy={buy} description={description}/>
        })}
    </div>
  </div>
  )
}