import * as React from 'react';
import * as styles from './styles.module.scss';

const ErrorMessage = (props: { title: string; description: string }) => {
  const { title, description } = props;
  return (
    <div className={styles.root}>
      <div className={styles.imageContainer}>
        <img
          className={styles.centerImage}
          src='assets/dino-t-rex.jpg'
          alt='404'
        />
      </div>
      <div className={styles.messageContainer}>
        <div className={styles.messageTitle}>
          <p>{title}</p>
        </div>
        <div className={styles.messageDescription}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default ErrorMessage;
