import React from "react";
import { Route, Routes } from "react-router-dom";

import "../App.css";

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-info">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <a className="btn" href="#">
            Reserve Table
          </a>
        </div>
        <img
          className="hero-img"
          src="/restauranfood.jpg"
          alt="Best Food Image"
          width={440}
          height={548}
        />
      </div>
    </div>
  );
};

const Specials = () => {
  return (
    <div className="specials-container">
      <h1>This weeks Specials</h1>

      <a className="btn" href="#">
        Reserve Table
      </a>

      <div className="cards">
        <div className="card">
          <img src="./greek salad.jpg" alt="" />
          <div className="card-data">
            <div className="title">
              {" "}
              <h3>Greek salad</h3>
              <p>$12.99</p>
            </div>

            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <div className="order">
              <p>Order a delivery</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fillRule="nonzero"
                    d="M16,1 C16.5522847,1 17,1.44771525 17,2 L17,3 L22,3 L22,9 L19.9813388,9 L22.7270773,16.5438545 C22.9032836,16.9948332 23,17.4856276 23,17.9990113 C23,20.2081503 21.209139,21.9990113 19,21.9990113 C17.1365166,21.9990113 15.5706587,20.7247255 15.1262721,19 L10.8739825,19 C10.4299397,20.7252272 8.86383943,22 7,22 C5.05550552,22 3.43507622,20.612512 3.0747418,18.7735658 C2.43596423,18.4396361 2,17.7707305 2,17 L2,7 C2,6.44771525 2.44771525,6 3,6 L10,6 C10.5522847,6 11,6.44771525 11,7 L11,12 C11,12.5522847 11.4477153,13 12,13 L14,13 C14.5522847,13 15,12.5522847 15,12 L15,3 L12,3 L12,1 L16,1 Z M7,16 C5.8954305,16 5,16.8954305 5,18 C5,19.1045695 5.8954305,20 7,20 C8.1045695,20 9,19.1045695 9,18 C9,16.8954305 8.1045695,16 7,16 Z M19,15.9990113 C17.8954305,15.9990113 17,16.8944418 17,17.9990113 C17,19.1035808 17.8954305,19.9990113 19,19.9990113 C20.1045695,19.9990113 21,19.1035808 21,17.9990113 C21,17.7586785 20.9576092,17.5282466 20.8798967,17.3147849 L20.8635387,17.2714329 C20.5725256,16.5266202 19.8478776,15.9990113 19,15.9990113 Z M17.8529833,9 L16.9999998,9 L16.9999998,12 C16.9999998,13.6568542 15.6568542,15 13.9999998,15 L11.9999998,15 C10.3431458,15 8.99999976,13.6568542 8.99999976,12 L3.99999976,12 L3.99999976,15.3541759 C4.73294422,14.523755 5.80530734,14 6.99999976,14 C8.86383943,14 10.4299397,15.2747728 10.8739825,17 L15.1257631,17 C15.569462,15.2742711 17.1358045,13.9990113 18.9999998,13.9990113 C19.2368134,13.9990113 19.4688203,14.0195905 19.6943299,14.0590581 L17.8529833,9 Z M8.99999976,8 L3.99999976,8 L3.99999976,10 L8.99999976,10 L8.99999976,8 Z M20,5 L17,5 L17,7 L20,7 L20,5 Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>{" "}
        <div className="card">
          <img src="./bruchetta.svg" alt="bruchetta" />
          <div className="card-data">
            <div className="title">
              {" "}
              <h3>Bruschetta</h3>
              <p>$ 5.99</p>
            </div>

            <p>
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.
            </p>
            <div className="order">
              <p>Order a delivery</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fillRule="nonzero"
                    d="M16,1 C16.5522847,1 17,1.44771525 17,2 L17,3 L22,3 L22,9 L19.9813388,9 L22.7270773,16.5438545 C22.9032836,16.9948332 23,17.4856276 23,17.9990113 C23,20.2081503 21.209139,21.9990113 19,21.9990113 C17.1365166,21.9990113 15.5706587,20.7247255 15.1262721,19 L10.8739825,19 C10.4299397,20.7252272 8.86383943,22 7,22 C5.05550552,22 3.43507622,20.612512 3.0747418,18.7735658 C2.43596423,18.4396361 2,17.7707305 2,17 L2,7 C2,6.44771525 2.44771525,6 3,6 L10,6 C10.5522847,6 11,6.44771525 11,7 L11,12 C11,12.5522847 11.4477153,13 12,13 L14,13 C14.5522847,13 15,12.5522847 15,12 L15,3 L12,3 L12,1 L16,1 Z M7,16 C5.8954305,16 5,16.8954305 5,18 C5,19.1045695 5.8954305,20 7,20 C8.1045695,20 9,19.1045695 9,18 C9,16.8954305 8.1045695,16 7,16 Z M19,15.9990113 C17.8954305,15.9990113 17,16.8944418 17,17.9990113 C17,19.1035808 17.8954305,19.9990113 19,19.9990113 C20.1045695,19.9990113 21,19.1035808 21,17.9990113 C21,17.7586785 20.9576092,17.5282466 20.8798967,17.3147849 L20.8635387,17.2714329 C20.5725256,16.5266202 19.8478776,15.9990113 19,15.9990113 Z M17.8529833,9 L16.9999998,9 L16.9999998,12 C16.9999998,13.6568542 15.6568542,15 13.9999998,15 L11.9999998,15 C10.3431458,15 8.99999976,13.6568542 8.99999976,12 L3.99999976,12 L3.99999976,15.3541759 C4.73294422,14.523755 5.80530734,14 6.99999976,14 C8.86383943,14 10.4299397,15.2747728 10.8739825,17 L15.1257631,17 C15.569462,15.2742711 17.1358045,13.9990113 18.9999998,13.9990113 C19.2368134,13.9990113 19.4688203,14.0195905 19.6943299,14.0590581 L17.8529833,9 Z M8.99999976,8 L3.99999976,8 L3.99999976,10 L8.99999976,10 L8.99999976,8 Z M20,5 L17,5 L17,7 L20,7 L20,5 Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>{" "}
        <div className="card">
          <img src="./greek salad.jpg" alt="" />
          <div className="card-data">
            <div className="title">
              {" "}
              <h3>Greek salad</h3>
              <p>$12.99</p>
            </div>

            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
            <div className="order">
              <p>Order a delivery</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fillRule="nonzero"
                    d="M16,1 C16.5522847,1 17,1.44771525 17,2 L17,3 L22,3 L22,9 L19.9813388,9 L22.7270773,16.5438545 C22.9032836,16.9948332 23,17.4856276 23,17.9990113 C23,20.2081503 21.209139,21.9990113 19,21.9990113 C17.1365166,21.9990113 15.5706587,20.7247255 15.1262721,19 L10.8739825,19 C10.4299397,20.7252272 8.86383943,22 7,22 C5.05550552,22 3.43507622,20.612512 3.0747418,18.7735658 C2.43596423,18.4396361 2,17.7707305 2,17 L2,7 C2,6.44771525 2.44771525,6 3,6 L10,6 C10.5522847,6 11,6.44771525 11,7 L11,12 C11,12.5522847 11.4477153,13 12,13 L14,13 C14.5522847,13 15,12.5522847 15,12 L15,3 L12,3 L12,1 L16,1 Z M7,16 C5.8954305,16 5,16.8954305 5,18 C5,19.1045695 5.8954305,20 7,20 C8.1045695,20 9,19.1045695 9,18 C9,16.8954305 8.1045695,16 7,16 Z M19,15.9990113 C17.8954305,15.9990113 17,16.8944418 17,17.9990113 C17,19.1035808 17.8954305,19.9990113 19,19.9990113 C20.1045695,19.9990113 21,19.1035808 21,17.9990113 C21,17.7586785 20.9576092,17.5282466 20.8798967,17.3147849 L20.8635387,17.2714329 C20.5725256,16.5266202 19.8478776,15.9990113 19,15.9990113 Z M17.8529833,9 L16.9999998,9 L16.9999998,12 C16.9999998,13.6568542 15.6568542,15 13.9999998,15 L11.9999998,15 C10.3431458,15 8.99999976,13.6568542 8.99999976,12 L3.99999976,12 L3.99999976,15.3541759 C4.73294422,14.523755 5.80530734,14 6.99999976,14 C8.86383943,14 10.4299397,15.2747728 10.8739825,17 L15.1257631,17 C15.569462,15.2742711 17.1358045,13.9990113 18.9999998,13.9990113 C19.2368134,13.9990113 19.4688203,14.0195905 19.6943299,14.0590581 L17.8529833,9 Z M8.99999976,8 L3.99999976,8 L3.99999976,10 L8.99999976,10 L8.99999976,8 Z M20,5 L17,5 L17,7 L20,7 L20,5 Z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomersSay = () => {
  return (
    <div className="customer-container">
      <h1>What Our Client Says</h1>
      <div className="customer-card">
        <img src="" alt="" />
        <p>name</p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>saying</p>
      </div>{" "}
      <div className="customer-card">
        <img src="" alt="" />
        <p>name</p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>saying</p>
      </div>{" "}
      <div className="customer-card">
        <img src="" alt="" />
        <p>name</p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>saying</p>
      </div>
    </div>
  );
};

const Chicago = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{" "}
        </p>
      </div>
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
  );
};

const BookingPage = () => {};

const Main = () => {
  return (
    <Routes>
       
      <Route
        path="/"
        element={
          <main>
            <Homepage />
            <Specials />
            <CustomersSay />
            <Chicago />
          </main>
        }
      ></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>
  );
};

export default Main;
