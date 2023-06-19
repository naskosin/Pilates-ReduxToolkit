import "./Pages.css";

export const Paginate = ({ currentPage, posts, postsPerPage, pageHandler, pageHandlerNext, pageHandlerPrev}) => {
  
   const length = Math.ceil(posts.length / postsPerPage);
   const pageNumbersArray = Array.from({ length }, (_, index) => index + 1);

  return (
    
      <div className="pagination-container">
        <p className="PagesParagraph" onClick={pageHandlerPrev}>
          Previous
        </p>
        <ul className="Pagination">
          {pageNumbersArray.map((number) => (
            <li
              key={number}
              onClick={() => pageHandler(number)}
              className={currentPage === number ? "selected" : ""}
            >
              {number}
            </li>
          ))}
        </ul>
        <p className="PagesParagraph" onClick={pageHandlerNext}>
          Next
        </p>
      </div>
   
  );
};
