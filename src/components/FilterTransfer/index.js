import React from 'react';
import styles from './TransferStyle.module.scss';

import { useDispatch, useSelector } from 'react-redux';

export const FilterTransfer = () => {
  const checkedList = useSelector((store) => store.checkedList);
  const dispatch = useDispatch();

  const onCheckedHandle = (event, id) => {
    if (id === 'all') {
      dispatch({ type: 'ALL', payload: event.target.checked });
    } else {
      dispatch({ type: 'CURRENT_CHECK', id: id });
    }
  };

  return (
    <div className={styles.transfer}>
      <span className={styles.count_title}>Количество пересадок</span>
      {checkedList?.map((item) => {
        const { title, id, checked } = item;
        return (
          <label key={id} htmlFor={id}>
            <input
              id={id}
              type="checkbox"
              checked={checked}
              onChange={(event) => onCheckedHandle(event, id)}
            />
            <span className={styles.check_box}></span>
            {title}
          </label>
        );
      })}
    </div>
  );
};
