import React from 'react';
import Plx from "react-plx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHourglassStart, faHourglassHalf, faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import './question-1.scss';


const parallaxData = [
  {
    start: "self",
    startOffset: "10vw",
    end: "self",
    endOffset: "50vh",
    easing: "easeInSine",
    properties: [
      {
        startValue: 7,
        endValue: 0,
        property: "blur",
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
        startValue: 0,
        endValue: 7,
        property: "blur",
        unit: ""
      }
    ]
  }
];

const Question1 = () => {
  return (
    <div className="question1">
      <div className="start-div">
        <h1>Start scrolling to have some answers from <span className="name">Leonardo Gedler</span> (leonardogedler@gmail.com) <br />
          <FontAwesomeIcon icon={faChevronDown} size="lg" />
        </h1>
      </div>
      <div className="segment" />
      <Plx
        parallaxData={parallaxData}
        className="parallax-div"
      >
        <h3 className="question">Why would you be a good fit for the Campaign Developer role?</h3>

        <h2 className="answer"><em>I think that I have a good experience working in fast paced environments as a employee / freelance and also as
        startup founder, I know how to meet deadlines and also fulfill the client's requirement as fast as possible
        with the tools available.

        <br/><br/>
        
        A have good experience working with JavaScript (Vanilla / Node / React / Angular ...) in general and with HTML / CSS.
        
        <br/><br/>
        
        I like challenges and I try to be as bootstrapper as I can.

        <br/><br/>

        Time is the most precious resource!, when I'm about to start working on every project I always start it thinking: 
        What should I do to optimize my work in function to the time that I've got... 
        <FontAwesomeIcon icon={faHourglassStart} size="lg"  className="clock"/> 
        <FontAwesomeIcon icon={faHourglassHalf} size="lg" className="clock" /> 
        <FontAwesomeIcon icon={faHourglassEnd} size="lg" className="clock" />
        </em></h2>

      </Plx>
      <div className="segment" />
    </div >
  )
};

export default Question1;