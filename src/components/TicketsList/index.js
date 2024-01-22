import React, { useCallback, useEffect } from 'react';
import { message } from 'antd';
import styles from './MainTicket.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { asyncThunkTikets } from '../../thunk/thunkTickets';
import { Empty } from 'antd';
import { Ticket } from './Ticket';
import { Spinner } from '../../assets/Spinner';

export const TicketsList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticketsReduser.tickets);
  const isLoading = useSelector((state) => state.ticketsReduser.loading);
  const filterTickets = useSelector((state) => state.ticketsReduser.filterTickets);
  const isFiltered = useSelector((state) => state.ticketsReduser.isFiltered);
  const { emptyData, serverError } = useSelector((state) => state.errorReduser);
  const [messageApi, contextHolder] = message.useMessage();

  const error = useCallback(() => {
    messageApi.open({
      type: 'error',
      content: serverError.serverErorrMessage,
    });
  }, [messageApi, serverError.serverErorrMessage]);
  const messagePopup = useCallback(() => {
    messageApi.open({
      type: 'success',
      content: 'Билеты получены',
    });
  }, [messageApi]);
  useEffect(() => {
    dispatch(asyncThunkTikets());
  }, [dispatch]);

  useEffect(() => {
    if (serverError.isServerError) {
      error();
    }
    if (tickets.length !== 0 && !isLoading) {
      messagePopup();
    }
  }, [serverError.isServerError, isLoading, tickets.length, error, messagePopup]);
  const pending = isLoading ? <Spinner /> : null;
  const flatState = isFiltered ? filterTickets.flat().slice(0, 5) : tickets.flat().slice(0, 5);

  const ticketsList =
    !isLoading && emptyData.isEmpty ? (
      <Empty description={emptyData.message} />
    ) : (
      flatState.map((item) => {
        return <Ticket key={Math.random() * item.price} {...item} />;
      })
    );

  return (
    <ul className={styles.tickets_list}>
      {pending}
      {contextHolder}
      {ticketsList}
    </ul>
  );
};
