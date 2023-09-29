## Deployment Link

Here I have the project deployed: [**Try Smart Parking Ghent**](https://smart-parking-gent.netlify.app)

## Table of Contents

- [Smart Park Web App](#smart-park-web-app)
  - [Features](#features)
  - [Technologies Stack](#technologies-stack)
  - [Dependencies](#dependencies)
  - [Getting Started](#getting-started)
  - [Continuous Improvement](#continuous-improvement)
    - [1. Error Handling Enhancement](#1-error-handling-enhancement)
    - [2. Reliability Testing](#2-reliability-testing)
  - [Try It Out!](#try-it-out)

# Smart Park Web App

Welcome to the **Smart Park** web app repository! This React web application provides you with real-time parking information for the beautiful city of Ghent, Belgium. Say goodbye to the hassle of searching for available parking spaces; with this app, you can effortlessly find your favourite parking spots, monitor their availability, and plan your visit to Ghent with ease.

## Features

- **Real-Time Data:** Stay up-to-date with live parking information.
- **User-Friendly Interface:** Enjoy a user-friendly and responsive design for a seamless browsing experience.
- **Filtered Informations:** The app displays only the most convenient parking locations for quick access during future visits.

## Technologies Stack

| Dependency            | Reasons for Choosing                                                                                                                                               | Alternatives                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **axios**             | - I chose axios because it simplifies making HTTP requests in React, making the application more efficient and readable.                                           | - I could have used the built-in `fetch` function, but axios provides a more user-friendly API.                              |
| **framer-motion**     | - Framer Motion was selected because it offers a powerful animation library that greatly enhances the user experience in the web app.                              | - While `react-spring` is an option, Framer Motion stood out for its robust animation capabilities.                          |
| **react-router-dom**  | - React Router DOM was the ideal choice to enable routing and navigation, allowing us to create a seamless multi-page experience.                                  | - `reach-router` is an alternative, but React Router DOM is widely adopted and well-supported.                               |
| **styled-components** | - Styled Components was my preference as it enables us to style components with CSS-in-JS, promoting modularity and maintainability.                               | - Tailwind CSS: An alternative utility-first CSS framework that simplifies styling and maintains a consistent design system. |
| **swr**               | - SWR is vital to the project for its data fetching with caching and revalidation, ensuring real-time updates and improved performance.                            | - `react-query` is a valid alternative, but SWR perfectly suits the real-time needs.                                         |
|                       | - SWR's capability to synchronize data in real-time is crucial for application's responsiveness and data accuracy.                                                 |                                                                                                                              |
| **usehooks-ts**       | - I opted for usehooks-ts due to its collection of custom React hooks that enhance developer productivity and code reusability.                                    | - While I could create custom hooks by myself, usehooks-ts saves time and effort.                                            |
| **TypeScript**        | - TypeScript was chosen to introduce static typing to JavaScript codebase, bolstering code quality, reducing errors, and fostering collaboration among developers. | - I could have used plain JavaScript, TypeScript provides stricter type checking and better IDE support.                     |
|                       | - The strict type checking and strong tooling support offered by TypeScript align with the goals of maintaining a robust and reliable codebase.                    |                                                                                                                              |

## Dependencies

To run this project, you will need the following npm packages:

- **axios:** [axios](https://www.npmjs.com/package/axios) - For making HTTP requests.
- **framer-motion:** [framer-motion](https://www.npmjs.com/package/framer-motion) - For animations.
- **react-router-dom:** [react-router-dom](https://www.npmjs.com/package/react-router-dom) - For routing in React applications.
- **styled-components:** [styled-components](https://www.npmjs.com/package/styled-components) - For styling components with CSS-in-JS.
- **swr:** [swr](https://www.npmjs.com/package/swr) - For data fetching and caching.
- **usehooks-ts:** [usehooks-ts](https://www.npmjs.com/package/usehooks-ts) - Custom React hooks.

## Getting Started

To get started with the Gent Parking Info app, follow these simple steps:

1. **Clone the Repository:** Clone this repository to your local machine using `git clone`.

2. **Install Dependencies:** Run `npm install` or `yarn install` to install the necessary dependencies.

3. **Start the Development Server:** Launch the development server with `npm start` or `yarn start`.

4. **Explore Gent:** Open the app in your web browser and start exploring available parking options in Gent!

## Continuous Improvement

For Smart Park app, I am committed to delivering a reliable and robust experience to the users. To ensure the highest level of quality and performance, I plan to continually work on enhancing error handling and conducting thorough testing. Here are some possible steps I'm considering for improvement:

### 1. Error Handling Enhancement

- **Refine Error Messages:** I plan to refine error messages to provide users with clearer and more actionable information when issues occur.

- **Retry Mechanism:** Implementing automatic retry mechanisms for certain types of errors to improve data retrieval reliability.

### 2. Reliability Testing

- **Unit Testing:** Conduct comprehensive unit testing to verify the functionality of individual components and functions within application.

## What I Have Learned

During the development of this project, I had the opportunity to enhance my skills and gain valuable experience:

- **Improved TypeScript Proficiency:** Working on this project improved my TypeScript skills. I learned to harness the power of static typing to create more robust and error-free code but I think there is still place for improvements.

- **SWR for Real-Time Data:** I gained hands-on experience in using SWR (stale-while-revalidate) for data fetching and caching. SWR played a crucial role in ensuring real-time updates and improved performance in this project.

I'm excited to continue expanding my knowledge and applying what I've learned in future projects !

## Try It Out!

I invite you to experience the real-time parking information application firsthand. You can access the live deployment of the app by clicking on the following link:

[**Try Smart Parking Ghent**](https://smart-parking-gent.netlify.app)

Explore the app's features, view real-time parking data, and get a feel for how it can simplify your parking experience in Ghent, Belgium.

Give it a try, and let me know what you think!
