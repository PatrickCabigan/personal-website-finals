make it a copyable and i will paste it on readme
Genshin Impact Personal Website — Project Documentation
Course: IT242 — WEBPROG
Repository: personal-website-finals
Folder: personal-website-finals/

Overview
This project is a personal profile and portfolio web application with a Genshin Impact theme, developed as a full-stack implementation for IT242. It presents my background, skills, friends, and travel logs in an interactive, adventure-themed interface. The application is built using a modern full-stack architecture with a React frontend, a NestJS backend hosted on Vercel, a Supabase database for dynamic data, and deployed entirely on Vercel.

Tech Stack
Layer	Technology
Frontend	React, TypeScript, Tailwind CSS, React Router, React Query, Axios
Backend	NestJS, TypeScript, Supabase
Database	Supabase (PostgreSQL)
Deployment	Vercel (both frontend and backend)
Key Features
Genshin Impact Themed UI – Custom components including Katheryne/Paimon dialogs, vision badges, character avatar selector, and animated gallery carousels

Friend Management System – Full CRUD operations for adding, editing, and deleting friends with vision elements

Travel Log Guestbook – POST and GET methods for leaving messages, with like functionality

Responsive Design – Mobile and desktop optimized using Tailwind CSS

REST API Integration – Axios calls to NestJS backend endpoints

Real-time Database – Supabase with Row Level Security and PostgreSQL

Architecture

Frontend (React) ───→ Backend (NestJS) ───→ Supabase
      │                     │                     │
  Vercel                Vercel              PostgreSQL


  API Endpoints
Method	Endpoint	Description
GET	/api/friends	Fetch all friends
POST	/api/friends	Add new friend
PATCH	/api/friends/:id	Update friend
DELETE	/api/friends/:id	Delete friend
GET	/api/travel-log	Fetch all travel logs
POST	/api/travel-log	Create new travel log
POST	/api/travel-log/:id/like	Like a travel log

Development Journey & Challenges
What Went Well
Successfully translated a Genshin Impact UI design into React components

Implemented clean, reusable component architecture

Built a robust NestJS backend with proper DTO validation

Achieved full CRUD operations with Supabase integration

Deployed both frontend and backend successfully on Vercel

Major Struggles
TypeScript Version Conflicts – react-scripts required TypeScript v4 while latest was v5, causing dependency resolution errors

Serverless Function Errors – NestJS needed adaptation for Vercel's serverless environment to fix "listen EADDRINUSE" errors

CORS Configuration Hell – Hours spent configuring CORS to allow frontend-backend communication

Vercel Environment Variables – Variables weren't injecting properly during builds, requiring hardcoded URL workaround

Missing public/index.html – Caused repeated deployment failures until discovered

Environment Variables Not Applying – The .env file kept using localhost instead of production URL

The Turning Point
After countless hours debugging, the solution was simple: hardcoding the backend URL in api.ts proved the backend worked, revealing that the real issue was environment variables not being injected during Vercel builds.

Lessons Learned
Sometimes the simplest fix is the right one

Environment variables in Vercel need clean builds to update

CORS errors are always about mismatched origins

TypeScript version compatibility matters more than you think

Persistence pays off even when you want to throw your computer out the window

Special Thanks
Big thanks to ChatGPT (OpenAI) for the late-night debugging sessions, patiently explaining why my code wasn't working, and helping me connect all the pieces together. Couldn't have done it without the virtual pair programming!

Live Demo
Frontend: https://personal-website-finals-e8j8.vercel.app

Backend API: https://personal-website-finals-lake.vercel.app/api

Database: Supabase (PostgreSQL)


Repository Structure:

personal-website-finals/
├── backend/               # NestJS backend
│   ├── src/
│   │   ├── friends/       # Friends module
│   │   ├── travel-log/    # Travel log module
│   │   ├── config/        # Supabase config
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env
│   └── package.json
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API calls
│   │   ├── types/         # TypeScript types
│   │   ├── constants/     # Image URLs
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public/
│   ├── .env
│   └── package.json
└── README.md
