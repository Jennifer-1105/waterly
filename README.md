
# 💧 Waterly

A simple React blog app to track daily water intake and stay hydrated.

## How to Run

```bash
npm install
npm start
```

## Features
- Add daily water in ml
- Visual progress bar
- Reset anytime
- body {
  font-family: Arial, sans-serif;
  background: #e0f7fa;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 1rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #0288d1;
}

.card {
  margin-top: 20px;
}

input {
  padding: 0.5rem;
  width: 80%;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 0.5rem 1rem;
  background: #0288d1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button.secondary {
  background: #9e9e9e;
}

.progress-bar {
  width: 100%;
  background: #eeeeee;
  height: 20px;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #0288d1;
  width: 0%;
}
