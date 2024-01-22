import React from 'react';
import ticketsStyle from './ticketsStyle.module.scss';

import { getCurrentPrice } from '../../assets/getCurrentPrice';
import { Ways } from './Ways';

export const Ticket = ({ carrier, price, segments }) => {
  const ways = segments.map((item) => {
    return <Ways key={Math.random()} {...item} price={price} />;
  });

  return (
    <li className={ticketsStyle.tickets_list__item}>
      <div>
        <h1>{getCurrentPrice(price)} Р</h1>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} />
      </div>
      <div className={ticketsStyle.tickets_list__ticket_info}>{ways}</div>
    </li>
  );
};
