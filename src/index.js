import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
     <div className="enter-shop">
        <button className="btn" onClick={() => setLogin(false)}>
          Выйти
        </button>
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className="enter-shop">
        <h2 className="heading">Нужно залогиниться!</h2>
        <button className="btn" onClick={() => setLogin(true)}>
          Войти
        </button>
        </div>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
