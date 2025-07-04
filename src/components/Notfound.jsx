import notfoundVideo from '../../public/notfound.mp4'; 

const NotFound = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#040412] overflow-hidden'>
      <video className='h-[87%] w-[50%] object-contain' src={notfoundVideo} autoPlay loop muted />
    </div>
  );
};

export default NotFound;
