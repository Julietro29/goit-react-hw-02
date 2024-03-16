import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';

const App = () => {
  const initialFeedbackData = JSON.parse(localStorage.getItem('feedbackData')) || {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [feedbackData, setFeedbackData] = useState(initialFeedbackData);

  const totalFeedback = feedbackData.good + feedbackData.neutral + feedbackData.bad;

  const updateFeedback = (type) => {
    if (type === 'good' || type === 'neutral' || type === 'bad') {
      setFeedbackData(prevFeedbackData => ({
        ...prevFeedbackData,
        [type]: prevFeedbackData[type] + 1
      }));
    } else if (type === 'reset') {
      setFeedbackData({
        good: 0,
        neutral: 0,
        bad: 0
      });
    }
  };

  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
  }, [feedbackData]);

  return (
    <div>
      <Description 
        name="Sip Happens Café" 
        text="Please leave your feedback about our service by selecting one of the options below." 
      />
      <div>
        <Options onUpdateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      </div>
      {totalFeedback === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <Feedback feedbackData={feedbackData} totalFeedback={totalFeedback} />
      )}
    </div>
  );
};

export default App
