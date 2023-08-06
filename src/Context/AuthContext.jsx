import { createContext, useState } from "react";

export let AuthContext=createContext();
let AuthContextProvider=({children})=>{
    let [count,setCount]=useState(0);
    let updateCounterHandler=()=>{
        setCount(prevCount=> prevCount+1);
    }
    let obj={count,setCount,updateCounterHandler};
    return (
        <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
    )
}
export default AuthContextProvider;