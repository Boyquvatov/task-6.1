import { useState } from 'react'
import userimg from './assets/user_img.png'
import cardimg1 from './assets/card-img1.png'
import cardimg2 from './assets/card-img2.png'
import cardimg3 from './assets/card-img3.png'
import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <div className="nav">
      <div className="links">
        <a href="#">Works</a>
        <a href="#">Blok</a>
        <a href="#">Contact</a>
      </div>
      <div className="icon">
      <i class="fa-solid fa-bars"></i>
      </div>
      <div className="userbio">
        <div className="user_text">
          <h2>Hi, I am John, Creative Technologist</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <form>
            <button type='submit' className='btn'>Download Resume</button>
          </form>
        </div>
        <div className="user_img">
          <img src={userimg} alt="userimg" />
        </div>
      </div>
      </div>
      <div className="main">
        <div className="main-cards">
          <div className="main-nav">
            <h4>Recent posts</h4>
            <a href="#">View all</a>
          </div>
          <div className="nav-cards">
          <div className="main-card">
            <h3>Making a design system from scratch</h3>
            <div className="data">
              <span>12 Feb 2020</span>
              <div className="hr"></div>
              <span>Design, Pattern</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className="main-card">
            <h3>Creating pixel perfect icons in Figma</h3>
            <div className="data">
              <span>12 Feb 2020</span>
              <div className="hr"></div>
              <span>Figma, Icon Design</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          </div>
        </div>
        <div className="cards">
          <h4>Featured works</h4>
          <div className="card">
            <div className="card-img">
              <img src={cardimg1} alt="cardim1" />
            </div>
            <div className="desc">
              <h2>Designing Dashboards</h2>
              <p><span className='year'>2020</span><span className='opc'>Dashboard</span></p>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={cardimg2} alt="cardim2" />
            </div>
            <div className="desc">
              <h2>Vibrant Portraits of 2020</h2>
              <p><span className='year'>2018</span><span className='opc'>Illustration</span></p>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={cardimg3} alt="cardim3" />
            </div>
            <div className="desc">
              <h2>36 Days of Malayalam type</h2>
              <p><span className='year'>2018</span><span className='opc'>Typography</span></p>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="icons-desc">
          <p>Copyright ©2020 All rights reserved</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
