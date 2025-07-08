
import React, { useState } from "react";
import "./App.css";

function App() {
  const [dailyGoal] = useState(2000); // ml
  const [consumed, setConsumed] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value) && value > 0) {
      setConsumed(Math.min(consumed + value, dailyGoal));
    }
    setInputValue("");
  };

  const handleReset = () => {
    setConsumed(0);
  };

  const progress = Math.min((consumed / dailyGoal) * 100, 100);

  return (
    <div className="container">
      <h1>💧 Waterly</h1>
      <p>Track your daily water intake and stay hydrated!</p>

      <div className="card">
        <input
          type="number"
          placeholder="Enter water in ml (e.g. 250)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleReset} className="secondary">
            Reset
          </button>
        </div>
        <div className="status">
          <p>Consumed: {consumed} ml / {dailyGoal} ml</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>{progress >= 100 ? "Goal reached! 🎉" : `${Math.round(progress)}% complete`}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
