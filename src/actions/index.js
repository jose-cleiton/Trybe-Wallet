// Coloque aqui suas actions

export const SALVAR_EMAIL = 'SALVAR_EMAIL';
export const salvarEmail = (payload) => ({
  type: SALVAR_EMAIL,
  payload,
});

export const PEGAR_MOEDA = 'PEGAR_MOEDA';
export const pegarMoeda = (payload) => ({
  type: PEGAR_MOEDA,
  payload,
});

export const SALVAR_DESPESA = 'SALVAR_DESPESA';
export const salvarDespesa = (payload) => ({
  type: SALVAR_DESPESA,
  payload,
});

export const ATUALIZA_DESPESA = 'ATUALIZA_DESPESA';
export const deletaDespesa = (payload) => ({
  type: ATUALIZA_DESPESA,
  payload,
});
export const EDITA_DESPESA = 'EDITA_DESPESA';
export const editaDespesa = (payload) => ({
  type: EDITA_DESPESA,
  payload,
});
export const MODO_EDICAO = 'MODO_EDICAO';
export const modoEdicao = (payload) => ({
  type: MODO_EDICAO,
  payload,
});

export const atualizaDespesa = (payload) => ({
  type: ATUALIZA_DESPESA,
  payload,
});
