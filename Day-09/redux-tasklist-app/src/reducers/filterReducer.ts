const filterReducer = (state = 'ALL', action: any) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export const filterAction = (filter: string) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export default filterReducer