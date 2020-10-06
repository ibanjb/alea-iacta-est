import React, { useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import IUserList from '../../models/IUserList';
import ConfirmationModel from '../ConfirmationModel';
import UserModal from '../UserModal';
import * as styles from './styles.module.scss';

createTheme('aleaTheme', {
  action: {
    button: 'rgb(245, 85, 46)',
    hover: 'rgb(245, 85, 46)',
    disabled: 'rgba(0,0,0,.12)',
  },
});

const UserTable = (props: {
  users: IUserList[];
  onCreate: Function;
  onUpdate: Function;
  onDelete: Function;
}) => {
  const { users, onCreate, onUpdate, onDelete } = props;

  const [createUserVisible, setCreateUserVisible] = useState(false);
  const [updateUserVisible, setUpdateUserVisible] = useState(false);
  const [deleteUserVisible, setDeleteUserVisible] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
  });

  const handleCreateUserButton = React.useCallback(() => {
    setCreateUserVisible(true);
    setUser({ id: 0, firstName: '', lastName: '', email: '', avatar: '' });
  }, [setCreateUserVisible]);

  const handleCreateUserAccept = React.useCallback(
    (
      _id: any,
      firstName: string,
      lastName: string,
      email: string,
      avatar: string
    ) => {
      setCreateUserVisible(false);
      onCreate(firstName, lastName, email, avatar);
    },
    [setCreateUserVisible]
  );

  const handleCreateUserCancel = React.useCallback(() => {
    setCreateUserVisible(false);
  }, [setCreateUserVisible]);

  const handleUpdateUserButton = React.useCallback(
    (
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      avatar: string
    ) => {
      setUpdateUserVisible(true);
      setUser({ id, firstName, lastName, email, avatar });
    },
    [setUpdateUserVisible]
  );

  const handleUpdateUserAccept = React.useCallback(
    (
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      avatar: string
    ) => {
      setUpdateUserVisible(false);
      onUpdate(id, firstName, lastName, email, avatar);
    },
    [setUpdateUserVisible]
  );

  const handleUpdateUserCancel = React.useCallback(() => {
    setUpdateUserVisible(false);
  }, [setUpdateUserVisible]);

  const handleDeleteUserButton = React.useCallback(
    (
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      avatar: string
    ) => {
      setDeleteUserVisible(true);
      setUser({ id, firstName, lastName, email, avatar });
    },
    [setDeleteUserVisible]
  );

  const handleDeleteUserAccept = React.useCallback(
    (id: number) => {
      setDeleteUserVisible(false);
      onDelete(id);
    },
    [setDeleteUserVisible]
  );

  const handleDeleteUserCancel = React.useCallback(() => {
    setDeleteUserVisible(false);
  }, [setDeleteUserVisible]);

  const columns = [
    {
      name: '',
      cell: (row: { avatar: string; first_name: string }) => (
        <div>
          <img
            className={styles.avatar}
            src={row.avatar}
            alt={row.first_name}
          />
        </div>
      ),
    },
    {
      name: 'First Name',
      selector: 'first_name',
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: 'last_name',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Actions',
      sortable: false,
      cell: (row: any) => (
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src="assets/update.svg"
            onClick={() =>
              handleUpdateUserButton(
                row.id,
                row.first_name,
                row.last_name,
                row.email,
                row.avatar
              )
            }
            alt="update"
          />
          <img
            className={styles.icon}
            src="assets/delete.svg"
            onClick={() =>
              handleDeleteUserButton(
                row.id,
                row.first_name,
                row.last_name,
                row.email,
                row.avatar
              )
            }
            alt="delete"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable
        theme="aleaTheme"
        columns={columns}
        data={users}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 20]}
      />
      <button className={styles.button} onClick={handleCreateUserButton}>
        Create new user
      </button>
      <UserModal
        visible={createUserVisible}
        onAccept={handleCreateUserAccept}
        onCancel={handleCreateUserCancel}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        avatar={user.avatar}
      />
      <UserModal
        visible={updateUserVisible}
        onAccept={handleUpdateUserAccept}
        onCancel={handleUpdateUserCancel}
        id={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        avatar={user.avatar}
      />
      <ConfirmationModel
        visible={deleteUserVisible}
        title="Are you sure to delete this user?"
        description="This action cannot be undone"
        onAccept={handleDeleteUserAccept}
        onCancel={handleDeleteUserCancel}
      />
    </>
  );
};
export default UserTable;
