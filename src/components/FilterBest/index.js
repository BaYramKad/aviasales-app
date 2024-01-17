import React from 'react';
import styles from './FilterBestStyle.module.scss';

export const FilterBest = () => {
  return (
    <div className={styles.best}>
      <button>Самый Дешевый</button>
      <button className={styles.active}>Самый Быстрый</button>
      <button>Самый Оптимальный</button>
    </div>
  );
};
