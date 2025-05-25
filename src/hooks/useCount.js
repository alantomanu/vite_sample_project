import { useContext } from "react";
import countContext from "../contexts/CountContext";

export default function useCount(){
    return useContext(countContext)
}