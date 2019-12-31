import React from 'react';
import './App.scss';

import Question1 from '../questions/question-1/question-1';
import Question2 from '../questions/question-2/question-2';
import Question3 from '../questions/question-3/question-3';
import Question4 from '../questions/question-4/question-4';
import PersonalData from '../personal-data/personal-data';

function App() {
  return (
    <div className="App">
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <PersonalData />
    </div>
  );
}

export default App;
