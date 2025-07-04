import { useNavigate } from 'react-router-dom';
import Topnav from './partials/Topnav';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Card from './partials/Card';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "AYU OTT | People";

  const GetPeople = async () => {
    try {
      const response = await axios.get(`/person/popular?page=${page}`);

      if (response.data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...response.data.results]);
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
    setPeople([]);
    setHasMore(true);
    GetPeople();
  };

  useEffect(() => {
    refreshHandler();
  }, []);

  console.log(people);

  return people.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i onClick={() => navigate(-1)} className="hover:text-[#D5627E] ri-arrow-left-line pr-2"></i>People
        </h1>

        <div className="flex items-center w-[70%]">
          <Topnav />
        </div>
      </div>

      <InfiniteScroll dataLength={people.length} next={GetPeople} hasMore={hasMore} loader={<h1>Loading...</h1>}>
        <Card data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
