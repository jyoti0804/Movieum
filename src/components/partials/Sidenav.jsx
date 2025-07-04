
import { Link } from "react-router-dom"

const SideNav = () => {

  
  return (
    <>
       <div className="w-[20%] h-full  border-r-2 border-zinc-400 p-10">
        <h1 className="text-2xl text-white font-bold">
        <i className ="text-[#d5627e] ri-tv-fill mr-2"></i>
       <span className="">Movies</span> </h1>

       <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>

        <Link to="/trending" className="hover:bg-[#8b3b4f] hover:text-white duration-300 rounded-md p-3"><i className="mr-2 ri-fire-fill"></i>Trending</Link>
        <Link to="/popular" className="hover:bg-[#8b3b4f] hover:text-white duration-300 rounded-md p-3"><i className="mr-2 ri-bard-fill"></i>Popular</Link>
        <Link to="/movie" className="hover:bg-[#8b3b4f] hover:text-white duration-300 rounded-md p-3">
        <i className="mr-2 ri-movie-2-fill"></i>Movies</Link>
        <Link to="/tvshows" className="hover:bg-[#8b3b4f] hover:text-white duration-300 rounded-md p-3">
        <i className="mr-2 ri-tv-2-fill"></i>TV Shows</Link>
        <Link to="/people" className="hover:bg-[#8b3b4f] hover:text-white duration-300 rounded-md p-3">
        <i className="mr-2 ri-user-5-fill"></i>People</Link>
       </nav>

       <hr className="border-none h-[1px] bg-zinc-400"/>
       <nav className="flex flex-col text-zinc-400 text-xl gap-2">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">Website Information</h1>

        <Link to="/about" className="hover:bg-[#8b3b4f] hover:text-white duration-300 rounded-md p-3"><i className="ri-information-fill mr-2"></i>About Movies</Link>
        <Link to="/contact" className="hover:bg-[#8b3b4f] hover:text-white duration-300 rounded-md p-3"><i className="ri-phone-fill mr-2"></i>Contact Us</Link>
        
       </nav>
       






       </div>
    </>
  )
}

export default SideNav
