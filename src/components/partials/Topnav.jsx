import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";


const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query) {
      getSearches();
    } else {
      setSearches(null);
    }
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center">
      <i className="text-zinc-400 text-3xl ri-search-line ml-6"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-3 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search Anything in Movies"
      />
      {query.length > 0 && (
        <i onClick={() => setQuery("")} className="text-zinc-400 text-3xl ri-close-fill"></i>
      )}

      {searches && (
        <div className=" z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-100 top-[100%] overflow-auto rounded">
          {searches.map((s, i) => (
            <Link
              key={i}
              to={`/${s.media_type}/details/${s.id}`} 
              className="hover:text-black hover:bg-[#ffc5d4] duration-300 font-semibold text-zinc-600 w-full p-2 flex justify-start items-center border-b-2 border-zinc-100 "
            >
              <img
                src={s.poster_path || s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${s.poster_path || s.backdrop_path || s.profile_path}`
                  : '../../../public/no_img.jpg'}
                alt={s.name || s.title || s.original_name || s.original_title}
                className="w-[10vh] h-[10vh] object-cover mr-4 rounded shadow-lg"
              />
              <span>{s.name || s.title || s.original_name || s.original_title}</span>

            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
