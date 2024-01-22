import React from 'react';
import styles from './FilterBestStyle.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterBestTickets } from '../../actionCreators';

export const FilterBest = () => {
  const dispatch = useDispatch();
  const isFilteredOn = useSelector((state) => state.ticketsReduser.isFiltered);

  const onFilterBestHandle = (option) => {
    dispatch(filterBestTickets(option, isFilteredOn));
  };
  const onHandleTab = (event) => {
    const target = [...event.currentTarget.children];
    target.forEach((button) => {
      if (button.textContent === event.target.textContent) {
        button.classList.add(styles.active);
      } else {
        button.classList.remove(styles.active);
      }
    });
  };

  return (
    <div className={styles.best} onClick={onHandleTab}>
      <button onClick={() => onFilterBestHandle('cheap')}>Самый Дешевый</button>
      <button onClick={() => onFilterBestHandle('faster')}>Самый Быстрый</button>
      <button>Самый Оптимальный</button>
    </div>
  );
};
