import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/Hero/Hero.tsx";
import Projects from "./Components/Projects/Projects.tsx";
import About from "./Components/About/About.tsx";
function App() {
  return (
      <div className="w-full h-full m-auto bg-main">
          <Header />
          <Hero />
          <About />
          <Projects />
      </div>
  )
}

export default App
