import React, { useState, useEffect } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { salvarDespesa, atualizaDespesa, modoEdicao } from '../actions';

const FormularioWallet = () => {
  const moedas = useSelector(({ wallet }) => wallet?.currencies);
  const itemAtualExpenses = useSelector(({ wallet }) => wallet?.itemAtualExpenses);
  const modoBtn = useSelector(({ wallet }) => wallet?.modoBtnEdicao);
  const despesaAtual = useSelector(({ wallet }) => wallet?.expenses);
  const Al = 'Alimentação';
  const [id, setID] = useState(0);
  const [value, setValor] = useState(0);
  const [currency, setMoeda] = useState('USD');
  const [method, setmtdPagamento] = useState('Dinheiro');
  const [description, setDescricao] = useState('');
  const [tag, setcategoria] = useState(Al);
  const dispatch = useDispatch();

  useEffect(() => {
    if (modoBtn) {
      setID(itemAtualExpenses.id);
      setValor(itemAtualExpenses.value);
      setMoeda(itemAtualExpenses.currency);
      setmtdPagamento(itemAtualExpenses.method);
      setDescricao(itemAtualExpenses.description);
      setcategoria(itemAtualExpenses.tag);
    } else {
      setID(0);
      setValor(0);
      setMoeda('USD');
      setmtdPagamento('Dinheiro');
      setDescricao('');
      setcategoria(Al);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modoBtn]);

  const fetchExchange = async () => {
    const data = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resp) => resp.json());

    return data;
  };

  const adcionaDespesa = async () => {
    const exchangeRates = await fetchExchange();
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
  const editaDespesa = () => {
    const index = despesaAtual.indexOf(itemAtualExpenses);
    const despesasAtualizadas = [...despesaAtual];
    despesasAtualizadas.splice(index, 1, {
      id,
      value,
      currency,
      method,
      description,
      tag,
      exchangeRates: itemAtualExpenses.exchangeRates,
    });

    dispatch(atualizaDespesa(despesasAtualizadas));
    dispatch(modoEdicao());
  };

  return (

    <form onSubmit={ (e) => e.preventDefault() }>
      <div className="input-group mb-3">
        <label htmlFor="description" className="">
          Descrição
          <input
            className="form-control"
            onChange={ ({ target: { value: valor } }) => setDescricao(valor) }
            data-testid="description-input"
            value={ description }
            name="description"
            type="text"
          />
        </label>
      </div>
      <div className="input-group mb-3">
        <label htmlFor="id-valor" className="">
          Valor
          <input
            className="form-control"
            onChange={ ({ target: { value: valor } }) => setValor(valor) }
            id="id-valor"
            type="text"
            data-testid="value-input"
            value={ value }
          />

        </label>
      </div>
      <div className="input-group mb-3 ">
        <label htmlFor="currency" className="">
          Moeda
          <select
            className="form-select  mb-3"
            onChange={ ({ target: { value: valor } }) => setMoeda(valor) }
            id="currency"
            data-testid="currency-input"
            value={ currency }
          >

            {moedas.map((item, key) => <option key={ key }>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="input-group mb-3 ">
        <label htmlFor="id-pagamento" className="">
          Método de Pagamento
          <select
            className="form-select  mb-3"
            onChange={ ({ target: { value: valor } }) => setmtdPagamento(valor) }
            id="id-pagamento"
            data-testid="method-input"
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
      </div>

      <div className="input-group mb-3 ">
        <label htmlFor="id-categoria" className="">
          Categoria
          <select
            className="form-select  mb-3"
            onChange={ ({ target: { value: valor } }) => setcategoria(valor) }
            id="id-categoria"
            data-testid="tag-input"
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>

      <div className="input-group mb-3 ">
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={ modoBtn ? editaDespesa : adcionaDespesa }
        >
          {modoBtn ? 'Editar Despesa' : 'Adicionar despesa'}
        </button>
      </div>
    </form>
  );
};

export default FormularioWallet;
