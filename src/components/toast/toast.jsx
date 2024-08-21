import { ToastContainer } from 'react-toastify'
import { successToast } from './toast-helpers'
import 'react-toastify/dist/ReactToastify.css'

export const CustomToast = ({notification})=>{
    const notify = () =>{
        successToast(notification)
    } 
    return(
        <>
            <div>
        <button onClick={notify} style={{border:"none",borderRadius:"8px",backgroundColor:"lightgreen",color:"white",height:"40px"}}>Notify</button>
        <ToastContainer autoClose={2000}/>
      </div>
        </>
    )
}