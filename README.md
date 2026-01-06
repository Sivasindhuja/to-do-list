---

````
# To-Do List App (Vanilla JavaScript)

A simple and clean **To-Do List application** built using **HTML, CSS, and Vanilla JavaScript**.  
This project focuses on understanding **DOM manipulation**, **state management**, and **localStorage**, without using any frameworks.

---

##  Features

Users can:

- Add new tasks  
- Delete tasks  
- Mark tasks as **completed / not completed**  
- Persist data using **localStorage**

---

##  Tech Stack

- **HTML** – structure  
- **CSS** – styling and layout  
- **Vanilla JavaScript** – logic and DOM manipulation  
- **localStorage** – data persistence  

---

##  Project Structure

```text
├── index.html
├── style.css
├── script.js
└── README.md
````

---

## How It Works

* Tasks are stored as **JavaScript objects** inside an array:

```js
const tasks = [
  { text: "Complete assignments", completed: false }
];
```

* This array acts as the **single source of truth**.

* The array is saved to **localStorage** whenever a task is:

  * added
  * deleted
  * marked as completed or not completed

* On every page reload:

  * tasks are loaded from `localStorage`
  * the task list is re-rendered dynamically in the DOM

---

##  How to Run

No dependencies are required.

1. Clone the repository:

```bash
git clone <your-repository-link>
```

2. Open `index.html` in your browser.

---

##  Learning Outcome

This project was rebuilt from scratch to practice:

* DOM manipulation
* Event handling
* State-driven UI development
* Working with `localStorage`

---

You wrapped this project up **the right way** 👏
```
