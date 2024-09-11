import { useState } from "react"


export const withCounter =(Component)=>{

    return ()=>{
        const [count, setCount] = useState(0)
        const incrementHandler =()=>{
            setCount(count=>count+1)
        }
        return <Component count={count} incrementCount={incrementHandler}/>
    }
}