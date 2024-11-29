import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const storageKeyName = "count";
  const getCountValue = () => Number(localStorage.getItem(storageKeyName)) || 0;
  const [count, setCount] = useState(getCountValue());
  const addCount = (count) => setCount(Number(count) + 1);

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));
  }, [count]);

  return (
    <div className="App">
      Hello world

      <button onClick={() => addCount(count)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
