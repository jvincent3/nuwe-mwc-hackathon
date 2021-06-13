# Getting started MWC Nuwe Hackathon Challenge

This repository contains the source code for MWC Nuwe Hackathon Challenge. List of pokemons which showcases each pokemon its data. This website is built on [Create-React-App](https://github.com/facebook/create-react-app).

## Folder structure

**Structured based on file type**

## Live preview

[Click here to see live preview](https://hackathon-mwc-nuwe-jvincent3.vercel.app/)

### Example:

```
src/
|-- components/
|   |-- Avatar/
|   |   |-- Avatar.js
|   |   |-- Avatar.test.js
|   |-- Button/
|   |   |-- Button.js
|   |   |-- Button.test.js
|   |-- TextField/
|   |   |-- TextField.js
|   |   |-- TextField.test.js
|-- contexts/
|   |-- UserContext/
|   |   |-- UserContext.js
|-- hooks/
|   |-- useMediaQuery/
|   |   |-- useMediaQuery.js
|-- pages/
|   |-- UserProfile/
|   |   |-- components/
|   |   |   |-- SomeUserProfileComponent/
|   |   |   |   |-- SomeUserProfileComponent.js
|   |   |   |   |-- SomeUserProfileComponent.test.js
|   |   |-- UserProfile.js
|   |   |-- UserProfile.test.js
|   |-- index.js
|-- routes/
|   |-- routes.js
|   |-- routes.test.js
|-- utils/
|   |-- some-util/
|   |   |-- index.js
|   |   |-- someUtil.js
|   |   |-- index.test.js
|-- services/
|   |-- some-service/
|   |   |-- index.js/
|   |   |-- someService.js/
|   |   |-- index.test.js
|-- App.js
|-- index.js
```

# Learn more

To be more familiar with the libraries I have mainly used I will leave a small explanation here:

### [Chakra-UI](https://chakra-ui.com/)

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

### [React Router](https://reactrouter.com/)

React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!

### [Formik](https://formik.org/)

Formik is a small library that helps you with the 3 most annoying parts:

- Getting values in and out of form state
- Validation and error messages
- Handling form submission

By colocating all of the above in one place, Formik will keep things organized--making testing, refactoring, and reasoning about your forms a breeze.


### [Yup](https://github.com/jquense/yup)

Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformations.

# Contributing

In order to contribute I recomend to check undestand a bit about the Folder structure and the libraries mentioned on top. It is important since you'll be encountering most of the components are created using Chakra-UI styles, Forms with formik and validations with Yup.

It is important to keep the code simple and tiny in order to not struggle refactoring mistakes and headachese when reading the code.

## Getting Started

### Prerequisities

-   Git
-   [Node](https://nodejs.org/en/): 10.16.0 or greater
-   A GitHub fork of the repo (for any contributions)
-   A clone of the [MWC Nuwe Hackathon repo](https://github.com/jvincent3/nuwe-mwc-hackathon) on your local machine

### Installation

1. `cd nuwe-mwc-hackathon` to go into the project root.
2. `npm install` to install project dependencies.

### Running locally

1. `npm run start` to start the hot-reloading development server (powered by [Create-React-App](https://github.com/facebook/create-react-app)).
2. Go to `http://localhost:3000` to view the site in your browser.

### Building for production

1. `npm run build` to build the production site.
2. `npm run serve` to serve the production version of the site on a local test server.

Production files are located in the `dist` directory.


## Happy coding!

