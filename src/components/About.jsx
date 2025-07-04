
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  document.title = "Jyoti OTT | About Us";

  return (
    <div className="w-screen h-[130%] bg-gray-100">
      <div className="px-[5%] py-10 w-full flex flex-col items-center">
        <h1 className="text-4xl text-zinc-800 font-bold mb-8">About Movies</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2">
          <h2 className="text-2xl text-zinc-800 font-semibold mb-4">Our Mission</h2>
          <p className="text-zinc-600 mb-6">
            Movies is dedicated to bringing you the best in entertainment. Our mission is to provide a vast library of movies and TV shows from all genres and for all ages. We strive to offer a seamless and enjoyable viewing experience for all our users.
          </p>

          <h2 className="text-2xl text-zinc-800 font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-zinc-600 mb-6">
            <li>Extensive collection of movies and TV shows</li>
            <li>High-quality streaming</li>
            <li>Personalized recommendations</li>
            <li>User-friendly interface</li>
            <li>Regular updates with the latest content</li>
            <li>Available on multiple devices</li>
          </ul>

          <h2 className="text-2xl text-zinc-800 font-semibold mb-4">Why Choose Movies?</h2>
          <p className="text-zinc-600 mb-6">
            At Movies, we prioritize your viewing pleasure. Our platform is designed to be intuitive and accessible, making it easy for you to find and enjoy your favorite movies and TV shows. With a commitment to quality and user satisfaction, Movies is your go-to destination for all things entertainment.
          </p>

          <h2 className="text-2xl text-zinc-800 font-semibold mb-4">Contact Me</h2>
          <p className="text-zinc-600 mb-6">
            Have any questions or feedback? Contact me at <a href="jyoti7417410098@gmail.com" className="text-blue-500">jyoti7417410098@gmail.com</a>. I am always happy to hear from my users and make improvements to the platform. Thank you for choosing Movies..!



          </p>

          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
