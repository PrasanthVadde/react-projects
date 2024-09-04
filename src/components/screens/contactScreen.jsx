import { ComplaintForm } from "../hooks/controlledComponent/complaintForm"



export const ContactScreen =()=>{

    return(
        <>
        <div style={{display:'flex',flexDirection:"column"}}>
        <h2>Welcome to Contact Screen</h2>
        <ComplaintForm/>
        </div>
        </>
    )
}