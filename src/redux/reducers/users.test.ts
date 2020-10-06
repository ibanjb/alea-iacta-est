// import reducer, { initialState } from './users';
// import * as actions from '../actions/users';

// describe('Users reducer', () => {
//   it('returns the initial state', () => {
//     expect(reducer(undefined, {})).toEqual(initialState);
//   });

//   describe('Fetch cars from API', () => {
//     it('enables the property loading', () => {
//       expect(reducer(initialState, actions.fetchUsersRequest())).toEqual({
//         ...initialState,
//         loading: true,
//       });
//     });
//     it('retrieves a cars list succesfully and disables the property loading', () => {
//       const mockUserList = [{ id: 1, make: 'alfa-romeo', model: 'spider' }];
//       expect(
//         reducer(initialState, actions.fetchUsersSuccess([mockUserList]))
//       ).toEqual({
//         ...initialState,
//         loading: false,
//         list: [mockUserList],
//       });
//     });

//     it('receives a failure retrieving a list of cars and disables the property loading', () => {
//       expect(reducer(initialState, actions.fetchUsersFailure(null))).toEqual({
//         ...initialState,
//         loading: false,
//         list: [],
//       });
//     });
//   });

//   describe('Comparison', () => {
//     let mockState: any;

//     let carMock = {
//       id: 1,
//       make: 'alfa-romeo',
//       model: 'spider',
//       selectedToCompare: false,
//     };

//     beforeEach(() => {
//       mockState = {
//         ...initialState,
//         list: [carMock],
//       };
//     });

//     it('add car to comparison', () => {
//       const expectedUser = { ...carMock, selectedToCompare: true };
//       expect(reducer(mockState, actions.addUserToComparison(1))).toEqual({
//         ...initialState,
//         loading: false,
//         list: [expectedUser],
//       });
//     });
//     it('removes car from comparison', () => {
//       const expectedUser = { ...carMock, selectedToCompare: false };
//       expect(reducer(mockState, actions.removeUserFromComparison(1))).toEqual({
//         ...initialState,
//         loading: false,
//         list: [expectedUser],
//       });
//     });
//   });
// });
