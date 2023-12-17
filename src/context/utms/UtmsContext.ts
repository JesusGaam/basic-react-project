import { createContext } from "react";
import { ContextUTMState } from "@/interfaces";
import { initialState } from "./UtmsReducer";

const UtmsContext = createContext<ContextUTMState>(initialState);
export default UtmsContext;
