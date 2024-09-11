import { useContext } from "react"
import { TabSwitching } from "../tabSwitching/tab"
import { globalCounter } from "../navigation/navigationStack"


export const AboutScreen =()=>{

   const {currentState}= useContext(globalCounter)

    return(
        <>
            <div style={{display:'flex',flexDirection:"column"}}>
            <h2>Welcome To About Screen Tab Switching</h2>
            {currentState.count}
            <TabSwitching/>
            </div>

        </>
    )
}