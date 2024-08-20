
export const user = {
  email: "",
  password: "",
  loggedIn: false,
};

function App() {
  function handleLogin() {
    user.email = "test@example.com";
    user.password = "test";
    user.loggedIn = true;
    console.log("inside");
  }
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleLogin}>Login</button>
      </p>
    </div>
  );
}

export default App;
