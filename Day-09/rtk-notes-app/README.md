# Notes App

This is a simple notes app built with React, Redux Toolkit, Tailwind, json-server, TypeScript, and Vite. It allows users to create, read, update, and delete notes.

## Features

- Create a new note with a title and content.
- View a list of all notes.
- Edit an existing note.
- Delete a note.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux Toolkit: A library for efficient Redux development.
- Tailwind CSS: A utility-first CSS framework.
- json-server: A simple JSON-based backend for development and prototyping.
- TypeScript: A typed superset of JavaScript.
- Vite: A fast development build tool.

## Folder Structure

The app follows a flat folder structure, which is suitable for simple applications. Here's an overview of the folder structure:

```
src
├── apis
│   └── notesApi.ts
├── components
│   ├── Note.tsx
│   ├── NoteForm.tsx
│   └── NoteList.tsx
├── reducers
│   └── noteReducer.ts
├── store
│   └── index.ts
├── types
│   └── index.ts
├── App.tsx
├── index.css
└── main.tsx
```
