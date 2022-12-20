import React from "react";
import HeroImage from "../heroImage.jpeg";
import { RiArrowRightSLine } from "react-icons/ri";
import TypeWriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-4xl flex flex-col justify-content:center text-white sm:text-7xl font-bold sm:text-white`">
          <h1 className="pb-8">Hello I'm Aayush</h1>
          <div className="flex flex-row">
            <h3 className="text-2xl sm:text-5xl font-bold text-white pr-3">I'm a </h3>
            <div className="text-2xl pb-12 sm:text-5xl font-bold text-white">
              <TypeWriter
                options={{
                  strings: [" Full Stack Developer", " Programmer"," App Developer"," Coder", " Dev-op"," Block-Chain Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="text-sm text-white flex flex-row">
          <div className="flex flex-col space-y-5 text-lg text-gray-500 max-w-md">
            <p>
              {" "}
              Hello I am Aayush Raturi. A sophomore at BIT Mesra. I have an avid interest in learning new skills and adding it to my repertoire. I am well versed in languages like C,C++,Java,JavaScript,Python and much more.
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
          <div className="object-contain h-48 w-96 pl-7">
            <img
              src={HeroImage}
              alt="my pic"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
