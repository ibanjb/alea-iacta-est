import reducer, { initialState } from '../../src/redux/reducers/users';
import * as actions from '../../src/redux/actions/users';

describe('Users reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Fetch users from API', () => {
    it('enables the property loading', () => {
      expect(reducer(initialState, actions.fetchUsersRequest())).toEqual({
        ...initialState,
        loading: true,
      });
    });
    it('retrieves a user list succesfully and disables the property loading', () => {
      const mockUserList = [
        {
          id: 1,
          first_name: 'John',
          last_name: 'Smith',
          email: 'john.smith@fake.com',
          avatar: 'http://images.com/avatar.png',
        },
      ];
      expect(
        reducer(
          initialState,
          actions.fetchUsersSuccess({ data: [mockUserList] })
        )
      ).toEqual({
        ...initialState,
        loading: false,
        list: [mockUserList],
      });
    });

    it('receives a failure retrieving a list of users and disables the property loading', () => {
      expect(reducer(initialState, actions.fetchUsersFailure(null))).toEqual({
        ...initialState,
        loading: false,
        list: [],
      });
    });
  });
});
