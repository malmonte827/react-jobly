# 💼 React Jobly

> A full-stack “Jobly” job board application with a React front-end and Express/PostgreSQL back-end. Users can sign up, log in, browse and search for jobs, and submit applications.

[![React](https://img.shields.io/badge/react-17%2B-blue)](https://reactjs.org/) [![Node.js](https://img.shields.io/badge/node.js-14%2B-green)](https://nodejs.org/) [![PostgreSQL](https://img.shields.io/badge/postgresql-12%2B-blue)](https://www.postgresql.org/)

---

## 📋 Table of Contents

1. [About](#about)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Environment Variables](#environment-variables)  
   - [Database Setup & Seeding](#database-setup--seeding)  
5. [Usage](#usage)  
6. [Testing](#testing)  
7. [Contributing](#contributing)   
8. [Contact](#contact)  

---

## 🌟 About

**React Jobly** is a clone of the popular Jobly app:  
- **Front-end**: React SPA using React Router, Context API, and Axios  
- **Back-end**: Express REST API with JWT authentication and PostgreSQL persistence  
- **Purpose**: Practice building full-stack apps, handling authentication, protected routes, and CRUD operations

---

## ✨ Features

- **User Authentication**: Sign up, log in/out, JWT-based session  
- **Job Listings**: Browse, search, and filter jobs by title or company  
- **Company Profiles**: View details about companies and their open positions  
- **Applications**: Logged-in users can apply to jobs and see application status  
- **Protected Routes**: Only authenticated users can apply or view protected data  

---

## 🛠 Tech Stack

- **Front-end:** React, React Router, Axios, Bootstrap
- **Back-end:** Node.js, Express, JWT, Bcrypt  
- **Database:** PostgreSQL, node-postgres (pg)  
- **Testing:** Jest, Supertest (backend), React Testing Library (frontend)  
- **Tooling:** ESLint, Prettier, GitHub Actions CI  

---

## 🏁 Getting Started

### Prerequisites

- Node.js v14 or higher  
- PostgreSQL v12 or higher  
- npm (bundled with Node.js)  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/malmonte827/react-jobly.git
cd react-jobly

# 2. Install dependencies for both back- and front-end
cd backend && npm install
cd ../frontend && npm install
```

### Environment Variables
```bash
DATABASE_URL=postgresql:///jobly
SECRET_KEY=your_jwt_secret_here
PORT=3001
```


### Database Setup & Seeding

```bash
# 1. Create the database
createdb jobly

# 2. From backend/ run migrations & seed
npm run db:migrate
npm run db:seed
```
---
### 📖 Usage

```bash
# 1. Start backend (in backend/)
npm start

# 2. Start frontend (in frontend/)
npm start

```
---
### 🧪 Testing
```bash
# Run back-end tests
cd backend && npm test

# Run front-end tests
cd frontend && npm test

```
## Contributing

We welcome contributions! To contribute:

- Fork the repository

- Create a new branch (git checkout -b feature-name)

- Commit your changes (git commit -m 'Add new feature')

- Push to the branch (git push origin feature-name)

- Open a pull request

## Contact

For questions or suggestions, reach out:

- Email: malmonte827@gmail.com

