const ESTADO_INICIAL = {
  currencies: [],
};

const walletReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
  case 'PEGAR_MOEDA':
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default walletReducer;
