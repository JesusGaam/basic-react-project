import { createContext } from "react";
import { ContextUserState } from "@/interfaces";
import { initialState } from "./UserReducer";

const UserContext = createContext<ContextUserState>(initialState);
export default UserContext;
