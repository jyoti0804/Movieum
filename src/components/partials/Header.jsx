import { Link } from "react-router-dom";

const Header = ({ data }) => {
  const {
    poster_path,
    backdrop_path,
    profile_path,
    name,
    title,
    original_name,
    original_title,
    overview,
    release_date,
    media_type,
  } = data;

  const backgroundImageUrl = `url(https://image.tmdb.org/t/p/original/${poster_path || backdrop_path || profile_path})`;
  const headerTitle = name || title || original_name || original_title;
  const description = overview ? `${overview.slice(0, 200)}...` : "No description available";

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), ${backgroundImageUrl}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-center items-start p-[10%]"
    >
      <h1 className="w-[55%] text-5xl text-white font-black">{headerTitle}</h1>
      <p className="w-[55%] mt-3 mb-3 text-white">
        {description}
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-600 ri-megaphone-fill"></i>
        {release_date || "No Information"}
        <i className="ml-5 text-yellow-600 ri-album-fill"></i>
        {media_type ? media_type.toUpperCase() : "Unknown"}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="bg-[#8b3b4f] p-2 mt-5 rounded-md text-white">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
