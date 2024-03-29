import GenreMovieList from "./Components/GenreMovieList";
import Header from "./Components/Header";
import ProductionHouse from "./Components/ProductionHouse";
import Slider from "./Components/Slider";
import "../src/App.css";

const App = () => {
  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
};

export default App;
