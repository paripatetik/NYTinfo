import Article from "./article";
import { useSelector } from "react-redux";

export default function ArticlesContainer({period, currentPage, amount}) {

const { articles} = useSelector((state)=> state.articles);
  let start = currentPage * amount;
  let end = start + amount;
  let currentArticles = articles.slice(start, end);
 
  
  console.log(articles.length, start, end);
  return (
    <div className="articles__body">
        <h3 className="articles__period">During {period} {period > 1 ? 'days': 'day'}</h3>
        <div className="articles__items">
            {currentArticles.map((elem, i)=> <Article key={i} data={elem}/> )}
        </div>
    </div>

  )
}