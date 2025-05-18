import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import FilterSection from "./components/FilterSection"
import ProductsDisplay from "./components/ProductsDisplay"
import PageSection from "./components/PageSection"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <NavBar />
      <Hero />
      <FilterSection />
      <ProductsDisplay />
      <PageSection />
      <Footer />
    </div>
  )
}

export default App