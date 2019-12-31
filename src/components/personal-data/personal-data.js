import React from 'react';
import Plx from "react-plx";
import './personal-data.scss';
import programmer from './programmer-states.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';

const parallaxData = [
  {
    start: "self",
    startOffset: "10vw",
    end: "self",
    endOffset: "50vh",
    easing: "easeInSine",
    properties: [
      {
        startValue: 0.3,
        endValue: 1,
        property: "scale",
        unit: ""
      }
    ]
  },
  {
    start: "self",
    startOffset: "60vh",
    end: "self",
    endOffset: "100vh",
    easing: "easeInSine",
    properties: [
      {
        startValue: 1,
        endValue: 1.5,
        property: "scale",
        unit: ""
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
        unit: ""
      }
    ]
  }
];

const PersonalData = () => {
  return (
    <div className="personal">
      <Plx
        parallaxData={parallaxData}
        className="parallax-div"
      >

        <h3>About me <FontAwesomeIcon icon={faGlasses} size="lg"></FontAwesomeIcon></h3>

        <h3 className="content">
          Full Stack developer with 6 years experience in the IT industry. Founder of his own start up, with great experience working in a fast paced environment focused on meeting the client needs. Key team player who can learn new technologies very fast and take a project from scratch to success.<br/> 
          Extensive experience in the MEAN / MERN-Stack, using Angular / React / Vue as a frameworks for the web frontend and NodeJS - ExpressJs - MongoDB - GraphQL - MySql for the backend. Solid knowledge of JavaScript ES5 / ES6 / ES7, HTML5 and CSS3. Additional experience developing mobile Apps for Android and iOS devices using React Native / NativeScript frameworks.<br/>
          Ethereum platform knowledge, creating Smart Contracts and deploying them into the network using Solidity, Remix, Web3 and MetaMask.
        </h3>
        <h3><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/leogedler/">Linkedin</a></h3>
        <h3><a rel="noopener noreferrer" target="_blank" href="https://github.com/leogedler">Github</a></h3>
      </Plx>

      <div className="segment" />
      <div className="meme-image">
          <img alt="programmer-states" src={programmer}></img>
        </div>
    </div>
  )
};

export default PersonalData;