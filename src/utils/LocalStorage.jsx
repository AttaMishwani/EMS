const employees = [
  {
    id: "E001",
    name: "Bilal Khan",
    email: "user1@example.com",
    password: "123",
    taskStats: {
      accepted: 5,
      new: 1,
      completed: 3,
      failed: 1,
    },
    tasks: [
      {
        accepted: true,
        newTask: false,
        completed: true,
        failed: false,
        active: false,
        title: "Homepage Redesign",
        description: "Update homepage layout with a modern look.",
        date: "2024-11-01",
        category: "Design",
      },
      {
        accepted: true,
        newTask: true,
        completed: false,
        failed: false,
        active: true,
        title: "Bug Fix - Dashboard",
        description: "Resolve console errors in the admin dashboard.",
        date: "2024-11-05",
        category: "Development",
      },
      {
        accepted: false,
        newTask: true,
        completed: false,
        failed: false,
        active: true,
        title: "Security Audit",
        description: "Review application for potential vulnerabilities.",
        date: "2024-11-10",
        category: "Security",
      },
      {
        accepted: true,
        newTask: false,
        completed: true,
        failed: false,
        active: false,
        title: "Add Analytics",
        description: "Integrate Google Analytics on all pages.",
        date: "2024-11-07",
        category: "Analytics",
      },
      {
        accepted: true,
        newTask: false,
        completed: false,
        failed: true,
        active: false,
        title: "SEO Improvements",
        description: "Optimize meta tags for better SEO ranking.",
        date: "2024-11-03",
        category: "Content",
      },
    ],
  },
  {
    id: "E002",
    name: "Atta Khan",
    email: "user2@example.com",
    password: "123",
    taskStats: {
      accepted: 3,
      new: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        accepted: true,
        newTask: false,
        completed: true,
        failed: false,
        active: false,
        title: "User Profile Page",
        description: "Create a responsive profile page for users.",
        date: "2024-11-02",
        category: "Design",
      },
      {
        accepted: false,
        newTask: true,
        completed: false,
        failed: false,
        active: true,
        title: "Database Optimization",
        description: "Improve database queries for faster performance.",
        date: "2024-11-12",
        category: "Database",
      },
      {
        accepted: true,
        newTask: false,
        completed: false,
        failed: true,
        active: false,
        title: "Email Integration",
        description: "Implement email notifications for account activity.",
        date: "2024-11-04",
        category: "Development",
      },
    ],
  },
  {
    id: "E003",
    name: "Anas Khan",
    email: "user3@example.com",
    password: "123",
    taskStats: {
      accepted: 4,
      new: 2,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        accepted: true,
        newTask: false,
        completed: true,
        failed: false,
        active: false,
        title: "Landing Page Update",
        description: "Enhance visuals for the landing page.",
        date: "2024-11-01",
        category: "Design",
      },
      {
        accepted: true,
        newTask: true,
        completed: false,
        failed: false,
        active: true,
        title: "API Testing",
        description: "Ensure all API endpoints return correct responses.",
        date: "2024-11-06",
        category: "Development",
      },
    ],
  },
  {
    id: "E004",
    name: "Waseem Khan",
    email: "user4@example.com",
    password: "123",
    taskStats: {
      accepted: 6,
      new: 0,
      completed: 4,
      failed: 2,
    },
    tasks: [
      {
        accepted: true,
        newTask: false,
        completed: true,
        failed: false,
        active: false,
        title: "Social Media Content",
        description: "Create posts for social media campaigns.",
        date: "2024-11-02",
        category: "Marketing",
      },
      {
        accepted: true,
        newTask: false,
        completed: false,
        failed: true,
        active: false,
        title: "Backup Restoration",
        description: "Restore data from the latest backup.",
        date: "2024-11-03",
        category: "Security",
      },
    ],
  },
  {
    id: "E005",
    name: "Rehman Khan",
    email: "user5@example.com",
    password: "123",
    taskStats: {
      accepted: 2,
      new: 3,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        accepted: false,
        newTask: true,
        completed: false,
        failed: false,
        active: true,
        title: "Create Style Guide",
        description: "Document design styles and components.",
        date: "2024-11-11",
        category: "Design",
      },
      {
        accepted: false,
        newTask: true,
        completed: false,
        failed: false,
        active: true,
        title: "Error Handling",
        description: "Handle form validation errors gracefully.",
        date: "2024-11-09",
        category: "Development",
      },
    ],
  },
];

const admin = [
  {
    id: "A001",
    name: "Atta Admin",
    email: "admin1@example.com",
    password: "123",
  },
  {
    id: "A002",
    name: "Rehman Admin",
    email: "admin2@example.com",
    password: "123",
  },
  {
    id: "A003",
    name: "Anas Admin",
    email: "admin3@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};