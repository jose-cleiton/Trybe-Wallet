import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pegarMoeda } from '../actions';

const Cambio = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCambio = async () => {
      const data = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
      delete data.USDT;
      dispatch(pegarMoeda(Object.keys(data)));
    };

    fetchCambio();
  }, [dispatch]);

  return (
    <div>
      <span data-testid="header-currency-field">BRL</span>
    </div>
  );
};

export default Cambio;
