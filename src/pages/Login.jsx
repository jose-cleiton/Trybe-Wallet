import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { salvarEmail } from '../actions';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const seis = 6;
  const dispatch = useDispatch();
  const passarProEstado = () => {
    // desconstruir ristory
    const {
      history: { push },
    } = props;
    // mandando do local para o global
    dispatch(salvarEmail(email));
    // direcionar para
    push('/carteira');
  };

  return (

    <section className="login shadow-lg p-3 mb-5 bg-body rounded ">
      <div className="input-group input-group-sm mb-3 ">
        <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
        <input
          className="form-control"
          value={ email }
          name="email"
          type="text"
          data-testid="email-input"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </div>

      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Senha</span>
        <input
          className="form-control "
          value={ senha }
          type="password"
          data-testid="password-input"
          onChange={ ({ target: { value } }) => setSenha(value) }
        />
      </div>

      <div className=" mb-3">
        <button
          className="btn btn-primary "
          type="button"
          disabled={
            !(regex.test(email) && senha.length >= seis)
          }
          onClick={ passarProEstado }
        >
          Entrar
        </button>
      </div>
    </section>

  );
};
Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func,
  }),
  saveUserEmail: propTypes.func,
}.isRequired;
export default Login;
