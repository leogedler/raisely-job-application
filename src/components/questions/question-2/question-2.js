import React from 'react';
import Plx from "react-plx";
import './question-2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas, faUserCheck } from '@fortawesome/free-solid-svg-icons';

const parallaxData = [
  {
    start: "self",
    startOffset: "10vw",
    end: "self",
    endOffset: "50vh",
    easing: "easeInSine",
    properties: [
      {
        startValue: 90,
        endValue: 0,
        property: "rotate",
        unit: "deg"
      },
      {
        startValue: 20,
        endValue: 0,
        property: "translateY",
        unit: "vw"
      },
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
        endValue: -90,
        property: "rotate",
        unit: "deg"
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
        unit: ""
      },
      {
        startValue: 0,
        endValue: -50,
        property: "translateY",
        unit: "vw"
      },
    ]
  }
];

const Question2 = () => {
  return (
    <div className="question2">
      <Plx
        parallaxData={parallaxData}
        className="parallax-div"
      >
        <h3 className="question">Why do you want to work here over somewhere else?</h3>
        <h2 className="answer"><em>

          I like Raisely selling proposition about letting the customer create his/her fundraising campaign really fast an easy but also with the option to customize it further. <br /><br />
          I also found really appealing the way that you talk about this position,
          especially when you say that this isn't your usual web developer role ... <br /><br />

          I like the idea to have control over the customer and be able to build with them the campaign and strategy,
          this sound like be a freelance inside and organization and that sound awesome to me. <FontAwesomeIcon icon={faUserCheck} size="lg" /><br /><br />

          I'm looking for a position where I can have the liberty to work wherever I feel confortable as long
        I deliver my work. <FontAwesomeIcon icon={faGlobeAmericas} size="lg" /><br />
        </em></h2>
      </Plx>

      <div className="segment" />
    </div>
  )
};

export default Question2;