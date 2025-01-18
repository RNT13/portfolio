import { Text as StyledText } from './styles'

export type Props = {
  children: string
  type?: 'primary' | 'Secondary'
}

const Text = ({ children, type = 'primary' }: Props) => (
  <StyledText type={type}>{children}</StyledText>
)

export default Text
