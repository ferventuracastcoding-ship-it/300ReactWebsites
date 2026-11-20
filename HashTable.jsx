// Dozens of lines of Hash Table code to practice syntax
import React, { useState } from "react";
import "./App.css";

const SIZE = 17;

function hash(key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) total += key.charCodeAt(i) * (i + 1);
  return total % SIZE;
}

function createTable() {
  return Array.from({ length: SIZE }, () => []);
}

function insert(table, key, value) {
  const index = hash(key);
  const bucket = table[index];
  const existing = bucket.find(item => item.key === key);

  if (existing) existing.value = value;
  else bucket.push({ key, value });

  return [...table];
}

function search(table, key) {
  const index = hash(key);
  return table[index].find(item => item.key === key) || null;
}

function remove(table, key) {
  const index = hash(key);
  table[index] = table[index].filter(item => item.key !== key);
  return [...table];
}

function getLoadFactor(table) {
  const entries = table.reduce((sum, bucket) => sum + bucket.length, 0);
  return (entries / SIZE).toFixed(2);
}

function App() {
  const [table, setTable] = useState(createTable());
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("Hash table ready.");
  const [operation, setOperation] = useState("INSERT");

  function handleInsert() {
    if (!key.trim()) return setMessage("Enter a key.");
    setTable(prev => insert(prev, key.trim(), value.trim()));
    setMessage(`Inserted "${key}" at index ${hash(key)}.`);
    setKey("");
    setValue("");
  }

  function handleSearch() {
    if (!key.trim()) return setMessage("Enter a key.");
    const result = search(table, key.trim());

    if (result) {
      setMessage(`Found "${result.key}" → "${result.value}".`);
    } else {
      setMessage(`"${key}" was not found.`);
    }
  }

  function handleDelete() {
    if (!key.trim()) return setMessage("Enter a key.");
    setTable(prev => remove(prev, key.trim()));
    setMessage(`Deleted "${key}".`);
    setKey("");
  }

  function handleOperation() {
    if (operation === "INSERT") handleInsert();
    if (operation === "SEARCH") handleSearch();
    if (operation === "DELETE") handleDelete();
  }

  function generateData() {
    let next = createTable();
    const records = [
      ["Rocket", "Falcon"],
      ["Robot", "Rover"],
      ["Planet", "Mars"],
      ["Moon", "Titan"],
      ["Mission", "Alpha"],
      ["Satellite", "ISS"],
      ["Star", "Sun"],
      ["Database", "SQL"]
    ];

    records.forEach(([k, v]) => {
      next = insert(next, k, v);
    });

    setTable(next);
    setMessage("Sample hash records generated.");
  }

  function clearTable() {
    setTable(createTable());
    setMessage("Hash table cleared.");
  }

  const entryCount = table.reduce(
    (total, bucket) => total + bucket.length,
    0
  );

  return (
    <div className="app">
      <header>
        <p className="eyebrow">REACT.JS • DATA STRUCTURES</p>
        <h1>HASH TABLE LAB</h1>
        <p className="subtitle">
          Hashing • Collision Resolution • Search • Insert • Delete
        </p>
      </header>

      <section className="controls">
        <input
          value={key}
          onChange={e => setKey(e.target.value)}
          placeholder="Enter key"
        />

        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Enter value"
        />

        <select
          value={operation}
          onChange={e => setOperation(e.target.value)}
        >
          <option>INSERT</option>
          <option>SEARCH</option>
          <option>DELETE</option>
        </select>

        <button onClick={handleOperation}>RUN</button>
        <button onClick={generateData}>GENERATE</button>
        <button onClick={clearTable}>CLEAR</button>
      </section>

      <section className="metrics">
        <div>
          <strong>{SIZE}</strong>
          <span>BUCKETS</span>
        </div>

        <div>
          <strong>{entryCount}</strong>
          <span>ENTRIES</span>
        </div>

        <div>
          <strong>{getLoadFactor(table)}</strong>
          <span>LOAD FACTOR</span>
        </div>

        <div>
          <strong>{table.filter(b => b.length > 1).length}</strong>
          <span>COLLISIONS</span>
        </div>
      </section>

      <div className="status">
        <span>STATUS:</span> {message}
      </div>

      <main className="table">
        {table.map((bucket, index) => (
          <div className="bucket" key={index}>
            <div className="index">
              INDEX {index}
            </div>

            <div className="hash-value">
              HASH = {index}
            </div>

            {bucket.length === 0 ? (
              <div className="empty">EMPTY</div>
            ) : (
              bucket.map((item, itemIndex) => (
                <div className="entry" key={itemIndex}>
                  <span>{item.key}</span>
                  <b>→</b>
                  <span>{item.value}</span>
                </div>
              ))
            }
          </div>
        ))}
      </main>

      <footer>
        React Hash Table Algorithm Lab
      </footer>
    </div>
  );
}

export default App;
