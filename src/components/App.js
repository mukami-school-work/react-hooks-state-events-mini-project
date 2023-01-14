import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState(TASKS)
  // const [categories, setCategories] = useState(CATEGORIES)
  // const [selectedCategory, setSelectedCategory] = useState("All")


  function addNewTask(newItem) {
    setTask([...task, newItem])
  }

  const itemDisplayed = task

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={itemDisplayed}/>
    </div>
  );
}

export default App;
