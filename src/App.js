import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import MovieDetail from "./component/movieDetail/MovieDetail";
import PageNotFound from "./component/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route element={PageNotFound} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
