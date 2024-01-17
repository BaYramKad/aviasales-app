import React from 'react';
import logoCompany from '../../assets/S7-logo.svg';
import ticketsStyle from './TicketsStyle.module.scss';

export const TicketsList = () => {
  return (
    <ul className={ticketsStyle.tickets_list}>
      <li className={ticketsStyle.tickets_list__item}>
        <div>
          <h1>13 000p</h1>
          <img src={logoCompany} />
        </div>
        <div className={ticketsStyle.tickets_list__ticket_info}>
          <section>
            <div>
              <span>MOW – HKT</span>
              <span>10:45 – 08:00</span>
            </div>
            <div>
              <span>В пути</span>
              <span>21ч 15м</span>
            </div>
            <div>
              <span>2 пересадки</span>
              <span>HKG, JNB</span>
            </div>
          </section>

          <section>
            <div>
              <span>MOW – HKT</span>
              <span>11:20 – 00:50</span>
            </div>
            <div>
              <span>В пути</span>
              <span>13ч 30м</span>
            </div>
            <div>
              <span>1 пересадка</span>
              <span>HKG</span>
            </div>
          </section>
        </div>
      </li>
    </ul>
  );
};
