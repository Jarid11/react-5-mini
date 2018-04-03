import { createStore } from "redux";
import counter from "./ducks/counter";

let store = createStore(counter);

export default store;
