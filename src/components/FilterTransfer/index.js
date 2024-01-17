import React from 'react';
import styles from './TransferStyle.module.scss';

export const FilterTransfer = () => {
  return (
    <div className={styles.transfer}>
      <span className={styles.count_title}>Количество пересадок</span>

      <label htmlFor="all">
        <input id="all" type="checkbox" />
        <span className={styles.check_box}></span>
        Все
      </label>
      <label htmlFor="without_transfer">
        <input id="without_transfer" type="checkbox" />
        <span className={styles.check_box}></span>
        Без пересадок
      </label>
      <label htmlFor="one_transfer">
        <input id="one_transfer" type="checkbox" />
        <span className={styles.check_box}></span>1 пересадка
      </label>
      <label htmlFor="two_transfer">
        <input id="two_transfer" type="checkbox" />
        <span className={styles.check_box}></span>2 пересадки
      </label>
      <label htmlFor="three_transfer">
        <input id="three_transfer" type="checkbox" />
        <span className={styles.check_box}></span>3 пересадки
      </label>
    </div>
  );
};
