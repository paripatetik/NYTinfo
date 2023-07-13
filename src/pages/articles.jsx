import { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems} from '../features/articles/articlesSlice';
import gif from '../assets/loading.gif';
import ArticlesBtns  from '../components/articles/articlesbtns';
import ArticlesContainer from '../components/articles/articlesContainer';
const url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=mrkQesiWSzjZaG3J1UrOOD4SmpfQ1aAa';

export default function Articles() {
  const {isLoading, articles} = useSelector((state)=> state.articles);
  const [currentPage, setCurrentPage] = useState(0);
  const [period, setPeriod] = useState(1);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getItems(url));
  }, []);
  const amount = 4
  const length = articles.length;
  const pages = length / amount;
  
  function handleClick(e){
    let div = e.target.closest('.articles__filter'); 
    div.querySelectorAll('button').forEach(elem=>elem.classList.remove('active'));
    e.target.classList.add('active');
    let value = e.target.value;
    const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${value}.json?api-key=mrkQesiWSzjZaG3J1UrOOD4SmpfQ1aAa`;
    setPeriod(value);
    dispatch(getItems(url));
  }

  return (
    <div className="content __container">
    <h1 className="main__title">Articles</h1>
    <h2 className="main__subtitle">Most viewed articles on New York Times</h2>
    <div className='articles__filter'>
      <button className='btn-article' value='1' onClick={handleClick}>Current</button>
      <button className='btn-article' value='7' onClick={handleClick}>7 Days</button>
      <button className='btn-article' value='30'onClick={handleClick}>30 Days</button>
    </div>
    
    <div className="articles__body">
      <div className="articles__content">
        {isLoading ? 
            <div className='content __container'>
                <h1 className='loading'> Loading... </h1>
                <img src={gif} alt="loading" className='loading__gif'/>
            </div>:<ArticlesContainer period={period} articles={articles} currentPage={currentPage} amount={amount}/>}
      </div>
      {!isLoading && <ArticlesBtns pages={pages} setCurrentPage={setCurrentPage} />} 
    </div>
    </div>

  )
}