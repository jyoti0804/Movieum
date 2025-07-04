import loader from '../../public/loader.gif'

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#D0D0D0] overflow-hidden'>
      <img className='h-[87%] w-[50%] object-contain' src={loader} alt="" />
    </div>
  )
}

export default Loading
