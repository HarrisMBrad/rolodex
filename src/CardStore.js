import { createStore } from "redux";
import CardReducer from "./CardReducer";

const CardStore = createStore(CardReducer);

export default CardStore;