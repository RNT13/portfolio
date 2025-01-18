import Text from '../../components/Text'
import Title from '../../components/title'
import { GithubSection } from './styles'

const About = () => {
  return (
    <section>
      <Title fontSize={18}>About Me</Title>
      <Text type="primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=RNT13&show_icons=true&theme=dark" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=RNT13&layout=compact&langs_count=8&card_width=320&theme=dark" />
      </GithubSection>
    </section>
  )
}

export default About
