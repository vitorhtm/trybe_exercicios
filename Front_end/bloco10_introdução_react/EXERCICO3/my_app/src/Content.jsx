import { Component } from 'react';
import './cards.css'

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

const Texto =({keyy, content}) => {
  return (
    <div className='card'>
      <p>O conteudo:: {keyy}-{content.conteudo}</p>
      <p>bloco:: {content.bloco}</p>
      <p>status:: {content.status}</p>
    </div>
  )
}

const funfa = (conteudo) => {
  return (
  conteudo.map((e) => <Texto key={e.bloco} content={e}></Texto>)
  )
}

class Content extends Component {
    render() {
        return (
            <>
              {funfa(conteudos)}
            </>   
        )
    }
}

export default Content