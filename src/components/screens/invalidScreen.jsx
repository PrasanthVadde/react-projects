import { useNavigate } from "react-router-dom"


export const InvalidScreen =()=>{


    const navigate = useNavigate()


    const handleNavigation=()=>{
        navigate("/")
    }

    return(
        <>
            
        <h2>Invalid Page</h2>
        <button onClick={handleNavigation}> go to home page</button>
        </>
    )
}