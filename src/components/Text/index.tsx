import { TextStyle } from './styles'

export type Props = {
  children?: string
  type?: 'primary' | 'Secondary'
  fontSize?: number
}

const Text = ({ children, type = 'primary', fontSize }: Props) => (
  <TextStyle fontSize={fontSize} type={type}>
    {children}
  </TextStyle>
)

export default Text
