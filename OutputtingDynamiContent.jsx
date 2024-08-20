import React from "react";

export const userData = {
  firstName: "Maximilian", 
  lastName: "Schwarzmüller", 
  title: "Instructor", 
};
console.log(userData.firstName);
// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName}
        {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
