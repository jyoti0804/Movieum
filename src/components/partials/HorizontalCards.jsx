import { Link } from "react-router-dom"
import noImg from './no_img.jpg'

const HorizontalCards = ({ data }) => {
  // console.log(data);
  return (
    <div className="w-full h-[40vh] p-5 ">
      
      <div className="w-full flex overflow-x-scroll overflow-y-hidden h-[40vh] p-2">
        {data.length > 0 ? data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="text-black min-w-[15%] mr-4 mb-10 ">

            <img className="w-full h-[45%] object-cover bg-center" src={d.backdrop_path || d.poster_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path || d.profile_path})`: noImg} alt="" />

            <h1 className="text-xl text-white font-semibold p-1">{d.title || d.name || d.original_name || d.original_title}</h1>

            <p className="mt-2 mb-3 text-white">
              {d.overview.slice(0, 50)}...
              <span to="#" className="text-red-300">more</span>
            </p>



          </Link>)): <h1 className="text-3xl mt-5 text-white font-black text-center">Nothing to show</h1>}
      </div>
    </div>
  )
}

export default HorizontalCards

