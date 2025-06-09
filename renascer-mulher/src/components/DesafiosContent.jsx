import { Link } from 'react-router-dom';

function DesafiosContent() {
  return (
    <main className="corpo">
      <div className="row justify-content-left">
        <section className="secoes-principais col-md-6 text-left">
          <div className="gravidez-etapas">
            <h2 className="subtitulos-principais">Gravidez: Etapas e Cuidados</h2>
            <div className="divider"></div>
            <p>
              A gravidez é uma jornada de transformações. Cada etapa traz sintomas comuns, como náuseas, fadiga e mudanças de humor, que podem ser aliviados com cuidados simples. Manter uma alimentação equilibrada, exercícios leves e atenção à saúde mental são essenciais para garantir o bem-estar da mãe e do bebê. Saiba mais sobre como cuidar de você em cada fase para uma gestação saudável!
            </p>
            <button><Link to="/gravidez">Sintomas e Cuidados</Link></button>
          </div>
        </section>
      </div>
      <div className="row justify-content-left">
        <section className="secoes-principais col-md-6 text-left">
          <div className="gravidez-etapas">
            <h2 className="subtitulos-principais">Maternidade: Primeiros Passos</h2>
            <div className="divider"></div>
            <p>
              A chegada do bebê traz alegrias, mas também muitos desafios. Desde a amamentação e cuidados com a higiene até o sono e as novas rotinas, cada detalhe faz parte desse aprendizado. O puerpério pode ser um período intenso, e contar com apoio emocional faz toda a diferença para as mães de primeira viagem. Para você, que busca dicas e orientações para cuidar do seu bebê e de si mesma com mais confiança.
            </p>
            <button><Link to="/maternidade">Dicas e Apoio</Link></button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default DesafiosContent;