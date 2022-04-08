import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pegarMoeda } from '../actions';

const Cambio = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCambio = async () => {
      const data = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
      const moedas = Object.keys(data).filter((cambio) => cambio !== 'USDT');

      console.log(moedas);
      dispatch(pegarMoeda(moedas));
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
