# Alea iacta est - Exercise

![splash](./docs/splashScreen.png)

![Completed](https://img.shields.io/badge/Completed-100%25-green.svg)
![Typescript](https://img.shields.io/badge/Typescript-Done-blue)
![UnitTest](https://img.shields.io/badge/Unit%20test-Completed-blueviolet)

## Summary

### Requirements

- Create a Signup page.
- Create a Login page.
- Create a User Table List.
- Allow paginating on User Table List.
- Allow creating new Users.
- Allow editing User.
- Allow deleting User.
- Unit Testing
- Create custom error Pages (404, 403, 500)

### Comments

Something good to know before proceed:

- Used Typescript and SCSS as stack.
- I didn't use any UI library but the data table that I use 'react-data-table-component' (https://github.com/jbetancur/react-data-table-component#readme)
- Used some images from Alea homepage to look similar
- The sign up and sign in flow is not done due lack of time
- 404 page is used with react-router, miss to implement 403 and 500

### Pages

#### Splash screen

On this screen you will find all the routes available for this PoC to allow navigate between the screens 'easily'.

![splashScreen](./docs/splashScreen.png)

#### Sign up screen

Appears two links, the first one is to move to the sign in screen in case that the user has an account, the other one is to show the terms of service page (not implemented)

![createAccountScreen](./docs/createAccountScreen.png)

#### Sign in screen

Same above, appears one link to move to the sign up screen in case the user doesn't have a valid account.

![loginScreen](./docs/loginScreen.png)

#### Exercise screen

On this screenshot you will see, in the right side, the implementation of a snackbar to show the succesfull state of create, update or delete an user.

![userTableScreen](./docs/userTableScreen.png)

#### 404 screen

Using the 'famous' T-Rex from Chrome, created the 404 page. This component is the same for 403, 404 and 500, only changes the title to show.

![notFoundScreen](./docs/notFoundScreen.png)

#### 403 screen

![forbiddenScreen](./docs/forbiddenScreen.png)

#### 500 screen

![internalServerErrorScreen](./docs/internalServerErrorScreen.png)
