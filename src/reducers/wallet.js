const ESTADO_INICIAL = {
  currencies: [],
  expenses: [],
  itemAtualExpenses: {},
  modoBtnEdicao: false,
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

  case 'ATUALIZA_DESPESA':
    return {
      ...state,
      expenses: action.payload,
    };
  case 'EDITA_DESPESA':
    return {
      ...state,
      itemAtualExpenses: action.payload,
    };
  case 'MODO_EDICAO':
    return {
      ...state,
      modoBtnEdicao: !state.modoBtnEdicao,

    };
  default:
    return state;
  }
};

export default walletReducer;
