import styles from './Description.module.css';

export const Description = ({ name, text }) => {
  return (
    <div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};