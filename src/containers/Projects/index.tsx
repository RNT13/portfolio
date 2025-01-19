import Project from '../../components/Project'
import Title from '../../components/title'
import { Lista } from './styles'

const Projects = () => {
  return (
    <section>
      <Title fontSize={16}>Projects list</Title>
      <Lista>
        <li>
          <Project></Project>
        </li>
        <li>
          <Project></Project>
        </li>
        <li>
          <Project></Project>
        </li>
        <li>
          <Project></Project>
        </li>
        <li>
          <Project></Project>
        </li>
        <li>
          <Project></Project>
        </li>
        <li>
          <Project></Project>
        </li>
        <li>
          <Project></Project>
        </li>
      </Lista>
    </section>
  )
}

export default Projects
