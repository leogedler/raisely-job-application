import React from 'react';
import Plx from "react-plx";
import './question-3.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGraduationCap, faTimes } from '@fortawesome/free-solid-svg-icons';

const parallaxData = [
  {
    start: "self",
    startOffset: "0",
    end: "self",
    endOffset: "60vh",
    easing: "easeInSine",
    properties: [
      {
        startValue: 35,
        endValue: 0,
        property: "translateX",
        unit: "vw"
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
        endValue: -35,
        property: "translateX",
        unit: "vw"
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

const Question3 = () => {
  return (
    <div className="question3">
      <Plx
        parallaxData={parallaxData}
        className="parallax-div"
      >
        <h4 className="question">Look at this <a rel="noopener noreferrer" target="_blank" href="https://gist.github.com/tommaitland/8b5447c4579fa681b2a859e68de90135">list of tasks</a> and tell us which two you are excited by,
        which two you want to learn and the two you don’t want to do.
        </h4>
        <h2 className="answer"><em>

          <h3><FontAwesomeIcon icon={faCheck} size="lg"></FontAwesomeIcon> I'm Exited about</h3>
          <ul>
            <li>Building a suite of Google Cloud Functions in Node to send automatic e-cards to donors</li>
            <li>Customising one of our pre-built themes to suit a customer's brand and campaign</li>
          </ul>

          <h3><FontAwesomeIcon icon={faGraduationCap} size="lg"></FontAwesomeIcon> I'd like to learn</h3>
          <ul>
            <li>Creating a complex, multi-step signup form using Create React App, Stripe payments and our API</li>
            <li>Integrating Raisely to Salesforce, via Zapier</li>
          </ul>

          <h3><FontAwesomeIcon icon={faTimes} size="lg"></FontAwesomeIcon> I'd prefer avoid</h3>
          <ul>
            <li>Looking at data (SQL or spreadsheets) to figure out the A/B test to set up in Google Optimize</li>
            <li>Running a SQL report to find which customers you should check-in with</li>
          </ul>

        </em></h2>
      </Plx>

      <div className="segment" />
    </div>
  )
};

export default Question3;