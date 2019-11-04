import React from 'react';
import './App.css';
import { Image } from 'cloudinary-react';
import Bezier from './img/bezier.svg';

function App() {

  return (
    <div className="app relative">
      <img src={Bezier} className="bezier absolute" alt="bezier" />
      <header className="header-container centered relative">
        <Image cloudName="m2h" publicId="cloud.svg" className="absolute cloud-large left1" alt="cloud" />
        <Image cloudName="m2h" publicId="cloud.svg" className="absolute cloud-med left2" alt="cloud" />
        <Image cloudName="m2h" publicId="cloud.svg" className="absolute cloud-small left3" alt="cloud" />
        <Image cloudName="m2h" publicId="cloud.svg" className="absolute cloud-small right3" alt="cloud" />
        <Image cloudName="m2h" publicId="cloud.svg" className="absolute cloud-med right2" alt="cloud" />
        <Image cloudName="m2h" publicId="cloud.svg" className="absolute cloud-large right1" alt="cloud" />
        <div className="sun centered">
          <span className="logo">dwellings</span>
        </div>
      </header>
      <main className="flex relative">
        <div className="container-left">
          <h1 className="headline">Housing for Entrepreneurs</h1>
          <h2 className="subhead">Become roommates with brilliant people in luxury homes across the globe.</h2>
          <div className="signup-container centered space-between">
            <input type="email" placeholder="Email Address" className="email-input regular" />
            <button className="btn regular relative">
              <div className="btn-inside absolute centered regular">Request an Invite</div></button>
          </div>
          <div className="flex space-between">
            <div className="card centered"><p className="description-text">Know your roommates before making any commitments.</p></div>
            <div className="card centered"><p className="description-text">Average rent is less than $900 per person. </p></div>
            <div className="card centered"><p className="description-text">Long term and short term stays available.</p></div>
          </div>
        </div>
        <div className="centered container-right">
          <Image cloudName="m2h" publicId="home.svg" className="home-img" alt="home with people inside" />
        </div>
      </main>


    </div>
  );
}

export default App;
