import { createStore } from "redux";
import {simpleReducer} from "../reducers";

import initialState from "../tests/mockState";

export const store = createStore(simpleReducer, initialState);