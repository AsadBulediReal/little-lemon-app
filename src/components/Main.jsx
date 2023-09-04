import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "../App.css";

const Homepage = () => {
  return (
    <section id="home" className="home-container">
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
          loading="eager"
        />
      </div>
    </section>
  );
};

const Specials = () => {
  return (
    <section id="menu" className="specials-container">
      <h1>This weeks Specials</h1>

      <a className="btn" href="#">
        Reserve Table
      </a>

      <div className="cards">
        <div className="card">
          <img src="./greek salad.jpg" loading="eager" alt="greek salad" />
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
          <img src="./bruchetta.svg" loading="eager" alt="bruchetta" />
          <div className="card-data">
            <div className="title">
              {" "}
              <h3>Bruschetta</h3>
              <p>$5.99</p>
            </div>

            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive.
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
          <img src="./lemon dessert.jpg" loading="eager" alt="lemon dessert" />
          <div className="card-data">
            <div className="title">
              {" "}
              <h3>Lemon Dessert</h3>
              <p>$5.00</p>
            </div>

            <p>
              {`This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.`}
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
    </section>
  );
};

const CustomersSay = () => {
  return (
    <section id="testimonial" className="customer-container">
      <h1>What Our Client Says</h1>
      <div className="card-container">
        <div className="customer-card">
          <img src="./Mark James.jpg" alt="Mark James" />
          <p>⭐⭐⭐⭐⭐</p>
          <p>Mark James</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, reiciendis. Possimus voluptas perspiciatis nisi eveniet
            odit doloribus.
          </p>
        </div>{" "}
        <div className="customer-card">
          <img src="./Andrea Smith.jpg" alt="Andrea Smith" />
          <p>⭐⭐⭐⭐⭐</p>

          <p>Andrea Smith</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, reiciendis. Possimus voluptas perspiciatis nisi eveniet
            odit doloribus.
          </p>
        </div>{" "}
        <div className="customer-card">
          <img src="./John Doe.jpg" alt="John Doe" />
          <p>⭐⭐⭐⭐⭐</p>
          <p>John Doe</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Architecto, reiciendis. Possimus voluptas perspiciatis nisi eveniet
            odit doloribus.
          </p>
        </div>
      </div>
    </section>
  );
};

const Chicago = () => {
  return (
    <section id="about" className="about-container">
      <div className="about">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p className="about-text">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant.
        </p>
        <p className="about-text">
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. Adrian does all the marketing for the restaurant
          and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className="about-image-one-container">
        <img
          className="about-image-one"
          src="./Mario and Adrian b.jpg"
          alt="Mario and Adrian"
        />
      </div>{" "}
      <div className="about-image-two-container">
        <img
          className="about-image-two"
          src="./Mario and Adrian A.jpg"
          alt="Mario and Adrian"
        />
      </div>
    </section>
  );
};

const BookingPage = () => {
  const [people, setPeople] = useState(1);
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/confirmation");
  };
  return (
    <section id="bookingPage" className="booking">
      <form onSubmit={changeRoute}>
        <div className="personal-information">
          <h1>Personal Information</h1>
          <div className="inputs">
            <div className="input-field">
              <label htmlFor="first-name">First Name</label>
              <input
                id="first-name"
                type="text"
                name="firstName"
                minLength={3}
                maxLength={50}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="last-name">Last Name</label>
              <input
                id="last-name"
                type="text"
                name="lastName"
                minLength={3}
                maxLength={50}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="Email"
                minLength={4}
                maxLength={200}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                id="phone-number"
                type="tel"
                name="phoneNumber"
                minLength={10}
                maxLength={25}
                required
              />
            </div>
          </div>
        </div>
        <div className="booking-information">
          <h1>Booking Information</h1>
          <div className="inputs">
            <div className="input-field">
              <label htmlFor="people">Number of People</label>
              <input
                id="people"
                type="number"
                name="people"
                min={1}
                max={100}
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="date">Select Date</label>
              <input id="date" type="date" name="date" required />
            </div>
            <div className="input-field">
              <label htmlFor="time">Select Time</label>
              <input
                id="time"
                type="time"
                name="time"
                required
                placeholder="70:30"
              />
            </div>
            <div className="input-field">
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="occasion" required>
                <option value={""}>None</option>
                <option value={"Birthday"}>Birthday</option>
                <option value={"Anniversary"}>Anniversary</option>
                <option value={"Engagement"}>Engagement</option>
                <option value={"Other"}>Other</option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="preferences">Seating preferences</label>
              <select id="preferences" name="preferences" required>
                <option value={""}>None</option>
                <option value={"Indoors"}>Indoors</option>
                <option value={"Outdoor (Patio)"}>Outdoor (Patio)</option>
                <option value={"Outdoor (Sidewalk)"}>Outdoor (Sidewalk)</option>
              </select>
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="comments">Additional Comments</label>
            <textarea
              id="comments"
              rows={8}
              cols={50}
              placeholder="Additional Comments"
              name="comments"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit">Book Table</button>
      </form>
    </section>
  );
};

const Confirmation = () => {
  return <h1>hi</h1>;
};

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
      <Route path="/confirmation" element={<Confirmation />}></Route>
    </Routes>
  );
};

export default Main;
