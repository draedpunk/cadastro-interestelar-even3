import { useState } from 'react';
import styles from './Formulario.module.css';

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

            <input 
            type="name"
            placeholder="Nome"
            className={styles.input}
            required
            value={nome}
            onChange={(e) => botarNome(e.target.value)}
            />
            
          <input
            type="email"
            placeholder="Seuemail@yahoo.com"
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

      <hr className={styles.divisor} />
      <p>Ou cadastre-se com sua conta do</p>

      <div className={styles.contas}>
        <button className={styles.googleBotao}>
          <img src="/googlelogo.png" 
            alt="Google" 
            /> Google
        </button>
        <button className={styles.facebookBotao}>
          <img src="/facebooklogo.png" 
            alt="Facebook"  
             /> Facebook
        </button>

      </div>
      <p>
        Ao registrar, você concorda com nossos <a href="https://www.linkedin.com/in/rodrigues-pamela" target="_blank">Termos e Condições</a>.
      </p>
      <p>Modelo original por <a href="https://www.figma.com/community/file/1316288257262209196/login-signup-web-mobile-app-design" target="_blank"> Ibrahim Memon</a>.</p>
    </div>
  );
}