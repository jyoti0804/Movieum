import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Card from './partials/Card';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const TVShows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('airing_today');
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Jyoti OTT | TV Shows";

  const GetTVShows = async () => {
    try {
      const response = await axios.get(`/tv/${category}?page=${page}`);

      if (response.data.results.length > 0) {
        setTvShows((prevState) => [...prevState, ...response.data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setTvShows([]);
    setHasMore(true);
    GetTVShows();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  console.log(tvShows);

  return tvShows.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i onClick={() => navigate(-1)} className="hover:text-[#D5627E] ri-arrow-left-line pr-2"></i>TV Shows
        </h1>

        <div className="flex items-center w-[70%]">
          <Topnav />
          <Dropdown title="Category" options={['on_the_air','popular', 'top_rated' , 'airing_today',]} func={(e) => setCategory(e.target.value.toLowerCase())} />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll dataLength={tvShows.length} next={GetTVShows} hasMore={hasMore} loader={<h1>Loading...</h1>}>
        <Card data={tvShows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TVShows;
