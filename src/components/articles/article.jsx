export default function Article({data}) {
  const {url, published_date: date, section, adx_keywords: keys, byline, abstract, media, title } = data;
  const {caption } = media;
  let img = 'https://www.elsevier.com/__data/assets/image/0009/899451/RA-review-articles-banner-1200-x-600.jpg'
  if(media[0]) {
     img = media[0]['media-metadata'][2].url;
  }
  let info = keys.split(';');

  return (
    <div className="article__item article">
         <div className="article__img" alt='#'>
            <img src={img} alt="#"/>
            <div className="article__info">
            <p>{section}</p> <p>{date}</p>
            <div className="article__keys"> 
                {info.map((elem, i) => <span key={i}>{elem}</span>)}
            </div>
            </div>    
        </div>
        <div className="article__body">
        <h3 className="article__title">{title}</h3>
        <h4 className="article__author">{byline}</h4>
        <div className="article__text">
            <p>{abstract}</p>
            <p>{caption}</p>
        </div>
        <a href={url} className="btn__buy" rel="noopener noreferrer" target="_blank">Read here</a>
        </div>
    </div>  
  )
}