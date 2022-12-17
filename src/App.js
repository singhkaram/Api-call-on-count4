import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState(0);
  const [makeup, setMakeup] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        if (state >= 4) {
          setMakeup([data]);
          console.log(data);
        } else {
          return;
        }
      });
  }, [state]);

  return (
    <div className="App">
      <h1>count:{state}</h1>
      <button onClick={() => setState(state + 1)}>increment </button>
      <button onClick={() => setState(state - 1)}>decrement</button>
      {makeup?.map((item) => {
        return (
          <>
            <p key={item.id}>{item.status}</p>
            <img src={item.message} alt={item.status}></img>
          </>
        );
      })}
    </div>
  );
}
