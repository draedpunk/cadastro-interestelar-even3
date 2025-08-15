import styles from './App.module.css';
import { Formulario } from './components/Formulario';

function App() {
  return (
    <div className={styles['container-principal']}>

      <div className={styles['container-imagem']}>
        <img src="/espaco.png" alt="Space background" className={styles['bg-img']} />

        <div className={styles.logo}>
          <img src="src/assets/logo-even3-light.png" alt="Even3 logo" className={styles['logo-img']} />
          <span><b>EVENTOS</b></span>
        </div>
        <h2 className={styles['texto-baixo-aventura']}>
          EMBARQUE EM UMA NOVA <span className={styles.highlight}>AVENTURA!</span>
        </h2>
      </div>
      <div className={styles['container-formulario']}>
        <Formulario />
      </div>

    </div>
  );
}

export default App;