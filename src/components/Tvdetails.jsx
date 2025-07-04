import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { loadTVShowAsync } from "../store/actions/tvActions";
import { removeTv } from "../store/reducers/tvSlice";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";


const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const info = useSelector((state) => state.tv.info);
  const dispatch = useDispatch();
  // console.log(info);

  useEffect(() => {
    if (id) {
      dispatch(loadTVShowAsync(id));
      return () => {
        dispatch(removeTv());
      };
    }
  }, [id, dispatch]);

  const backgroundImage = info && info.detail && info.detail.backdrop_path
    ? `url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`
    : '';

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), ${backgroundImage}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[240vh] px-[10%]"
    >
      {/* Part 1: Navigation */}
      <nav className="h-[10vh] w-full text-white flex items-center gap-10 text-xl">
        <Link onClick={() => navigate(-1)} className="hover:text-[#76c1ff] ri-arrow-left-line pr-2 text-white"></Link>
        <a target="_blank" href={info.detail.homepage} rel="noopener noreferrer">
          <i className="hover:text-[#76c1ff] ri-external-link-fill"></i>
        </a>
        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} rel="noopener noreferrer">
          <i className="hover:text-[#76c1ff] ri-earth-fill"></i>
        </a>
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`} rel="noopener noreferrer">
          <i className="hover:text-[#76c1ff] ri-film-fill"></i>
        </a>
      </nav>

      {/* Part 2: Poster and Details */}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
          alt="TV Show Poster"
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-semibold text-white">{info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
          
          <small className="text-2xl text-zinc-300 font-black">({info.detail.first_air_date.split("-")[0]})</small></h1>


         
         <div className=" mt-3 mb-6 flex text-white items-center gap-x-5 font-semibold">
         <span className=" text-white w-[5vh] h-[5vh] flex justify-center items-center bg-yellow-600 rounded-full text-sm font-semibold">
          {(info.detail.vote_average * 10).toFixed()}<sup>%</sup>
          </span>
          <h1 className="w-[60px] font-semibold text-2xl leading-6">User Score</h1>
          <h1>{info.detail.first_air_date}</h1>
          <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
          <h1>{info.detail.episode_run_time[0]}min per episode</h1>
         </div>

         <h1 className="text-xl font-semibold text-white italic">{info.detail.tagline}</h1>
         
         
         <h1 className="text-xl mt-5 mb-2">Summary</h1>
          <p className="text-lg">{info.detail.overview}</p>


         <h1 className="text-xl mt-5 mb-2">Show Translated </h1>
          <p className=" mb-10 text-lg">{info.translations.join(", ")}</p>

          <Link className="mt-5  py-2 px-3 bg-[#ffffff] rounded-lg font-semibold text-sm text-black mb-10" to={`${pathname}/trailer`}>
          <i className="text-sm ri-play-fill mr-1"></i> 
          Play Trailer</Link>
                        
        </div>
      </div>

      {/* Part 3: Available on Platforms */}
      <div className="w-[80%] flex flex-col gap-6 mt-4">
        {info.watchprovider && info.watchprovider.flatrate && Array.isArray(info.watchprovider.flatrate) && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Buy Subscription</h1>
            {info.watchprovider.flatrate.map((w, index) => (
              <img
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                key={index}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
                title={w.provider_name}
              />
            ))}
          </div>
        )}

        {info.watchprovider && info.watchprovider.rent && Array.isArray(info.watchprovider.rent) && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchprovider.rent.map((w, index) => (
              <img
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                key={index}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
                title={w.provider_name}
              />
            ))}
          </div>
        )}

        {info.watchprovider && info.watchprovider.buy && Array.isArray(info.watchprovider.buy) && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Buy this Show :)</h1>
            {info.watchprovider.buy.map((w, index) => (
              <img
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                key={index}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt={w.provider_name}
                title={w.provider_name}
              />
            ))}
          </div>
        )}
      </div>


       
       {/* Part 4 : Seasons  */}
<hr className="mt-10 border-none h-[2px] bg-zinc-400" />
<h1 className="text-3xl font-bold text-white text-center mt-4">Seasons</h1>
<div className="w-full flex overflow-x-scroll overflow-y-hidden h-[40vh] p-2 space-x-4">
  {info.detail.seasons.length > 0 ? info.detail.seasons.map((s, i) => (
    <div key={i} className="min-w-[200px] flex flex-col items-center space-y-3">
      <img
        className="w-[200px] h-[300px] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover flex-wrap"
        src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
        alt=""
      />
      <h1 className="text-xl text-white font-semibold text-center">
        {s.name}
      </h1>
    </div>
  )) : <h1>Not Found</h1>}
</div>

      {/* Part 5: Recommendation and Similar Shows */}
        <hr className="mt-10 border-none h-[2px] bg-zinc-400" />
        <h1 className="text-3xl font-bold text-white text-center mt-4">Recommendations and Similar Shows</h1>
        <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} />
      

      <Outlet/>
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;

