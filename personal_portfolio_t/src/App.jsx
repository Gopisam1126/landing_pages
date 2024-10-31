import "./componentStyles/common.css";
import Header from "./components/header"
import Profile from "./components/profile";
import Description from "./components/desc";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Social from "./components/social";
function App() {

  return (
    <>
      <section className="app-main-section">
        <Header/>
        <Profile/>
        <Description/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Social/>
      </section>
    </>
  )
}

export default App
