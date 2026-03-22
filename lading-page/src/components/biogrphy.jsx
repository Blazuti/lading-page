import React from "react";
import Title_biography from "../components/media/imgs/title_biography.png"

export default function biography() {
  return (
    <section className="my_biography">
      <div className="biography">
        <div className="title_biography">
          <img src={Title_biography} alt="" />
        </div>
        <div className="text_biography">
          <p>
            Minha história com a modificação corporal começou em 2017. Em 2019,
            mergulhei na especialização para transformar a paixão em uma
            carreira técnica e responsável. Hoje, com mais de <strong>
              7 anos de
              experiência
            </strong>, vejo cada trabalho — seja um delicado Tragus, um
            clássico no Umbigo ou a técnica avançada de um Microdermal — como
            uma forma de elevar a autoestima e a identidade de quem me procura.
          </p>
          <p>
            Acredito que o meu trabalho não termina no momento da perfuração.
            Meu compromisso é com a <strong>saúde do cliente</strong>, por isso dedico máxima
            atenção ao acompanhamento de cada caso, garantindo que o processo de
            cicatrização seja perfeito.
          </p>
          <p>
            <strong>
              Mais do que colocar uma joia, entrego segurança e cuidado em cada
              detalhe.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
