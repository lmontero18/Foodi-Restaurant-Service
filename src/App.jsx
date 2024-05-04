import FoodCategories from "./components/FoodCategories";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SpecialDishes from "./components/SpecialDishes";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <FoodCategories />
      </section>
      <section>
        <SpecialDishes />
      </section>
    </>
  );
}

export default App;
