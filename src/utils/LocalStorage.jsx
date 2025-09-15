
const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Prepare Monthly Report",
        "description": "Compile and analyze sales data for the monthly report.",
        "date": "2025-09-05",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Attend the scheduled team meeting and provide updates.",
        "date": "2025-09-07",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Client Follow-up",
        "description": "Follow up with clients regarding pending proposals.",
        "date": "2025-09-10",
        "category": "Client Relations",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstname": "Ishita",
    "email": "employee2@example.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Database Cleanup",
        "description": "Remove duplicate entries from the customer database.",
        "date": "2025-09-03",
        "category": "Data Management",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "System Upgrade",
        "description": "Upgrade system software to the latest version.",
        "date": "2025-09-09",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Conduct a review of system security protocols.",
        "date": "2025-09-12",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Documentation",
        "description": "Update internal system documentation.",
        "date": "2025-09-14",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstname": "Rohan",
    "email": "employee3@example.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Design Mockups",
        "description": "Create UI mockups for the new dashboard.",
        "date": "2025-09-06",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review pull requests submitted by the dev team.",
        "date": "2025-09-08",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix Bug #142",
        "description": "Resolve critical bug affecting login functionality.",
        "date": "2025-09-11",
        "category": "Bug Fixing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Meera",
    "email": "employee4@example.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Marketing Campaign",
        "description": "Plan and launch a new social media campaign.",
        "date": "2025-09-04",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Content Writing",
        "description": "Write blog posts for the company website.",
        "date": "2025-09-07",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "SEO Audit",
        "description": "Conduct SEO analysis for better rankings.",
        "date": "2025-09-09",
        "category": "SEO",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Email Newsletter",
        "description": "Prepare and send out the September newsletter.",
        "date": "2025-09-12",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Competitor Research",
        "description": "Analyze competitor campaigns and strategies.",
        "date": "2025-09-15",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Kabir",
    "email": "employee5@example.com",
    "password": "password123",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Verify stock levels and report shortages.",
        "date": "2025-09-05",
        "category": "Inventory",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Supplier Meeting",
        "description": "Meet suppliers to negotiate contracts.",
        "date": "2025-09-08",
        "category": "Procurement",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Warehouse Audit",
        "description": "Perform safety and compliance checks in warehouse.",
        "date": "2025-09-10",
        "category": "Operations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Order Processing",
        "description": "Process incoming customer orders.",
        "date": "2025-09-11",
        "category": "Logistics",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Return Handling",
        "description": "Handle product returns and refunds.",
        "date": "2025-09-14",
        "category": "Customer Service",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "password123"
  }
]

export const setLocalStorage =() =>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage =() =>{
   const employees = JSON.parse( localStorage.getItem("employees"))
   const admin = JSON.parse( localStorage.getItem("admin"))
   return {employees, admin}; 
} 
// Isse apni LocalStorage.jsx file mein daalein
export const initializeData = () => {
  if (!localStorage.getItem("employees")) {
    // 'employees' wahi default data hai jo aapki file mein hai
    localStorage.setItem("employees", JSON.stringify(employees)); 
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};