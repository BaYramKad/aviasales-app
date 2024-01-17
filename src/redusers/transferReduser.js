const initialState = {
  allIsChecked: [],
  checkedList: [
    { title: 'Все', id: 'all', checked: false },
    { title: 'Без пересадок', id: 'without_transfer', checked: false },
    { title: '1 пересадка', id: 'one_transfer', checked: false },
    { title: '2 пересадки', id: 'two_transfer', checked: false },
    { title: '3 пересадки', id: 'three_transfer', checked: false },
  ],
};

export const transferReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL': {
      const allChecked = state.checkedList.map((item) => ({ ...item, checked: action.payload }));
      return {
        ...state,
        checkedList: allChecked,
      };
    }
    case 'CURRENT_CHECK': {
      const currentCheck = state.checkedList.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        } else {
          return item;
        }
      });
      const allCurruntChecked = currentCheck.slice(1).every((item) => item.checked === true);

      if (allCurruntChecked) {
        return {
          ...state,
          checkedList: currentCheck.map((item) => ({ ...item, checked: true })),
        };
      } else {
        return {
          ...state,
          checkedList: currentCheck.map((item) =>
            item.id === 'all' ? { ...item, checked: false } : item,
          ),
        };
      }
    }

    default:
      return state;
  }
};
