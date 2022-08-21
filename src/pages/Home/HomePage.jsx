import React from "react";

import ButtonHomePage from '../../components/ButtonHomePage/ButtonHomePage'

import "./homePage.css";

function homePage() {
  return (
    <div className="container-homepage">
      <section className="subcon1">
        <div className="subcon1-content">
          <h1>Asking yourself when to start exercise?</h1>
          <p>improve your workout game with our help!</p>
          <ButtonHomePage />
        </div>
        <img src="./assets/home-page1.gif" alt="" />
      </section>

      <section className="subcon2">
        <div className="left-subcon2">
          <img src='./assets/home-page2.gif' alt="" /> 
          <div className="subcon2-content">
            <h1>Timer</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus expedita numquam qui inventore, accusantium modi eos
              nulla ut provident voluptates maxime perferendis id accusamus.
            </p>
          </div>
        </div>
        <div className="mid-subcon2">
          <h1>TESTTEST</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            minima ex quo inventore culpa explicabo tempora, quia suscipit
            placeat earum odit ipsam sed temporibus, vitae id eos accusantium!
            Sunt, est. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus expedita numquam qui inventore, accusantium modi eos
            nulla ut provident voluptates maxime perferendis id accusamus.
          </p>
        </div>
        <div className="right-subcon2">
          <h1>TESTTEST</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            minima ex quo inventore culpa explicabo tempora, quia suscipit
            placeat earum odit ipsam sed temporibus, vitae id eos accusantium!
            Sunt, est. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus expedita numquam qui inventore, accusantium modi eos
            nulla ut provident voluptates maxime perferendis id accusamus.
          </p>
        </div>
      </section>

      <section className="subcon3">
        <div className="body-subcon3">
          <img src="./assets/home-page3.gif" alt="" /> 
          <div className="content-subcon3">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              minima ex quo inventore culpa explicabo tempora, quia suscipit
              placeat earum odit ipsam sed temporibus, vitae id eos accusantium!
            </p>
          </div>
        </div>
        <div className="bottom-subcon3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam
            accusantium sequi? Doloremque illo dolore molestiae neque amet magni
            eligendi, veritatis ea vitae. Odio molestiae quia sit quis ut
            ratione!
          </p>
          <ButtonHomePage className='buttonHome2' />
        </div>
      </section>
    </div>
  );
}

export default homePage;
