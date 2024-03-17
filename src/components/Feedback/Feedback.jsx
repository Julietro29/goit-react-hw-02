import styles from './Feedback.module.css';

export const Feedback = ({ feedbackData, totalFeedback }) => {
  const { good, neutral, bad } = feedbackData;

  return (
      <ul className={styles.feedbackList} >
        <li className={styles.feedbackListItem}>Good: {good}</li>
        <li className={styles.feedbackListItem}>Neutral: {neutral}</li>
        <li className={styles.feedbackListItem}>Bad: {bad}</li>
        <li className={styles.feedbackListItem}>Total: {totalFeedback}</li>
      </ul>
    )
};
