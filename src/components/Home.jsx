import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechFactor</h1>
          <p>The only solution for all your tech problems.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one & only solution to all your tech problems you face
            everyday. We help you solve your problems with best tools & services
            which are easy to use & secure aswell.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            cupiditate suscipit aperiam harum repellat, illo a quos dolorum nemo
            eos tenetur. Necessitatibus dolorum consectetur dolor? Sit
            repellendus explicabo quae est? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatem fugit deserunt aliquid
            necessitatibus animi eveniet odit, consequatur, fugiat aspernatur
            asperiores modi molestiae voluptatibus laborum nam pariatur incidunt
            porro ipsa at. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Modi officia reprehenderit quas vitae voluptas hic fugiat
            dolorum aut blanditiis. Enim est nisi tempora quas mollitia
            repellendus aliquid magni eveniet voluptatibus?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillTwitterCircle />
              <p>Twitter</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
