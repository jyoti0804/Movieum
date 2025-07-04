import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Card from './partials/Card';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');
  const [duration, setDuration] = useState('day');
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Jyoti OTT | Trending";

  const GetTrending = async () => {
    try {
      const response = await axios.get(`/trending/${category}/${duration}?page=${page}`);

      if (response.data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...response.data.results]);
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
    setTrending([]);
    setHasMore(true);
    GetTrending();
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  console.log(trending);

  return trending.length > 0 ? (
    <div className="w-full h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i onClick={() => navigate(-1)} className="hover:text-[#D5627E] ri-arrow-left-line pr-2"></i>Trending
        </h1>

        <div className="flex items-center w-[70%]">
          <Topnav />
          <Dropdown title="Category" options={['Movies', 'TV', 'All']} func={(e) => setCategory(e.target.value.toLowerCase())} />
          <div className="w-[2%]"></div>
          <Dropdown title="Duration" options={['Week', 'Day']} func={(e) => setDuration(e.target.value.toLowerCase())} />
        </div>
      </div>

      <InfiniteScroll dataLength={trending.length} next={GetTrending} hasMore={hasMore} loader={<h1>Loading...</h1>}>
        <Card data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
