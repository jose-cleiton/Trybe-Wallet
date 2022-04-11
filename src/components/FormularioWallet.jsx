import React, { useEffect, useState, useCallback } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { salvarDespesa, pegarMoeda } from '../actions';

const FormularioWallet = () => {
  const moedas = useSelector(({ wallet }) =>wallet?.currencies);
console.log(moedas);
  // const moedasInf = useSelector(({ wallet }) => wallet?.currencies);
  const [id, setID] = useState(0);
  const [value, setValor] = useState(0);
  const [currency, setMoeda] = useState('USD');
  const [method, setmtdPagamento] = useState('Dinheiro');
  const [description, setDescricao] = useState('');
  const [tag, setcategoria] = useState('Alimentação');
  // const [exchangeRates, setExchangeRates] = useState({});
  const dispatch = useDispatch();

  const fetchCambio = async () => {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resp) => resp.json());

    return data;
  };
  const adcionaDespesa = async () => {
    const exchangeRates = await fetchCambio();

    dispatch(salvarDespesa({
      id,
      value,
      currency,
      method,
      description,
      tag,
      exchangeRates,
    }));
    setID(id + 1);
    setValor(0);
    setDescricao('');
  };

  useEffect(() => {
    const test = async () => {
      const data = await fetchCambio();
      delete data.USDT;
      dispatch(pegarMoeda(data));
    };
  }, []);

  return (

    <form onSubmit={ (e) => e.preventDefault() }>

      <div>
        <label htmlFor="id-valor">
          Valor
          <input
            onChange={ ({ target: { value: valor } }) => setValor(valor) }
            id="id-valor"
            type="text"
            data-testid="value-input"
            value={ value }
          />
        </label>
      </div>

      <div>
        <label htmlFor="currency">
          Moeda
          <select
            onChange={ ({ target: { value: valor } }) => setMoeda(valor) }
            id="currency"
            data-testid="currency-input"
            value={ currency }

          >
            {moedas.map((item, key) => <option key={ key }>{ item }</option>)}
          </select>

        </label>

      </div>

      <div>
        <label htmlFor="id-pagamento">
          Método de Pagamento
          <select
            onChange={ ({ target: { value: valor } }) => setmtdPagamento(valor) }
            id="id-pagamento"
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>

          </select>

        </label>

      </div>

      <div>
        <label htmlFor="id-categoria">
          Categoria
          <select
            onChange={ ({ target: { value: valor } }) => setcategoria(valor) }
            id="id-categoria"
            data-testid="tag-input"

          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>

          </select>

        </label>

      </div>

      <div>
        <label htmlFor="description">
          Descrição
          <input
            onChange={ ({ target: { value: valor } }) => setDescricao(valor) }
            data-testid="description-input"
            value={ description }
            name="description"
            type="text"

          />

        </label>

      </div>

      <div>
        <button
          type="submit"
          onClick={ adcionaDespesa }

        >
          Adicionar despesa
        </button>

      </div>

    </form>

  );
};

export default FormularioWallet;
