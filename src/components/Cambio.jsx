import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pegarMoeda } from '../actions';

const Cambio = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCambio = async () => {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      dispatch(pegarMoeda(Object.keys(data)));
      console.log(Object.keys(data));
    };

    fetchCambio();
  }, [dispatch]);

  return (

    <section>

      <p data-testid="header-currency-field">BRL</p>
    </section>

  );
};

export default Cambio;
