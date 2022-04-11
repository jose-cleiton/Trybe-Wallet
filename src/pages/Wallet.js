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
          {expenses.map(
            ({ id, value, currency, method, description, tag, exchangeRates }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{parseFloat(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>
                  {parseFloat(
                    exchangeRates[currency].ask,
                  ).toFixed(2)}

                </td>
                <td>
                  {parseFloat(
                    value,
                  ).toFixed(2) * parseFloat(
                    exchangeRates[currency].ask,
                  ).toFixed(2)}
                </td>
                <td>
                  {}
                </td>
                <td>
                  <button type="button">Editar</button>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            ),
          )}
        </tbody>

      </table>

    </div>

  );
};
export default Wallet;
