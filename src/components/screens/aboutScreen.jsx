import React, { useContext } from "react"
import { TabSwitching } from "../tabSwitching/tab"
import { globalCounter } from "../navigation/navigationStack"
import { withCounter } from "../hoc/withCOunter"

 const AboutScreen =({count,incrementCount})=>{

   const {currentState}= useContext(globalCounter)

    return(
        <>
            <div style={{display:'flex',flexDirection:"column"}}>
            <h2>Welcome To About Screen Tab Switching</h2>
            {currentState.count}
            <TabSwitching/>
            </div>

            <div>
                <h2>{count}</h2>
                <button onMouseOver={incrementCount}>increment</button>
            </div>

        </>
    )
}

export default React.memo(withCounter(AboutScreen))