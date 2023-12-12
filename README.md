# Note Taking App

This is a simple note-taking web application built with **React** and **React Router**. The application allows users to create, edit, and delete notes, each associated with tags for better organization.

## Features

- **Note Creation and Editing:** Users can create new notes, edit existing notes, and update note details such as title, content, and associated tags.
- **Tag Management:** Tags can be added, updated, and deleted. Each note can be associated with multiple tags, providing a way to categorize and filter notes.
- **Responsive Design:** The application uses **Bootstrap** for styling, ensuring a responsive and user-friendly interface.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/note-taking-app.git
    ```

2. Change into the project directory:

    ```bash
    cd note-taking-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

- **Home Page (/):** Displays a list of notes with their associated tags. Users can navigate to individual notes or create new ones.
- **New Note (/new):** Allows users to create a new note. Users can provide a title, content in markdown format, and associate tags.
- **Note Details (/:id):** Displays the details of a specific note. Users can view the note content and associated tags. The note can be edited or deleted.
- **Edit Note (/:id/edit):** Allows users to edit an existing note. Users can modify the title, content, and associated tags.

## Technology Stack

- **React:** JavaScript library for building user interfaces.
- **React Router:** Declarative routing for React.js.
- **Bootstrap:** Front-end framework for designing responsive and stylish web pages.
- **uuid:** Library for generating unique identifiers.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. 
