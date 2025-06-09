import '../styles/style-main-content.css';

function MainContent() {
  return (
    <main className="corpo">
      <section className="sobre text-center p-4 shadow rounded">
        <div className="sobre-objetivo mx-auto">
          <h2>Sobre Nós</h2>
          <div className="divider mx-auto"></div>
          <p>
            Nosso objetivo é criar um espaço acolhedor para compartilhar informações e experiências sobre as dificuldades da gravidez, desafios e dicas da maternidade. Queremos oferecer apoio para que você se sinta ouvida e encorajada a enfrentar os altos e baixos dessa fase tão especial. Além disso, disponibilizamos conteúdos sobre cuidados com a saúde durante a gestação e orientações práticas para o dia a dia com o bebê.
          </p>
          <button><a href="/sobre">Saiba mais</a></button>
        </div>
      </section>

      <div className="row justify-content-center">
        <section className="secoes-principais col-md-6 text-left">
          <div className="gravidez-etapas">
            <h2 className="subtitulos-principais">Gravidez: Etapas e Cuidados</h2>
            <div className="divider"></div>
            <p>
              A gravidez é uma jornada de transformações. Cada etapa traz sintomas comuns, como náuseas, fadiga e mudanças de humor, que podem ser aliviados com cuidados simples. Manter uma alimentação equilibrada, exercícios leves e atenção à saúde mental são essenciais para garantir o bem-estar da mãe e do bebê. Saiba mais sobre como cuidar de você em cada fase para uma gestação saudável!
            </p>
            <button><a href="/gravidez">Sintomas e Cuidados</a></button>
          </div>
        </section>
        <section className="secoes col-md-principais text-left">
          <div className="gravidez-etapas">
            <h2 className="subtitulos-principais">Maternidade: Primeiros Passos</h2>
              <div className="divider"></div>
              <p>
                  Os primeiros meses com o bebê são cheios de aprendizados. Amamentação, sono e cuidados básicos podem ser desafiadores, mas com dicas práticas e apoio, você pode tornar essa fase mais leve. Descubra como se preparar para os primeiros passos da maternidade e criar uma rotina saudável para você e seu filho.
              </p>
              <button><a href="/maternidade">Dicas Práticas</a></button>
          </div>
        </section>
      </div>

      <section className="sobre text-center p-4 shadow rounded">
        <div className="sobre-objetivo mx-auto">
          <h2>Junte-se à Nossa Comunidade</h2>
          <div className="divider mx-auto"></div>
          <p>
            Compartilhe suas experiências, encontre apoio e dicas de especialistas sobre maternidade, cuidados com o bebê e muito mais. Juntos, vamos construir uma base mais forte para sua família!
          </p>
          <button className="botao glow"><a href="/comunidade">Faça parte agora!</a></button>
        </div>
      </section>
    </main>
  );
  }

export default MainContent;