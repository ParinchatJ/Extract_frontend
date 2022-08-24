import React from "react";

import ButtonHomePage from "../../components/ButtonHomePage/ButtonHomePage";
import NavBar from "../../components/NavBar/NavBar";

function homePage() {
  return (
    <>
      <NavBar />
      <div className="container-homepage">
        <section className="subcon1">
          <div className="subcon1-content">
            <h1>Asking yourself when to start exercise?</h1>
            <p>Make your life better with our help!</p>
            <ButtonHomePage />
          </div>
          <img src="./assets/home-page1.gif" alt="" />
        </section>

        <section className="subcon2">
          <div className="left-subcon2">
            <img src="./assets/home-page2.gif" alt="" />
            <div className="subcon2-content">
              <h1>Easy to access</h1>
              <p>
                Entry fast and easy, taking less of your valuable time. You can
                use our application from anywhere.
              </p>
            </div>
          </div>
          <div className="mid-subcon2">
            <h1>Keeping yourself motivated</h1>
            <p>Can set your goal and inspirations to motivate yourself.</p>
          </div>
          <div className="right-subcon2">
            <h1>Crate your own lifestyle</h1>
            <p>Feel free to create your own workout lifestyle.</p>
          </div>
        </section>

        <section className="subcon3">
          <div className="body-subcon3">
            <img src="./assets/home-page3.gif" alt="" />
            <div className="content-subcon3">
              <h1>
                The pain you feel today will be the strength you feel tomorrow
              </h1>
              <p>– Arnold Schwarzenegger –</p>
            </div>
          </div>
          <div className="bottom-subcon3">
            <p>"Extrack" – Excercise Tracking</p>
            <ButtonHomePage className="buttonHome2" />
          </div>
        </section>
      </div>
    </>
  );
}

export default homePage;
