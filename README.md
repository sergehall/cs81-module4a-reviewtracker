# CS81 Module 4A – Review readingTracker.js

This project is part of **Module 4 Assignment 4A** for Santa Monica College's CS81 JavaScript Programming course.  
It focuses on reading, analyzing, improving, and reflecting on a JavaScript program that tracks weekly reading activity.

---

## Repository Structure

```
.
├── readingTracker.js      # Main entry point that imports all logic and runs summary
├── tracker-functions/     # Modularized versions of core functions
│   ├── addReadBook.js
│   ├── totalReadingMinutes.js
│   ├── mostReadBook.js
│   └── printDailySummary.js
├── testCases.js           # A set of 10 test cases, including invalid inputs
├── REFLECTION.md          # Final reflection on code structure and understanding
├── package.json           # Basic config for npm scripts
└── README.md              # Project overview and instructions (this file)
```

---

## Requirements

- Node.js (v14 or higher recommended)
- Git (for cloning the repo and version control)

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/sergehall/cs81-module4a-reviewtracker
cd cs81-module4a-reviewtracker
```

2. **Run the main reading tracker**

```bash
npm start
```

This will execute `readingTracker.js`, which prints a weekly reading summary, total minutes read, and the most read book.

3. **Run the test suite**

```bash
node testCases.js
```

This will run 10 test cases including validations and console outputs, demonstrating how the system handles various inputs.

---

## Functions Included

Each function is written in its own file inside `tracker-functions/` and includes:
- A function summary
- Input/output description
- Type validation and error handling

### Functions:
- `addReadBook(log, day, book, minutes)`  
  Adds a new entry to the reading log with validation for correct input types.

- `totalReadingMinutes(log)`  
  Calculates and returns the total reading time from the log.

- `mostReadBook(log)`  
  Returns the most frequently read book from the data.

- `printDailySummary(log)`  
  Outputs a summary of reading sessions for each day.

---

## What This Assignment Covers

- Modularizing JavaScript functions
- Working with arrays and objects
- Adding inline comments and function summaries
- Input validation and debugging
- Writing test cases
- Reflecting on logic and patterns

---

## Submission Requirements

- [x] `readingTracker.js` — imports all functions and runs the reading tracker
- [x] `tracker-functions/` — modularized and validated functions
- [x] `testCases.js` — 10 meaningful test cases (valid and invalid)
- [x] `REFLECTION.md` — final thoughts on helpful structure and challenges
- [x] At least **3 meaningful commits**

---

## License

This project is for educational purposes only as part of Santa Monica College's CS81 coursework.
