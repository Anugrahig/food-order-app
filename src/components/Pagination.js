import React from "react";
import { useState } from "react";

const Pagination = (props) => {
  // console.log("Pagination", props.filteredDishes);
  const [activePage, setActivePage] = useState(1);
  let numberOfPages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.filteredDishes.length / props.itemsPerPage);
    i++
  ) {
    numberOfPages.push(i);
  }
  const showNextDishesHandler = (event) => {
    let currentPage = event.target.id;
    props.setCurrentPage(currentPage);
    setActivePage(currentPage);
  };
  let pages = numberOfPages.map((pageNumber, key) => {
    return (
      <li
        key={key}
        id={pageNumber}
        onClick={showNextDishesHandler}
        // eslint-disable-next-line eqeqeq
        className={pageNumber == activePage ? "active" : ""}
      >
        {pageNumber}
      </li>
    );
  });
  // {console.log("pageNumber...: ", pageNumber)}

  return (
    <section>
      <ul className="pagination flex">{pages}</ul>
    </section>
  );
};

export default Pagination;
