export function CourseGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal title="Learn React" description="In-depth" />
        <CourseGoal title="Learn Redux" description="In-depth" />
      </ul>
    </div>
  );
}

export default App;