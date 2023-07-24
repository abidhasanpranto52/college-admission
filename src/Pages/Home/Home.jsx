import React from "react";
import Banner from "./Home/Banner/Banner";
import CollegeInfo from "./Home/CollegeInfo/CollegeInfo";

const Home = () => {
  return (
    <div>
      <div className="form-control mb-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-5 md:w-auto"
        />
      </div>

      <Banner/>
      <CollegeInfo/>
    </div>
  );
};

export default Home;
