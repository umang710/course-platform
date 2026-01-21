# Course Platform – Role-Based Frontend Application

A role-based course management web application built using React, with a focus on clean UI standards, subtle UX interactions, and clear state-driven logic.

---

## Overview

This project demonstrates a frontend-only implementation of a course platform where trainers can manage courses and trainees can track their progress. The application emphasizes usability, visual clarity, and predictable interactions rather than heavy visual effects.

---

## Features

### Trainer
- Assign courses to trainees  
- Unassign courses  
- View when a course has been completed by a trainee  

### Trainee
- View assigned courses  
- Mark courses as completed  
- Clear visual feedback for completion status  

---

## UI and UX Approach

- Subtle hover effects, transitions, and shadows to improve interaction feedback  
- Neutral slate-based backgrounds combined with indigo for primary actions  
- Green (emerald) used strictly for success and completion states  
- Clear visual hierarchy with consistent spacing and alignment  
- No visual clutter; focus on readability and usability  
- Keyboard interaction support, including Enter key submission and visible focus states  

Note: Some of these details are best experienced directly in the browser. Screenshots or videos may not fully reflect the live UI behavior.

---

## Tech Stack

- React for component-based UI development  
- React Router DOM for route-based navigation and role protection  
- Tailwind CSS for utility-first styling and consistent design patterns  
- shadcn/ui for accessible and composable UI components  
- LocalStorage for lightweight state persistence  

---

## State Management

- Course assignment and completion state is stored using a structured object in localStorage:
  ```js
  {
    courseId: "assigned" | "completed"
  }