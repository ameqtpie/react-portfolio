import HeroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
const home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold text-white md:max-w-sm">
            <span className="text-blue-500">Hi!</span> I'm Rainier Guinsatao
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            3rd Year Student from TUPV. Currently, I love work on web
            application using technologies like React and Tailwind. Looking
            forward to learn other technologies like Nodejs, Express and MongoDB
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my-profile"
            className="md:rounded-2xl rounded-full mx-auto mt-[100px] mb-[-50px] md:mb-0 md:mt-0 w-[200px] md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default home;
