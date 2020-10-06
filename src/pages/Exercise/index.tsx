import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IUserList from '../../models/IUserList';
import UserTable from '../../components/UserTable';
import * as styles from './styles.module.scss';

const Exercise = (props: {
  users: IUserList[];
  onCreate: Function;
  onUpdate: Function;
  onDelete: Function;
}) => {
  const { users, onCreate, onUpdate, onDelete } = props;
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCreateUser = React.useCallback(
    (firstName: string, lastName: string, email: string, avatar: string) => {
      onCreate(firstName, lastName, email, avatar);
      setSnackbarMessage('User created succesfully');
      showSnackbar();
    },
    [setSnackbarMessage]
  );

  const handleUpdateUser = React.useCallback(
    (
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      avatar: string
    ) => {
      onUpdate(id, firstName, lastName, email, avatar);
      setSnackbarMessage('User updated succesfully');
      showSnackbar();
    },
    [setSnackbarMessage]
  );

  const handleDeleteUser = React.useCallback(
    (id: number) => {
      onDelete(id);
      setSnackbarMessage('User deleted succesfully');
      showSnackbar();
    },
    [setSnackbarMessage]
  );

  const showSnackbar = () => {
    const element = document.getElementById('snackbar');
    if (element) {
      element.style.visibility = 'visible';
      element.style.animation = 'fadein 0.5s, fadeout 0.5s 2.5s';
      setTimeout(() => {
        element.className = element.className.replace('show', '');
        element.style.visibility = 'hidden';
        setSnackbarMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.root}>
        <section id="datatable" className={styles.container}>
          <UserTable
            users={users}
            onCreate={handleCreateUser}
            onUpdate={handleUpdateUser}
            onDelete={handleDeleteUser}
          />
        </section>
      </div>
      <div id="snackbar" className={styles.snackbar}>
        {snackbarMessage}
      </div>
      <Footer />
    </>
  );
};
export default Exercise;
