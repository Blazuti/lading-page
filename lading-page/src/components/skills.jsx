import React from "react";
export default function skills() {
  return (
    <section className="skills">
      <div className="container_img_skills"></div>
      {/*<div className="description_skills">
        <p>
          <li>
            <ul>Bio Segurança e Esterilização</ul>
          </li>
          <br />
          <li>
            <ul>Anatomia e Marcação</ul>
          </li>
          <br />
          <li>
            <ul>Técnicas de Perfuração</ul>
          </li>
          <br />
          <li>
            <ul>Conhecimento de Jóias</ul>
          </li>
        </p>
      </div>*/}
      <div class="container_skills">
        <div class="card">
          <div className="title_card">
            <div class="icon">💎</div>
            <h3>Alta Precisão</h3>
          </div>
          <p>
            Perfurações técnicas em Orelha, Umbigo e Microdermais, respeitando a
            anatomia individual.
          </p>
        </div>

        <div class="card">
          <div className="title_card">
            <div class="icon">🛡️</div>
            <h3>Biossegurança</h3>
          </div>
          <p>
            Protocolos rigorosos de esterilização e uso exclusivo de joalheria
            de alto padrão (Titânio).
          </p>
        </div>

        <div class="card">
          <div className="title_card">
            <div class="icon">✨</div>
            <h3>Acompanhamento</h3>
          </div>
          <p>
            Suporte humanizado em todas as etapas, garantindo uma cicatrização
            saudável e assistida.
          </p>
        </div>
      </div>
    </section>
  );
}
