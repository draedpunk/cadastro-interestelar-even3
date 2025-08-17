import { useState } from 'react';
import styles from './App.module.css';
import { Formulario } from './components/Formulario';

function App() {
  const [inscritos, setInscritos] = useState([]);
  const [exibirLista, setExibirLista] = useState(false);

  function toggleList() {
    setExibirLista((prev) => !prev);
  }

  return (
    <div className={styles['container-principal']}>
      <div className={styles['container-imagem']}>
        <img src="/espaco.png" alt="imagem de espaço roxo desenho" className={styles['bg-img']} />
        <div className={styles.logo}>
          <img src="/even3.png" alt="Even3 logo" className={styles['logo-img']} />
          <span><b>EVENTOS</b></span>
        </div>
        <h2 className={styles['texto-baixo-aventura']}>
          EMBARQUE EM UMA NOVA <span className={styles.highlight}>AVENTURA!</span>
        </h2>

        
        {inscritos.length > 0 && (
          <div className={styles.containerflutuante}>
            <button 
              type="button" 
              className={styles.botaoLista} 
              onClick={toggleList}
            >
              <img 
                src="/planet.png" 
                width={70}
                alt="exibe lista dos inscritos" 
                className={styles.iconeLista}
              />
            </button>

            {exibirLista && (
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
            )}
          </div>
        )}
      </div>
      <div className={styles['container-formulario']}>
        <Formulario inscritos={inscritos} botarInscritos={setInscritos} />
      </div>
    </div>
  );
}

export default App;