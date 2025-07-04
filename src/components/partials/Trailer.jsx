import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import NotFound from "../Notfound"

const Trailer = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const ytvideo = useSelector((state) => state[category].info.videos);
    console.log(ytvideo);
   

  return ytvideo ? (
    <div className="bg-transparent text-white z-[100] top-0 left-0 absolute w-screen h-screen flex items-center justify-center">
    <Link onClick={() => navigate(-1)} className="absolute hover:text-[#D5627E] ri-close-fill pr-2 text-white text-3xl right-[15%] top-[3%]"></Link>
      <ReactPlayer controls height={730} width={1600} url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />

    </div>
  ):<NotFound />
}

export default Trailer
 