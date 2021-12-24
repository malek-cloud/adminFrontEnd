import { createStore } from "redux";
const enterTypeReducer = (state = { enterAs: "" }, action) => {
  if (action.type==="coach") {
    return {
      enterAs: "coach",
    };
  } else if (action.type==="sup") {
    return {
      enterAs: "sup",
    };
  } else if (action.type==="admin") {
    return {
      enterAs: "admin",
    };
  } else return state ;
};
const store = createStore(enterTypeReducer);
export default store ;
