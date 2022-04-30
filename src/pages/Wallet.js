import React from 'react';
import FormularioWallet from '../components/FormularioWallet';
import Header from '../components/Header';
import Tabela from '../components/Tabela';

const Wallet = () => (

  <div className="mainWallet gap-3">
    <Header />
    <FormularioWallet />
    <Tabela />
  </div>

);
export default Wallet;
