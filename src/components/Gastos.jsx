import React from 'react';
import { useSelector } from 'react-redux';

const Gastos = () => {
  const { expenses } = useSelector(({ wallet }) => wallet);
  const valorAtualizado = expenses && (expenses.map(
    (
      { value, currency, exchangeRates },
    ) => (parseFloat(value) * parseFloat(exchangeRates[currency].ask)
    ),
  ).reduce((acumulador, vlCorrente) => acumulador + vlCorrente, 0)).toFixed(2);

  const valorGastos = () => (
    expenses.length > 0
      ? valorAtualizado
      : 0
  );

  return (
    <div>
      <span data-testid="total-field">{valorGastos()}</span>
    </div>
  );
};

export default Gastos;
