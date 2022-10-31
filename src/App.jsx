import React from "react";
import { useReducer } from "react";

//style
import style from "./components/Main/Main.scss";

function App() {

  const handlerClick = (state, action) => {
      switch(action.type) {
        case "off": {
          return{
            boolean: false
          }
        }

        case "on": {
          return{
            boolean: true
          }
        }

        case "deg": {
          return{
            deg: true
          }
        }

        case "rs": {
          return{
            deg: false
          }
        }
      }
  }

  const obj = {boolean: false, deg: true}
  
  const [state, dispatch] = useReducer(handlerClick, obj)

  return (
    <div className="container">
      <div className={`main ${state.deg ? "main__active" : ""}`}>
        <h2 className="main__name">Light switcher</h2>
        <p className="main__text">Light is {state.boolean ? "on" : "off"}</p>

        <div className="main__box">
          <button disabled={state.boolean === false} onClick={() => {
            dispatch({
              type: "off"
            })
          }} className="main__btn main__off">Turn off</button>
          <button disabled={state.boolean === true} onClick={() => {
            dispatch({
              type: "on"
            })
          }} className="main__btn main__on">Turn on</button>
          <button onClick={() => {
            dispatch({
              type: "deg"
            })
          }} className="main__btn main__deg">Rotate by 180Deg</button>
          <button onClick={() => {
            dispatch({
              type: "rs"
            })
          }} className="main__btn main__rs">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
