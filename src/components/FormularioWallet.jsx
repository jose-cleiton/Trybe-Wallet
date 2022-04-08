import React from 'react';
import {
  useSelector,
} from 'react-redux';

const FormularioWallet = () => {
  const moedas = useSelector(({ wallet }) => wallet.currencies);
  return (

    <form>

      <div>
        <label htmlFor="id-valor">
          Valor
          <input id="id-valor" type="text" data-testid="value-input" />

        </label>

      </div>

      <div>
        <label htmlFor="id-moeda">
          Moeda
          <select id="id-moeda" data-testid="currency-input">
            {moedas.map((item, key) => (<option key={ key }>{item}</option>))}
          </select>

        </label>

      </div>

      <div>
        <label htmlFor="id-pagamento">
          Método de Pagamento
          <select id="id-pagamento" data-testid="method-input">
            <option value="1">Dinheiro</option>
            <option value="2">Cartão de crédito</option>
            <option value="3">Cartão de débito</option>

          </select>

        </label>

      </div>

      <div>
        <label htmlFor="id-categoria">
          Categoria
          <select id="id-categoria" data-testid="tag-input">
            <option value="1">Alimentação</option>
            <option value="2">Lazer</option>
            <option value="3">Trabalho</option>
            <option value="3">Transporte</option>
            <option value="3">Saúde</option>

          </select>

        </label>

      </div>

      <div>
        <label htmlFor="id-descricao">
          Descrição:
          <input id="id-descricao" data-testid="description-input" />

        </label>

      </div>

      <div>
        <button type="button">
          Adicionar Despesas
        </button>

      </div>

    </form>

  );
};

export default FormularioWallet;
