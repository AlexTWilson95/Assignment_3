#  Workout Tracker Application

A simple, clean, and user-friendly workout tracking web application built using **Node.js, Express, MongoDB, and EJS**.  
This project allows users to create accounts, log in, build workout plans, and manage them through a clean dashboard-like interface.

---

##  Features

###  User Accounts
- Simple **username + password** authentication  
- **No email required**  
- **Session-based login**  
- Access control for protected pages  
- Profile page showing:
  - Username  
  - Number of workout plans created  

---

###  Workout Management

Users can create detailed workout plans with:

- **Workout Name**  
- **Selected Date**  
- **Multiple exercise rows** (Excel-style table)

Each row contains:
- Exercise Name  
- Load / Weight  
- Sets / Reps / Time  
- Info / Description  

Additional features:
- Add unlimited rows dynamically  
- View each workout in a clean table layout  
- Delete workouts (with confirmation popup)  
- Edit existing workouts  
- Maximum of **6 workout plans per user** (assignment requirement)

---

##  Pages Included
- Home Page  
- Login Page  
- Signup Page  
- My Workouts Page  
- Create Workout Page  
- View Workout Page  
- Profile Page  
- Sample Workout Page (optional, loads a real workout by ID)

---

##  Tech Stack

### Frontend
- EJS Templates  
- Bootstrap 5  
- Custom CSS  

### Backend
- Node.js  
- Express.js  
- Express-session  
- Method-override  
- Mongoose / MongoDB  

### Database
- MongoDB Atlas or Local MongoDB

---

##  Project Structure

assignment3/
│ app.js
│ package.json
│
├── routes/
│ ├── index.js
│ ├── auth.js
│ └── workouts.js
│
├── models/
│ └── workout.js
│ └── user.js
│
├── views/
│ ├── partials/
│ │ ├── header.ejs
│ │ └── footer.ejs
│ ├── index.ejs
│ ├── login.ejs
│ ├── signup.ejs
│ ├── workouts.ejs
│ ├── createworkout.ejs
│ ├── viewworkout.ejs
│ ├── profile.ejs
│ └── sample.ejs (optional)
│
└── public/
├── css/
│ └── style.css
└── img/

#  Author
Alexander Wilson 
