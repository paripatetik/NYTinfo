import { useState } from "react"

export default function BookItem({title, publisher, img, author, buy, description}) {
  const [desc, setDesc] = useState(false);
    
  return (
    <article className="book__item">
            <h3 className="book__item-title">{title}</h3>
            <h4 className="book__item-author">By {author}</h4>
            <img src={img} alt={title}/>
             <p className="book__item-publisher">{publisher}</p>
            <div className="book__item-info">
            <button className="btn__desc" onClick={()=>setDesc(!desc)}>Description</button>
             <p className={desc? "book__item-desc active": "book__item-desc"}>{description}</p>
            </div>
            <a href={buy} className="btn__buy" rel="noopener noreferrer" target="_blank">Buy here</a>
    </article>
  )
}