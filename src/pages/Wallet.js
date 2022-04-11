import React from 'react';
import { useSelector } from 'react-redux';
import FormularioWallet from '../components/FormularioWallet';
import Header from '../components/Header';

const Wallet = () => {
  const { expenses } = useSelector(({ wallet }) => wallet);

  return (
    <div>

      <Header />

      <FormularioWallet />
      <table>
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
                  type="button"
                  data-testid="edit-btn"
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  );
};
export default Wallet;
