import Navbar from './components/Navbar/navbar'
import Intro from './components/intro/Intro'
import Skills from './components/Skills/Skills'
import ProjectCard from './components/Projects/ProjectCard'
import Contact from './contacts/Contact'
import './App.css'

function App() {
  return (
    <div  className="App">
      <Navbar/>
      <div>
      <Intro/>
      <Skills/>
      <ProjectCard/>
      <Contact/>
      </div>
      
    </div>
  )
}

export default App
