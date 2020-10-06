import React from 'react';
import { connect } from 'react-redux';
import Exercise from '../../pages/Exercise';
import IUserList from '../../models/IUserList';
import {
  thunkFetchUsers,
  thunkPostUser,
  thunkPatchUser,
  thunkDeleteUser,
} from '../../redux/thunks/users';

const uri = 'https://reqres.in/api/users'; // TODO: This must be changed by a environment variable (for ex.)

const ExerciseContainer = (props: {
  onOpen: Function;
  onCreateUser: Function;
  onUpdateUser: Function;
  onDeleteUser: Function;
  users: IUserList[];
}) => {
  const { onOpen, onCreateUser, onUpdateUser, onDeleteUser, users } = props;

  React.useEffect(() => {
    if (!users || users.length === 0) {
      onOpen(uri);
    }
  }, [onOpen, users]);

  return (
    <Exercise
      users={users}
      onCreate={onCreateUser}
      onUpdate={onUpdateUser}
      onDelete={onDeleteUser}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  onOpen: async (uri: string) => {
    const page1 = `${uri}/?page=1`; // TODO. This must be changed for an attachment to the pagination object
    const page2 = `${uri}/?page=2`; // TODO. Was done only for test purpose
    const page3 = `${uri}/?page=3`;
    await dispatch(thunkFetchUsers(page1));
    await dispatch(thunkFetchUsers(page2));
    await dispatch(thunkFetchUsers(page3));
  },
  onCreateUser: async (
    firstName: string,
    lastName: string,
    email: string,
    avatar: string
  ) => {
    await dispatch(thunkPostUser(firstName, lastName, email, avatar));
  },

  onUpdateUser: async (
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string
  ) => {
    await dispatch(thunkPatchUser(id, firstName, lastName, email, avatar));
  },

  onDeleteUser: async (id: number) => {
    await dispatch(thunkDeleteUser(id));
  },
});

const mapStateToProps = (state: any) => {
  return {
    users: state.users.list,
    loading: state.users.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseContainer);
