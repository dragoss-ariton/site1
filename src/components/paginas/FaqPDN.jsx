import React, { useState } from 'react';
import '../css/FAQ.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FaqPDN = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'Com que idade é possível tirar a carta de motociclos?',
      answer: `É possível tirar a carta de motociclos até 11 kW a partir dos 16 anos. 
               No caso de motociclos até 35 kW, a idade mínima é de 18 anos. 
               Para a Categoria A, a idade mínima é 24 anos ou 2 anos de habilitações na Categoria A.`,
    },
    {
      question: 'A partir de que idade é permitido tirar a carta de ligeiros?',
      answer: 'Aos 17 anos e 6 meses já se pode inscrever na Escola de Condução e iniciar o processo de aprendizagem.',
    },
    {
      question: 'Quanto tempo é necessário para tirar a carta de condução?',
      answer: `A carta demora o tempo necessário para concluir 28 horas de Código e 32 horas de Condução.`,
    },
    {
      question: 'O que é necessário para fazer a inscrição?',
      answer: `Precisa de levar: 
               1. Cartão de Cidadão. 
               2. Impresso do Ministério da Saúde. 
               3. Quantia referente à inscrição.`,
    },
    {
      question: 'Posso tirar a carta em Inglês?',
      answer: 'Sim, a nossa escola oferece a possibilidade de fazer a carta em Inglês.',
    },
    {
      question: 'Quando deve ser efetuado o exame de código?',
      answer: `O exame de código pode ser feito após concluir 28 horas de aulas teóricas.`,
    },
    {
      question: 'É possível ter aulas de condução antes de passar no Código?',
      answer: 'As aulas práticas podem ser feitas em simultâneo com as teóricas, mas o exame prático depende da aprovação no teórico.',
    },
    {
      question: 'Que carro vou conduzir no dia do exame?',
      answer: 'O mesmo carro usado nas aulas, para garantir conforto e familiaridade durante o exame.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Alterna entre abrir e fechar
  };

  // Divide as FAQs em duas colunas
  const firstColumn = faqData.slice(0, Math.ceil(faqData.length / 2));
  const secondColumn = faqData.slice(Math.ceil(faqData.length / 2));

  return (
    <div className="faq-page">
      <section className="faq-section">
        <div className="container">
          {/* Título */}
          <div className="faq-title-container">
            <h1 className="faq-title">
              Perguntas <span className="highlight">Frequentes</span>
            </h1>
          </div>

          {/* FAQs em duas colunas */}
          <div className="faq-columns">
            {[firstColumn, secondColumn].map((column, colIndex) => (
              <div key={colIndex} className="faq-column">
                <ul className="faq-list">
                  {column.map((faq, index) => (
                    <li
                      key={index}
                      className={`faq-item ${
                        activeIndex === index + colIndex * firstColumn.length ? 'active' : ''
                      }`}
                      onClick={() => handleToggle(index + colIndex * firstColumn.length)}
                    >
                      <div className="faq-toggler">
                        <span>{faq.question}</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`icon ${
                            activeIndex === index + colIndex * firstColumn.length ? 'rotated' : ''
                          }`}
                        />
                      </div>
                      <div
                        className={`faq-content ${
                          activeIndex === index + colIndex * firstColumn.length ? 'visible' : ''
                        }`}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPDN;
