import React from 'react'
import ReactPaginate from 'react-paginate';
import style from '../pagination/Pagination.module.scss'
import { useSelector } from 'react-redux';
export default function Pagination({items,currentPage,onPageChange}) {
 
  return (

      <ReactPaginate className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event=>onPageChange(event.selected+1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={currentPage-1}
      />
    
  )
}
