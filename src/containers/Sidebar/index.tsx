import Avatar from '../../components/Avatar'
import Text from '../../components/Text'
import Title from '../../components/title'

import { BotaoTema, Description, SideContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideContainer>
      <Avatar />
      <Title fontSize={35}>Renato Minoita</Title>
      <Text type="Secondary" fontSize={16}>
        RNT13
      </Text>
      <Description type="primary" fontSize={12}>
        Front-end Engineer
      </Description>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SideContainer>
  </aside>
)

export default Sidebar
