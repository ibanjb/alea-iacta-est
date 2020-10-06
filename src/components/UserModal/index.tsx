import * as React from 'react';
import * as styles from './styles.module.scss';

const UserModal = (props: {
  visible: boolean;
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
  onAccept: Function;
  onCancel: Function;
}) => {
  const {
    visible,
    id,
    firstName,
    lastName,
    email,
    avatar,
    onAccept,
    onCancel,
  } = props;

  const [_firstName, setFirstName] = React.useState('');
  const [_lastName, setLastName] = React.useState('');
  const [_email, setEmail] = React.useState('');
  const [_avatar, setAvatar] = React.useState('');

  React.useMemo(() => {
    setFirstName(firstName || '');
  }, [firstName]);
  React.useMemo(() => {
    setLastName(lastName || '');
  }, [lastName]);
  React.useMemo(() => {
    setEmail(email || '');
  }, [email]);
  React.useMemo(() => {
    setAvatar(avatar || '');
  }, [avatar]);

  const handleFirstName = React.useCallback((e: any) => {
    setFirstName(e.target.value);
  }, []);

  const handleLastName = React.useCallback((e: any) => {
    setLastName(e.target.value);
  }, []);

  const handleEmail = React.useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const handleAvatar = React.useCallback((e: any) => {
    setAvatar(e.target.value);
  }, []);

  const handleAcceptButton = React.useCallback(() => {
    onAccept(id, _firstName, _lastName, _email, _avatar);
  }, [onAccept]);

  const handleCancelButton = React.useCallback(() => {
    onCancel();
  }, [onCancel]);

  return (
    <>
      {visible && (
        <div id="modal" className={styles.root}>
          <div className={styles.container}>
            <div className={styles.closeButton}>
              <img
                className={styles.icon}
                src="assets/close.svg"
                onClick={handleCancelButton}
                alt="update"
              />
            </div>
            <div className={styles.fields}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="First name"
                  value={_firstName}
                  onChange={handleFirstName}
                />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Last name"
                  value={_lastName}
                  onChange={handleLastName}
                />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  placeholder="Email"
                  value={_email}
                  onChange={handleEmail}
                />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Avatar"
                  value={_avatar}
                  onChange={handleAvatar}
                />
              </div>
            </div>
            <button className={styles.button} onClick={handleCancelButton}>
              Cancel
            </button>
            <button className={styles.button} onClick={handleAcceptButton}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default UserModal;
