import Header from "./components/header";
import Hero from "./components/heroSection";
import FindJobSection from "./components/findJobSection";
import Category from "./components/categorySection";
import Vacancy from "./components/vacancySection";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FindJobSection />
      <Category />
      <Vacancy />
      <Footer />
    </div>
  );
}

export default App;
