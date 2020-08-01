import React, {useState} from 'react';
import s from './Paginator.module.css';

const Paginator = ({page, pagesCount, onChangePage, portionSize = 10}) => {
  let pages = [];
  for (let i = 1; i <= pagesCount; i++)
    pages.push(i);

  let portionsCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  return (
    <div className={s.paginator}>
      {portionNumber > 1 &&
      <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

      {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
        .map(p => <span className={`${s.page} ${page === p && s.selectedPage}`} key={p}
                        onClick={() => onChangePage(p)}>{p}</span>)}

      {portionsCount > portionNumber &&
      <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
    </div>
  );
};
export default Paginator;