// part 3 == 2 :30 : 00 min 
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import About from "./components/About";
import Contact from "./components/Contact";
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import Persondetails from "./components/Persondetails";
import Trailer from "./components/partials/Trailer"
import NotFound from "./components/Notfound";

const App = () => {
  return (
    <div className="bg-[#1f1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} >

            <Route path="/movie/details/:id/trailer" element={<Trailer/>}></Route>



        </Route>
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />} >


        <Route path="/tv/details/:id/trailer" element={<Trailer/>}></Route>


        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
