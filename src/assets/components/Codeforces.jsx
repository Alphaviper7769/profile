import React from "react";
import cflogo from "../cf1.png";

const Codeforces = () => {
  return (
    <div
      name="Codeforces"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          {/* <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Codeforces
                </p>
                 */}
          <img
            src={cflogo}
            alt="my pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima
          laborum veritatis, tempora doloremque accusantium ipsam obcaecati
          voluptatibus provident ab, quos nam maiores! Et excepturi distinctio
          aut inventore minus nemo!
        </p>

        <br />
        <div className="">
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Codeforces;
