# Task Manager Application
## Description

The Task Manager Application is a React-based application that allows users to create, manage, complete, and search tasks dynamically.
The application demonstrates modern React concepts including:

* Context API for global state management

* useRef for persistent values without re-rendering

* useId for accessible and unique form IDs

* CRUD operations with a backend API

* Controlled forms and dynamic filtering

Users can:

* Add new tasks

* Mark tasks as completed

* Search tasks instantly

* View dynamically updated task lists

## Features


* Add new tasks

* Mark tasks as completed

* Search tasks dynamically

* Global state management using Context API

* Accessible forms using useId

* Efficient search handling using useRef

* Backend synchronization with JSON Server

## Technologies Used

React

JavaScript (ES6)

Context API

Fetch API

JSON Server

CSS

## Project Structure

src/├── components/│   ├── App.jsx│   ├── TaskForm.jsx│   ├── TaskList.jsx│   ├── TaskCard.jsx│   └── SearchBar.jsx├── context/│   └── TaskContext.jsx├── main.jsx├── index.css└── db.json

## Installation

1. Clone the Repository
git clone <repository-url>

2. Navigate into the Project Folder
cd task-manager-app

3. Install Dependencies
npm install

### Running the Application

Start JSON Server
npx json-server --watch db.json --port 3001
Backend endpoint:
http://localhost:3001/tasks

Start React Development Server
Vite
npm run dev
Create React App
npm start

### Context API Implementation
The application uses Context API to avoid prop drilling and centralize task management.
Global state includes:

* tasks

* searchTerm

* addTask

* toggleComplete


The entire application is wrapped inside:

<TaskProvider> 
 <App />
</TaskProvider>


#### Adding Tasks

* Users can:

* Enter a task title

* Submit the form

* Automatically add the task to the page

#### Completing Tasks

Users can:

* Click the complete button

* Toggle task completion status

* Update both backend and UI instantly

#### Searching Tasks

The search feature:

* Uses useRef

* Dynamically filters tasks

* Updates displayed tasks instantly without unnecessary re-renders

#### Display Image

src\assets\Screenshot 2026-05-14 135458.png

### Future Improvements

Delete tasks

Edit tasks

Add due dates

Add task categories

Local storage persistence

Responsive mobile design

### Author

Ruth Wanja Juma

Created as a React Hooks and Context API practice project.