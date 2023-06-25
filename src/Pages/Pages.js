import "./Pages.css";

export const Paginate = ({ currentPage, posts, postsPerPage, pageHandler, pageHandlerNext, pageHandlerPrev}) => {

  const arraySize=(start,end)=>{
    const length = end-start+1;
  return Array.from({ length }, (_, index) => start + index);
  }
  
   const length = Math.ceil(posts.length / postsPerPage);
   let pageNumbersArray = arraySize(1,length)
   //Array.from({ length }, (_, index) => index + 1);

   const siblingCount=1;
   const pageNumbersTotal = 6;

   const leftSiblingIndex =currentPage - siblingCount;
   const rightSiblingIndex = currentPage + siblingCount;

   const shouldShowLeftDots = leftSiblingIndex > 2;
   const shouldShowRightDots = rightSiblingIndex < pageNumbersArray.length - 1;
   console.log( leftSiblingIndex)
   console.log( shouldShowLeftDots)

   console.log( shouldShowRightDots)
    
  


 if (!shouldShowLeftDots && shouldShowRightDots) {
  
   let leftItemCount = 3 + 2 * siblingCount;
   let length = leftItemCount + 2;
   let leftRange = arraySize(1, leftItemCount);
   pageNumbersArray = [...leftRange, "...",pageNumbersArray.length]
   
 }
 if (shouldShowLeftDots && !shouldShowRightDots) {
  console.log( leftSiblingIndex)
   let rightItemCount = 3 + 2 * siblingCount;
   let length = pageNumbersArray.length - rightItemCount + 1
   let rightRange = arraySize(length, pageNumbersArray.length);
   pageNumbersArray = [1, "...", ...rightRange];
 }

if (shouldShowLeftDots && shouldShowRightDots) {
console.log( leftSiblingIndex,rightSiblingIndex)

 let middleRange = arraySize( leftSiblingIndex,  
   rightSiblingIndex);
   pageNumbersArray = arraySize(1,length)
 pageNumbersArray = [1, "...", ...middleRange, "...",pageNumbersArray.length];}


  return (
    
      <div className="pagination-container">
        <p className="PagesParagraph" onClick={pageHandlerPrev}>
          Previous
        </p>
        <ul className="Pagination">
          {pageNumbersArray.map((number, index) => (
            <li
              key={index}
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
