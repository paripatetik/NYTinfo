import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItems} from '../../features/books/booksSlice';

export default function BooksButton({value, name, i, setToggle}) {
    const [activeBtn, setActiveBtn] = useState(0);
    const dispatch = useDispatch();
    function handleClick(e, i){
        setToggle(false);
        let listName = e.target.value;
        let url = `https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=mrkQesiWSzjZaG3J1UrOOD4SmpfQ1aAa`;
        setActiveBtn(i);
        dispatch(getItems(url));
    }
  return (
    <button className='books__btn' value={value} onClick={(e) =>handleClick(e, i)}>{name}</button>
  )
}