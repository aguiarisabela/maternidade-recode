import Card from './Card.jsx';
import imgEmpoderamento from '../assets/gravidez.jpg';
import imgEmpatia from '../assets/maternidade.png';
import '../styles/style-sobre.css';

function SobreContent() {
  return (
    <main className="corpo">
      <section className="sobre text-center p-4 shadow rounded">
        <div className="sobre-objetivo mx-auto">
          <h2>Sobre Nós</h2>
          <div className="divider mx-auto"></div>
          <p>
            Nosso objetivo é criar um espaço acolhedor para compartilhar informações e experiências sobre as dificuldades da gravidez, desafios e dicas da maternidade. Queremos oferecer apoio para que você se sinta ouvida e encorajada a enfrentar os altos e baixos dessa fase tão especial. Além disso, disponibilizamos conteúdos sobre cuidados com a saúde durante a gestação e orientações práticas para o dia a dia com o bebê.
          </p>
        </div>
      </section>

      <section className="sobre text-center p-4 shadow rounded">
        <div className="equipe-objetivo mx-auto">
          <h2>Nossa Equipe</h2>
          <div className="divider mx-auto"></div>
          <p>
            Somos um grupo de profissionais apaixonados por cuidar de mães e bebês. Nossa equipe multidisciplinar reúne psicólogas, nutricionistas, doulas e outras especialistas com vasta experiência em saúde da mulher e desenvolvimento infantil.
          </p>
          <p>
            Entendemos os desafios únicos que essa jornada traz. Nossa missão é oferecer informações precisas, suporte emocional e ferramentas práticas para que você possa vivenciar a maternidade com mais leveza e confiança. Acreditamos que cada mulher merece um acompanhamento personalizado e acolhedor durante essa fase tão especial.
          </p>
        </div>
      </section>

      <section className="valores text-center p-4 shadow rounded">
        <div className="valores-objetivo mx-auto">
          <h2>Nossos Valores</h2>
          <div className="divider mx-auto"></div>
          <div className="row justify-content-center">
            <Card
              image={imgEmpoderamento}
              title="Empoderamento"
              description="Acreditamos no potencial de cada mulher e as incentivamos a serem as melhores versões de si mesmas."
            />
            <Card
              image={imgEmpatia}
              title="Empatia"
              description="Nos colocamos no lugar das mães para entender seus desafios e oferecer o melhor apoio."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default SobreContent;