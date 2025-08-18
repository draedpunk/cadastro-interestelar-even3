import { useState } from 'react';
import styles from './Formulario.module.css';

export function Formulario({ inscritos, botarInscritos }) {
  const [nome, botarNome] = useState('');
  const [email, botarEmail] = useState('');
  const [mensagem, botarMensagem] = useState('');
  const [mostrarMensagem, botarMostrarMensagem] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    if (nome && email) {
      botarInscritos([...inscritos, { nome, email }]);
      botarNome('');
      botarEmail('');

      botarMensagem('Cadastro realizado! Clique no planeta roxo ao lado para visualizar.');
      botarMostrarMensagem(true);
      setTimeout(() => botarMostrarMensagem(false), 5000);
    }
  }

  return (
    <div className={styles.formulario}>
      <h1 className={styles.baseTexto}>INSCREVA-SE</h1>
      <h4 className={styles.baseTexto}>Informe seu nome e endereço de e-mail</h4>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputelementos}>
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

      {/* {mensagem && <p>{mensagem}</p>} */}
      {mensagem && (
        <p className={`${styles.mensagemSucesso} ${mostrarMensagem ? styles.mostrar : ''}`}>
          {mensagem}
        </p>
      )}

      <hr className={styles.divisor} />
      <p>Ou cadastre-se com sua conta do</p>

      <div className={styles.contas}>
        <button className={styles.googleBotao}>
          <img src="/google.png" alt="Google" /> Google
        </button>
        <button className={styles.facebookBotao}>
          <img src="/facebook.png" alt="Facebook" /> Facebook
        </button>
      </div>

      <p>
        Ao registrar, você concorda com nossos <a href="https://www.linkedin.com/in/rodrigues-pamela" target="_blank">Termos e Condições</a>.
      </p>
    </div>
  );
}
