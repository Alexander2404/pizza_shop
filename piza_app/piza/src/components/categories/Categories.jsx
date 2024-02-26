import React from 'react';

export default function Categories({value,onChangeCategory}) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', ' Гриль', 'Острые', 'Закрытые'];

  return (
    <>
      <div class='categories'>
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => onChangeCategory(index)} class={value === index ? 'active' : ''}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
