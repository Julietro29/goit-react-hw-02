import React from 'react';
import styles from './Options.module.css';

export const Options = ({ onUpdateFeedback, totalFeedback }) => {
  const handleFeedbackClick = (type) => {
    onUpdateFeedback(type);
  };

  return (
    <div>
      <button className={styles.button} type="button" onClick={() => handleFeedbackClick('good')}>Good</button>
      <button className={styles.button} type="button" onClick={() => handleFeedbackClick('neutral')}>Neutral</button>
      <button className={styles.button} type="button" onClick={() => handleFeedbackClick('bad')}>Bad</button>
      {totalFeedback > 0 && <button className={styles.button} type="button" onClick={() => onUpdateFeedback('reset')}>Reset</button>}
    </div>
  );
};
