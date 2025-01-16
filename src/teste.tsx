import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'blue' : 'green')};
  color: white;
  font-size: ${(props) => props.fontSize || '12px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <div>
      <Botao fontSize="18px" principal>
        Azul
      </Botao>
      <Botao fontSize="14px">Verde</Botao>
      <Botao>Padrão</Botao>
      <BotaoPerigo as="a">
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </div>
  )
}

export default Teste
