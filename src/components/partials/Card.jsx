import { Link } from 'react-router-dom';
import noImg from './no_img.jpg'

const Card = ({ data, title }) => {
    console.log(title);
    return (
        <div className='flex flex-wrap w-full px-[5%] bg-[#1F1E24]'>
            {data.map((c, i) => {
                return (
                    <Link
                        to={`/${c.media_type || title}/details/${c.id}`}
                        className="relative w-[25vh] mr-[5%] mb-[5%]"
                        key={i}
                    >
                        <img
                            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] object-contain"
                            src={c.poster_path || c.backdrop_path || c.profile_path ?`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}` : noImg}
                            alt=""
                        />
                        <h1 className="text-1xl text-white mt-3 font-semibold">
                            {c.name || c.title || c.original_name || c.original_title}
                        </h1>
                        {c.vote_average && (
                            <div className="absolute right-[-10%] bottom-[17%] text-white w-[5vh] h-[5vh] flex justify-center items-center bg-yellow-600 rounded-full text-sm font-semibold">
                                {(c.vote_average * 10).toFixed()}<sup>%</sup>
                            </div>
                        )}
                    </Link>
                );
            })}
        </div>
    );
};

export default Card;
