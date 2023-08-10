# Task List App

A Task List App built with React, Redux, TypeScript, Vite, Tailwind CSS, and json-server.

## Features

- Add, delete, and update tasks.
- Mark tasks as complete or incomplete.
- Fetch tasks from a JSON server backend.

## Folder Structure

The project's folder structure is organized as follows:

```
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Tasks.tsx
│   │   ├── NewTask.tsx
│   │   ├── TaskDetails.tsx
│   │   └── Filter.tsx
│   ├── reducers
│   │   ├── filterReducer.ts
│   │   ├── focusedTaskReducer.ts
│   │   └── taskReducer.ts
│   ├── services
│   │   └── tasks.ts
│   ├── types
│   │   └── Task.ts
│   ├── index.css
│   ├── App.tsx
│   ├── index.tsx
│   └── store.ts
├── package.json
├── db.json
└── ...
```

- The `public` folder contains the static assets and the entry HTML file.
- The `src` folder contains the source code of the application.
  - The `components` directory contains the React components used in the app.
  - The `reducers` directory contains Redux actions and reducers.
  - The `services` directory contains API service modules.
  - The `types` directory contains TypeScript type definitions.
  - The `index.css` file contains the custom styles for the app using Tailwind CSS.
  - The `App.tsx` file is the main component that renders the app.
  - The `index.tsx` file is the entry point of the application.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A state management library for JavaScript applications.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Vite: A fast and lightweight build tool for modern web development.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- json-server: A simple JSON file-based REST API server.