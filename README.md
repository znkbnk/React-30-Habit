Step 1: Add a "Delete" button and define a
"handleDelete" function. Add 2 useEffect`s
to maintain the consistency of your habits.

- In your CompletedHabits.js component find
your component's JSX, create the "x" button
after habits.map conditional. Add an onClick
event handler to the "Delete" button. Inside
the onClick event handler, call the handleDelete
function and pass the index as an argument
to identify which habit to delete.
- In your component, define a function named
handleDelete that takes an index parameter.
Inside the handleDelete function, create a
copy of the habits array to avoid directly
mutating the state. Inside the handleDelete
function, create a copy of the habits array
to avoid directly mutating the state. Use
the splice method to remove the habit at
the specified index from the copied array.
- Add a useEffect block to load habits
from localStorage when the component mounts.
Use the localStorage API to retrieve the data.
- Add another useEffect block to save habits
to localStorage whenever habits change. Use
the localStorage API to store the data.
- Modify your index.css file.

Step 2: Implement the useEffect`s and 
handleDelete functionality for saving
and loading deleted habits using
localStorage in a DeletedHabits.js file.

- In the useEffect hook with an empty
dependency array ([]), load the deleted
habits from localStorage when the
component mounts. Use
JSON.parse(localStorage.getItem("deletedHabits"))
to retrieve the deleted habits.
If any are found, set them using
setDeletedHabitsState.
- In a separate useEffect hook, save
the deleted habits to localStorage
whenever the deletedHabitsState changes.
- Use localStorage.setItem("deletedHabits",
JSON.stringify(deletedHabitsState))
to store the deleted habits as
a JSON string in localStorage.
- Create a handleDelete function that takes
an index as an argument. Inside the
handleDelete function, create a copy of the
deletedHabitsState array. Use the splice
method to remove the habit at the specified
index from the copied array. Update the
state with the modified array.
- Modify your index.css file.

Step 3: In accordance with Step 2,
endeavor to introduce new features
to the FavoriteHabits.js module.


