import styles from './Formulario.module.css';
import { User, Envelope } from "phosphor-react";

export function Formulario() {
  return (
    <div className={styles.formulario}>
      <h1 className={styles.baseTexto}>INSCREVA-SE</h1>
      <h4 className={styles.baseTexto}>Informe seu nome e endereço de e-mail</h4>

      <form>
        <div className={styles.inputGroup}>
            {/* <span className={styles.icon}>
                <User />
            </span> */}
            <input 
            type="name"
            placeholder="Nome"
            className={styles.input}
            required
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
          />
        </div>

        <button type="submit" className={styles.cadastro}>
          Cadastrar
        </button>
      </form>
      
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