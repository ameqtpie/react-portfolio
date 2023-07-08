import HeroImage2 from "../assets/heroImage2.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
const home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:space-x-5 md:flex-row ">
        <div className="flex flex-col justify-center md:h-full">
          <h2 className="text-3xl md:text-6xl font-bold text-white max-w-sm">
            <span className="block text-gray-500 md:text-4xl">Hi! I'm</span>
            Rainier Guinsatao
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            3rd Year Student from TUPV. Currently, I love to work on web
            application using technologies like React & Tailwind. Looking
            forward to learn backend technologies like Node, Expressjs &
            MongoDB.
          </p>
          <div>
            <button className="group tracking-[1px] hover:tracking-[5px] hover:font-bold font-medium duration-300 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-800 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-[-10px] py-10 md:py-0">
          <img
            src={HeroImage2}
            alt="my-profile"
            className="rounded-full mx-auto w-[150px] md:w-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default home;
