import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { loadPersonAsync } from "../store/actions/personActions";
import { removePerson } from "../store/reducers/personSlice";
import Loading from "./Loading";

const Persondetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const info = useSelector((state) => state.person.info);
  const dispatch = useDispatch();
  // console.log(info);

  useEffect(() => {
    if (id) {
      dispatch(loadPersonAsync(id));
      return () => {
        dispatch(removePerson());
      };
    }
  }, [id, dispatch]);

  const backgroundImage = info && info.detail && info.detail.profile_path
    ? `url(https://image.tmdb.org/t/p/original/${info.detail.profile_path})`
    : '';

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), ${backgroundImage}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[120vh] px-[10%]  overflow-y-auto"
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
        <a target="_blank" href={`https://www.imdb.com/name/${info.externalid.imdb_id}`} rel="noopener noreferrer">
          <i className="hover:text-[#76c1ff] ri-film-fill"></i>
        </a>
      </nav>

      {/* Part 2: Poster and Details */}
      <div className="w-full flex overflow-x-scroll">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path || info.detail.backdrop_path}`}
          alt="Person Profile"
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-semibold text-white">{info.detail.name}
            <small className="text-2xl text-zinc-300 font-black">({info.detail.birthday})</small>
          </h1>

          <div className="mt-3 mb-6 flex text-white items-center gap-x-5 font-semibold">
            <h1>{info.detail.place_of_birth}</h1>
          </div>

          <h1 className="text-xl font-semibold text-white italic">{info.detail.known_for_department}</h1>

          <h1 className="text-xl mt-5 mb-2">Biography</h1>
          <p className="text-lg w-[10%]">{info.detail.biography}</p>

          <h1 className="text-xl mt-5 mb-2">Known For</h1>
          <div className="w-full flex overflow-x-scroll overflow-y-hidden h-[40vh] p-2 space-x-4">
            {info.movieCredits.concat(info.tvCredits).map((c, i) => (
              <div key={i} className="min-w-[200px] flex flex-col items-center space-y-3">
                <img
                  className="w-[200px] h-[300px] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-cover flex-wrap"
                  src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}` : 'path/to/default/image.jpg'}
                  alt={c.title || c.name}
                />
                <h1 className="text-xl text-white font-semibold text-center">
                  {c.title || c.name}
                </h1>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Persondetails;
