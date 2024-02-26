import React from 'react';
import Sorting from '../components/sorting/Sorting';
import PizaBlock from '../components/piza_block/PizaBlock';
import Categories from '../components/categories/Categories';
import Skeleton from '../components/piza_block/Loading';
import Search from '../components/search/Search';

import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

export default function Home() {
  const { categoryId, sorting, search } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sort = sorting.sortProperty;
    const order = sorting.order;
    const searchUrl = search ? `search=${search}` : '';

    dispatch(fetchPizzas({ category, sort, order, searchUrl }));
  }, [categoryId, sorting, search]);
  let itemsBlock;
  try {
    itemsBlock = (
      <div class='content__items'>
        {status === 'loading'
          ? [...new Array(6)].map((_, index) => (
              <div key={index} className='pizza-block-wrapper skeleton'>
                <Skeleton key={index} />
              </div>
            ))
          : items.map((item) => <PizaBlock key={item.id} {...item} />)}
      </div>
    );
  } catch (err) {
    itemsBlock = <h2>ничего не найдено</h2>;
  }
  return (
    <div class='container'>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '-20px 0 15px' }}>
        <Search />
      </div>
      <div class='content__top'>
        <Categories
          value={categoryId}
          onChangeCategory={(index) => dispatch(setCategoryId(index))}
        />
        <Sorting />
      </div>
      <h2 class='content__title'>Все пиццы</h2>

      <div style={{ textAlign: 'center' }}>{itemsBlock}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}></div>
    </div>
  );
}
