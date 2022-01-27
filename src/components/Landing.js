import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
import { MdOutlineHowToReg } from "react-icons/md";
import { GiSpanner, GiSewingMachine, GiMonkeyWrench } from "react-icons/gi";
import { FiScissors } from "react-icons/fi";
import { BsScrewdriver } from "react-icons/bs";

function Landing() {
  return (
    <section className="home common ">
      <div className="shape">
        <GiSpanner className="img-tools shape1" />
        <FiScissors className="img-tools shape2" />
        <GiSewingMachine className="img-tools shape3" />
        <GiMonkeyWrench className="img-tools shape4" />
        <BsScrewdriver className="img-tools shape5" />
      </div>
      <div className="home-inner">
        <div className="landing-text">
          <h1>
            <span className="a">A</span>bout
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            illum, sed sit eius, delectus placeat iste dolores repellendus optio
            aliquid pariatur alias. A consectetur, dolorum inventore commodi
            nesciunt molestias magnam iure eius aperiam voluptas iste quasi
            autem deserunt harum voluptate expedita modi error voluptatibus,
            illum molestiae vitae pariatur quidem, facilis quaerat? Possimus
            minus error nisi sequi unde numquam aut aspernatur consequatur. Unde
            nostrum porro, assumenda ipsa id fugiat deserunt consectetur
            voluptatum. Harum cum libero similique dicta non eos officiis,
            numquam velit eaque dignissimos, ipsum reprehenderit quis, eveniet
            distinctio aperiam delectus repellat tempora deleniti rerum quisquam
            quaerat ad. Dignissimos, cupiditate incidunt.
          </p>
        </div>
        <div className="landing-btn-container">
          <button className="landing-btn">
            <Link className="landing-links" to="/login">
              <MdOutlineHowToReg className="fa" />
              Login
            </Link>
          </button>
          <button className="landing-btn">
            <Link className="landing-links" to="/signup">
              <CgProfile className="fa" />
              Register
            </Link>
          </button>
          <button className="landing-btn">
            <Link className="landing-links" to="/artisan">
              <FaSearch className="fa" />
              Search
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
