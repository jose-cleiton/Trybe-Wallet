import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { salvarEmail } from '../actions';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const seis = 6;
  const dispatch = useDispatch();

  const passarProEstado = () => {
  // desconstruir ristory
    const { history: { push } } = props;
    // mandando do local para o global
    dispatch(salvarEmail(email));
    // direcionar para
    push('/carteira');
  };

  return (
    <section>
      <input
        type="text"
        data-testid="email-input"
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <input
        type="password"
        data-testid="password-input"
        onChange={ ({ target: { value } }) => setSenha(value) }
      />
      <button
        type="button"
        disabled={ !(regex.test(email) && senha.length >= seis) }
        onClick={ passarProEstado }
      >
        Entrar

      </button>
    </section>
  );
};

export default Login;
