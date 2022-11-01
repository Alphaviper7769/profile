import React from "react";
import HeroImage from "../heroImage.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello I'm Aayush
          </h2>
          <h3 className="text-2xl sm:text-5xl font-bold text-white">I'm a</h3>
          <Typewriter
            className="text-2xl sm:text-5xl font-bold text-white"
            options={{
              strings: ["Full Stack Developer", "programmer","Coder",""],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="text-gray-500 py-4 max-w-md">
          Hi, I'm Aayush Raturi, Btech 2nd year undergrad in Computer Science
          Engineering, BIT Mesra. My interest lies in programming, problem
          solving, developing stuff, learning and exploring new technologies.
          I'm a Full Stack Developer inclined towards Back-end development.
          </p>

          <div>
            <button className="group  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
