import React from 'react';
import './App.css'; 

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'page2.html';
  };

  return (
    <div className="container">
      <img src="src/images/logo.png" alt="Course Tracker Logo" className="logo" />
      <h1>Crie sua conta ou faça login</h1>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="email" name="email" placeholder="E-mail" required />
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default App;
