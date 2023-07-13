export default function ArticlesBtns({pages, setCurrentPage}) {
  
 function handleClick(e, i){
  setCurrentPage(i);
  let div = e.target.closest('.articles__pagination'); 
  div.querySelectorAll('button').forEach(elem=>elem.classList.remove('active'));
  e.target.classList.add('active');
 }

  return (
    <div className="articles__pagination">
        {[...Array(pages),].map((e, i) => (
            <button key={i} className="btn-article" onClick={(e) =>handleClick(e, i)}>{i+1}</button>
        ))}
    </div>
  )
}