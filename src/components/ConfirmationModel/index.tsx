import * as React from 'react';
import * as styles from './styles.module.scss';

const ConfirmationModel = (props: {
  visible: boolean;
  title: string;
  description: string;
  onAccept: Function;
  onCancel: Function;
}) => {
  const { visible, title, description, onAccept, onCancel } = props;

  const handleAcceptButton = React.useCallback(() => {
    onAccept();
  }, [onAccept]);

  const handleCancelButton = React.useCallback(() => {
    onCancel();
  }, [onCancel]);

  return (
    <>
      {visible && (
        <div id="modal" className={styles.root}>
          <div className={styles.container}>
            <div className={styles.content}>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.content}>
              <button className={styles.button} onClick={handleCancelButton}>
                Cancel
              </button>
              <button className={styles.button} onClick={handleAcceptButton}>
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ConfirmationModel;
