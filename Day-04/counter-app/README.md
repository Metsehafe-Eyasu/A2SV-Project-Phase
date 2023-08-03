# Counter App

The Counter App is a simple React TypeScript application that demonstrates the use of hooks such as `useState`, `useEffect`, and `useRef` to manage a counter and interact with DOM elements.

## Components

### Counter Component

The `Counter` component is responsible for displaying a counter with increment and decrement buttons. It uses the `useState` hook to manage the counter value and updates the document title with the current count using the `useEffect` hook. Additionally, the component utilizes `useRef` to access and modify the DOM buttons for special styling when the count reaches specific values.

### Footer Component

The `Footer` component displays the footer section, providing information about the creator of the application.

## How it Works

- The `App` component is the main component that renders the Counter App.
- It imports and renders the `Counter` and `Footer` components.
- The `Counter` component manages the counter value using the `useState` hook and updates the document title with the current count using the `useEffect` hook.
- The `useRef` hook is used in the `Counter` component to access the DOM buttons for increment and decrement, and it applies special styles to these buttons based on the counter value.

## My Learning Process

While working on the Counter App, I had the opportunity to learn and explore various aspects of React and TypeScript. Some key takeaways from this project include:

- Understanding the basics of React components, state management using hooks, and component lifecycle using `useEffect`.
- Exploring TypeScript with React to enforce static typing and better code organization, leading to more maintainable code.
- Gaining familiarity with `useRef`, which allowed me to interact with DOM elements directly from functional components.
- Implementing conditional styling based on state values, enhancing the user interface.
- Gaining experience in creating a simple React app using `vite` and setting up the development environment.

Overall, this project helped me solidify my understanding of React hooks and TypeScript, and I feel more confident in building more complex applications with React.