import React, { useState, useEffect } from "react";

const CompletedHabits = ({ completedHabits, onClose }) => {
  const [habits, setHabits] = useState(completedHabits);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("completedHabits"));
    if (storedHabits) {
      setHabits(storedHabits);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("completedHabits", JSON.stringify(habits));
  }, [habits]);

  const handleDelete = (index) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(index, 1);
    setHabits(updatedHabits);
  };

  return (
    <div className='completed-habits-modal'>
      <div className='completed-habits-content'>
        <h2>Completed Habits</h2>
        <ul>
          {habits.map((habit, index) => (
            <li key={index} className='habit-item'>
              <div className='habit-name'>Habit: {habit.name}</div>
              {habit.name !== undefined
                ? `achieved in ${habit.initialGoalDays} days`
                : "No goal set"}
              {habit.category && (
                <span className='category-name'>
                  Category: {habit.category}{" "}
                </span>
              )}
              <button
                className='completed-delete-button'
                onClick={() => handleDelete(index)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CompletedHabits;
