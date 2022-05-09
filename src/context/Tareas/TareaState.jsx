import React, { useReducer } from "react";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";

const TareaState = (props) => {
  const initialStte = {
    tareas: [],
  };

  const [state, dispatch] = useReducer(TareaReducer, initialStte);

  return (
    <TareaContext.Provider value={{}}>{props.children}</TareaContext.Provider>
  );
};

export default TareaState;
