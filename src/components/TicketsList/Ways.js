import React from 'react';

import ticketsStyle from './ticketsStyle.module.scss';
import { getCurrentTime } from '../../assets/getCurrentTime';

export const Ways = ({ origin, destination, duration, stops }) => {
  const countStops = stops.length;
  const wordForStops = countStops === 1 ? `${countStops} пересадка` : `${countStops} пересадки`;
  const stopsSpan = stops.map((item, i) => {
    return <span key={Math.random()}>{item}</span>;
  });

  return (
    <section>
      <div>
        <span>
          {origin} – {destination}
        </span>
        <span> 10:45 – 08:00 </span>
      </div>
      <div>
        <span>В пути</span>
        <span>{getCurrentTime(duration)}</span>
      </div>
      <div>
        <span>{countStops === 0 ? 'Нет пересадок' : wordForStops}</span>
        <div className={ticketsStyle.stops_style}>{stopsSpan}</div>
      </div>
    </section>
  );
};
