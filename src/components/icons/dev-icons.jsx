import { DiReact } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";




export const ReactIcon = ()=>{
    const style = { color: "#61dbfb", fontSize: "5em" ,backgroundColor:"black", borderRadius:"8px"}
    return(
        <DiReact style={style}/>
    )
}

export const GitIcon =()=>{
    const style = { fontSize: "4em" , borderRadius:"8px"}
    return(
        <DiGithubBadge style={style}/>
    )
}