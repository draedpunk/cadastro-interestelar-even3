import { useState } from 'react';
import styles from './Formulario.module.css';
import { User, Envelope } from "phosphor-react";

export function Formulario({inscritos, botarInscritos}) {
  const [nome, botarNome] = useState('');
  const [email, botarEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (nome && email) {
      botarInscritos([...inscritos, { nome, email }]);
      botarNome('');
      botarEmail('');
    }
  }

  return (
    <div className={styles.formulario}>
      <h1 className={styles.baseTexto}>INSCREVA-SE</h1>
      <h4 className={styles.baseTexto}>Informe seu nome e endereço de e-mail</h4>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
            {/* <span className={styles.icon}>
                <User />
            </span> */}
            <input 
            type="name"
            placeholder="Nome"
            className={styles.input}
            required
            value={nome}
            onChange={(e) => botarNome(e.target.value)}
            />
            {/* 
          <span className={styles.icon}>
            <Envelope />
          </span> */}
          <input
            type="email"
            placeholder="seuemail@yahoo.com"
            className={styles.input}
            required
            value={email}
            onChange={(e) => botarEmail(e.target.value)}
          />
        </div>

        <button type="submit" 
          className={styles.cadastro} disabled={!nome || !email}
          >
          Cadastrar
        </button>
      </form>

      {/* {inscritos.length > 0 && (
        <div className={styles.listaInscritosToggleContainer}>
        <button 
          type="button" 
          className={styles.botaoLista} 
          onClick={toggleList}
        >
          <img 
            src="src/assets/list.svg" 
            alt="exibe lista dos inscritos" 
            className={styles.iconeLista}
          />
          <span>Ver inscritos</span>
        </button>
      </div>
      )}

      {exibirLista && inscritos.length > 0 ? (
        <div className={styles.listaInscritosContainer}>
          <h3>Pessoas inscritas:</h3>
          <ul>
            {inscritos.map((pessoa, idx) => (
              <li key={idx}>
                <mark>{pessoa.nome}</mark> — {pessoa.email}
              </li>
            ))}
          </ul>
        </div>
      ) : null} */}

      <hr className={styles.divisor} />
      <p>Ou cadastre-se com sua conta do</p>

      <div className={styles.contas}>
        <button className={styles.googleBotao}>
          <img src="src/assets/googlelogo.png" 
            alt="Google" 
            /> Google
        </button>
        <button className={styles.facebookBotao}>
          <img src="src/assets/facebooklogo.png" 
            alt="Facebook"  
             /> Facebook
        </button>

      </div>
      <p>
        Ao registrar, você concorda com nossos <a href="#">Termos e Condições</a>.
      </p>
      <p>Modelo original por <a href="https://www.figma.com/community/file/1316288257262209196/login-signup-web-mobile-app-design" target="_blank"> Ibrahim Memon</a>.</p>
    </div>
  );
}