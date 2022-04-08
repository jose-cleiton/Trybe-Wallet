// Coloque aqui suas actions

export const SALVAR_EMAIL = 'SALVAR_EMAIL';
export const PEGAR_MOEDA = 'PEGAR_MOEDA';

export const salvarEmail = (payload) => ({
  type: SALVAR_EMAIL,
  payload,
});

export const pegarMoeda = (payload) => ({
  type: PEGAR_MOEDA,
  payload,
});
