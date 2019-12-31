import React from 'react';
import Plx from "react-plx";
import './question-4.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faChartBar } from '@fortawesome/free-solid-svg-icons';

const parallaxData = [
  {
    start: "self",
    startOffset: "10vw",
    end: "self",
    endOffset: "50vh",
    easing: "easeInSine",
    properties: [
        {
            startValue: 45,
            endValue: 0,
            property: "skew",
            unit: "deg"
          },{
            startValue: 0,
            endValue: 1,
            property: "opacity",
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
            endValue: -45,
            property: "skew",
            unit: "deg"
          },{
            startValue: 1,
            endValue: 0,
            property: "opacity",
            unit: ""
          }
    ]
  }
];

const Question4 = () => {
  return (
    <div className="question4">
      <Plx
        parallaxData={parallaxData}
        className="parallax-div"
      >
        <h3 className="question">Tell us about a platform you believe has solved a complex problem really well, and why.
        Would you change anything in their approach?
        </h3>
        <h2 className="answer"><em>
          I could extensible talk about PaaS like Heroku or IaaS like AWS, GCP or Azure; but instead I'd like
          to mention another platform that is a Fitech <FontAwesomeIcon icon={faChartBar} size="lg"></FontAwesomeIcon>: <a rel="noopener noreferrer" target="_blank" href="https://transferwise.com/">Transferwise</a> <br/><br/>

          Transferwise core seling proposition is that it reduce the transfer fee between account located in the same or in different countries 
          but what I think is the more important feature is that it also provide you with
          borderless accounts that allow you to have different currencies in different countries where you can
          receive and send money into like it was a real account (with account number, IBAN, Swift, etc). <br/>

          This is really useful for people that doesn't have access to bank account or to those people that are looking
          to mantein saving in different currencies or even do some FOREX trading. <br/><br/>

          What I would improve from them is the number of countries where they offer the <FontAwesomeIcon icon={faCreditCard} size="lg"></FontAwesomeIcon> Transferwise Debit Card.
          
        </em></h2>
      </Plx>

      <div className="segment" />
    </div>
  )
};

export default Question4;