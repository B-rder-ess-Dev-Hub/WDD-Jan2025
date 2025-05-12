import NavBar from "./components/NavBar"
import Hero from "./components/Hero"  
import FilterSection from "./components/FilterSection"    


const App = () => {
  return (
   <div className="container mx-auto">  
      <NavBar/>
      <Hero/>
      <FilterSection/>
    </div>
  )
}

export default App