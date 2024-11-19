# Task Management App 🚀

A React-based task management web app designed for managing tasks with different statuses such as "New", "Active", "Completed", and "Failed". The app includes separate dashboards for admins and employees with user authentication. 💼✅

## Features ✨

- **Task Management:** 📋

  - Admins can assign tasks to employees.
  - Employees can view, accept, and mark tasks as completed.
  - Tasks have states like New, Active, Completed, and Failed.

- **Authentication:** 🔒

  - Admins and employees have separate login credentials.
  - Admins can access the Admin Dashboard, while employees can access the Employee Dashboard.
  - Authentication data is stored in localStorage for persistence across sessions.

- **Task Display:** 📑

  - Tasks are displayed in different components based on their status.
  - The app dynamically renders the task status using a flexible layout.

- **Responsive Design:** 📱
  - The app is designed to be mobile-friendly with a responsive layout using Tailwind CSS.

## Installation ⚙️

To run the project locally, follow these steps:

### Prerequisites 📥

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/) installed on your machine.

### Steps 🛠️

1. Clone the repository:
bash
   git clone https://github.com/yourusername/task-management-app.git
   


2. Navigate to the project folder:

   ```bash
   cd task-management-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app should now be running on `http://localhost:3000`.

## How to Use 🖥️

### Authentication 🔑:

1. **Login as Admin or Employee:**

   - Admin and employee credentials are stored in localStorage for demo purposes.
   - Once logged in, the app will show either the **Admin Dashboard** or **Employee Dashboard** based on your role.

2. **Admin Dashboard:** 👨‍💼

   - Admins can assign tasks to employees.
   - Tasks can be marked as completed or failed.

3. **Employee Dashboard:** 🧑‍💻
   - Employees can accept assigned tasks and mark them as completed.
   - Tasks are displayed with priorities, dates, and descriptions.

## Technologies Used 🛠️

- **React.js** for building the user interface. ⚛️
- **Tailwind CSS** for styling and responsive design. 🌈
- **Context API** for managing authentication state and sharing data across components. 🔄
- **LocalStorage** for persisting user authentication data. 💾

## File Structure 📁

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.js
│   ├── Dashboard/
│   │   ├── AdminDashboard.js
│   │   └── EmployeeDashboard.js
│   ├── Task/
│   │   ├── AcceptTask.js
│   │   ├── CompletedTask.js
│   │   ├── FailedTask.js
│   │   └── NewTask.js
│   └── ...
├── context/
│   └── AuthProvider.js
├── utils/
│   └── LocalStorage.js
└── App.js
```

- **`AuthProvider.js`** manages the authentication state for the app. 🔑
- **`TaskList.js`** dynamically renders tasks based on their status. ✅
- **`Login.js`** is the component for user login. 👤
- **`AdminDashboard.js`** and **`EmployeeDashboard.js`** contain the dashboards for respective roles. 🧑‍💼

## Future Improvements 💡

- **Task Editing:** Add functionality for both admins and employees to edit task details. ✏️
- **Task Deadlines:** Introduce deadlines for tasks and track overdue tasks. ⏰
- **Notifications:** Implement notifications for task updates. 🔔
- **Backend Integration:** Replace `localStorage` with a real backend to persist user data and task states. 🌐

## License 📄

This project is open-source and available under the [MIT License](LICENSE).

```

### Emojis used:

- 🚀 for excitement and launch.
- 💼 for the admin-related tasks and professionalism.
- ✅ for completed tasks and task-related features.
- 📋 for task management.
- 🔒 for authentication.
- 📱 for mobile responsiveness.
- 🛠️ for installation and technical features.
- ⚛️ for React.
- 🌈 for styling with Tailwind CSS.
- 🔄 for Context API.
- 💾 for localStorage.
- 📁 for the file structure.
- 👨‍💼 and 🧑‍💻 for admin and employee roles.
- ✏️ for task editing.
- ⏰ for task deadlines.
- 🔔 for notifications.
- 🌐 for backend integration.
- 📄 for licensing.

