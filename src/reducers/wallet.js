const ESTADO_INICIAL = {

  currencies: [],
  expenses: [],

};

const walletReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case 'PEGAR_MOEDA':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'SALVAR_DESPESA':

    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default walletReducer;
