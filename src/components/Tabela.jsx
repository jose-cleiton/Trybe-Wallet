import React from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { deletaDespesa, editaDespesa, modoEdicao } from '../actions';

const Tabela = () => {
  const { expenses } = useSelector(({ wallet }) => wallet);
  const dispatch = useDispatch();

  const deletaItem = (id) => {
    const NovoExpense = expenses.filter((item) => item.id !== id);
    dispatch(deletaDespesa(NovoExpense));
  };
  const editaItem = (id) => {
    const editExpense = expenses.find((item) => item.id === id);
    dispatch(editaDespesa(editExpense));
    dispatch(modoEdicao());
  };

  return (

    <table className="table table-success table-striped">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(({
          description,
          tag,
          method,
          value,
          currency,
          exchangeRates,
          id,
        }) => (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{parseFloat(value).toFixed(2)}</td>
            <td>{exchangeRates[currency].name.split('/')[0]}</td>
            <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
            <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
            <td>Real</td>
            <td>

              <button
                className="btn btn-warning btn-group"
                type="button"
                data-testid="edit-btn"
                onClick={ () => editaItem(id) }
              >
                Editar
              </button>

              <button
                className="btn btn-danger"
                type="button"
                key={ id }
                data-testid="delete-btn"
                onClick={ () => deletaItem(id) }
              >
                Excluir
              </button>

            </td>
          </tr>
        ))}
      </tbody>
    </table>

  );
};
export default Tabela;
