import "./App.css";
import logo from "./assets/logo/icon-up-white.png";

function App() {
  return (
    <div className="App">
      <header className="topbar">
        <div className="uplogo">
          <img src={logo}></img>
        </div>

        <ul className="ulbar">
          <li className="libar">Sobre</li>
          <li className="libar">Serviços</li>
          <li className="libar">Método</li>
          <li className="libar">Planos</li>
        </ul>

        <button className="buttonbar">
          Entre em contato
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 268.832 268.832"
            >
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
            </svg>
          </div>
        </button>
      </header>
      <section className="hero">
        <div className="text-header">
          <h1>
            <b>Conectando ideias,</b>
            <br /> impulsionando inovação.
          </h1>
          <p className="work-p">Trabalhar com satisfação é a chave!</p>
          <p className="end-p">
            No final do dia, a diferença está em ter uma agência que não apenas
            atinja suas metas, mas também seja uma parceira com a qual você
            curta trabalhar.
          </p>
        </div>

        <div className="animation">
          <p className="p-animation">DESENVOLVIMENTO.</p>
          <p className="p-animation">DESENVOLVIMENTO.</p>
          <p className="p-animation">DESENVOLVIMENTO.</p>
        </div>
      </section>

      <section className="nadaainda">
        <div className="d-up">
          <div className="bola"></div>
          <h1 className="h1-bola">
            Nossa fórmula mágica mistura design, tecnologia e inovação para
            levar sua visão ao topo, e fazemos tudo isso com um UP típico
            UP.RISING!
          </h1>
        </div>

        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            id="circlePath"
            d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0

    "
          />
          <img src="./assets/icon-up-white.png"></img>

          <text>
            <textPath href="#circlePath">
              Agora ficou mais fácil dar um up!
            </textPath>
          </text>
        </svg>

        <div className="d-colab">
          <p className="text-colab">
            Colaboração fluída, compromisso à prova de segundas-feiras,
            excelência capaz de surpreender até a máquina de café, e processos
            simplificados que evitam burocracia desnecessária.
          </p>
          <button className="buttonbar">
            Bora dar um up
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 268.832 268.832"
              >
                <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      <section className="w-w-do">
        <div className="ww-header">
          <h1 className="h1-ww">SE LIGA NO QUE FAZEMOS</h1>
          <p>O trabalho excepcional é a base, fazer o que amamos é a missão.</p>
        </div>

        <div className="button-ww">
          <button className="app-ww">Apps</button>
          <button className="app-ww">Desenvolvimento web</button>
        </div>

        <div className="brand-n">
          <h1 className="h1-brand">BRAND NEW BRAND</h1>
          <i className="fa-light fa-eye"></i>
        </div>

        <div className="e-all-app">
          <div className="e-app">
            <p>
              Transformar ideias em experiências digitais. Imagine ter o poder
              de criar uma ferramenta que esteja nas suas mãos, 24 horas por
              dia, 7 dias por semana. É a oportunidade de moldar o futuro, dar
              vida a conceitos e torná-los acessíveis a qualquer pessoa com um
              smartphone.
            </p>
            <p>
              Na era digital, a criação de aplicativos é o veículo que leva a
              inovação diretamente para o seu bolso. Desde o design de
              interface, até a programação eficiente, cuidamos de todos os
              detalhes para criar uma experiência do usuário inesquecível. Vamos
              tornar seu próximo aplicativo uma realidade de sucesso!
            </p>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </section>

      <section className="">
        <div className="text-yd">
          <h1>You didn’t know design could be this good...</h1>
        </div>

        <div className="yd-b"></div>
      </section>
    </div>
  );
}

export default App;
