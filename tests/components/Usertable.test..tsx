import React from 'react';
import { render } from '@testing-library/react';
import UserTable from '../../src/components/UserTable/index';

describe('UserTable component', () => {
  let props: any = {};
  const mockUserList = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Smith',
      email: 'john.smith@fake.com',
      avatar: 'http://images.com/avatar.png',
    },
  ];

  const renderComponent = (changedProps = {}) => {
    props = { ...props, ...changedProps };
    return render(<UserTable {...props} />);
  };

  beforeEach(() => {
    props.users = [mockUserList];
    props.onCreate = jest.fn();
    props.onUpdate = jest.fn();
    props.onDelete = jest.fn();
  });

  it('renders the users data table', () => {
    const { queryByTestId } = renderComponent();
    expect(queryByTestId('users-data-table')).toBeInTheDocument();
  });

  // it('calls "onCreate" prop on create new user button is clicked', () => {
  //   const { queryByTestId } = renderComponent();
  //   fireEvent.click(queryByTestId('create-new-user-button'));
  //   expect(props.onCreate).toHaveBeenCalledTimes(1);
  // });
});
