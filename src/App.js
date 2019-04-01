import React, { useState, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import axios from 'axios';

import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [bookList, setBookList] = useState([
    "Anna Karenina",
    "The Valley of the Dolls"
  ]);
  // const [planetList, setPlanetList] = useState([]);
  const [currentCount, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "GO_UP":
        return state + 1;
      case "GO_DOWN":
        return state - 1;
      default:
        return state;
    }
  }, 0);
  // useEffect(() => {
  //   axios.get("https://swapi.co/api/planets")
  //     .then(response => {
  //       setPlanetList(response.data.results);
  //     })
  // })
  return (
    <div className="App">
      <Header />
      <h2>Start editing to see some magic happen!</h2>
      <input value={title} onChange={event => setTitle(event.target.value)} />
      <div>{title}</div>
      <button onClick={() => setBookList([...bookList, title])}>
        Click Me
      </button>
      <ul>
        {bookList.map(book => (
          <li>{book}</li>
        ))}
      </ul>
      {/* <ul>
        {planetList.map(planet => (
          <li>{planet}</li>
        ))}
      </ul> */}
      <button onClick={() => dispatch({ type: "GO_UP" })}>+</button>
      <button onClick={() => dispatch({ type: "GO_DOWN" })}>-</button>
      {currentCount}
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
