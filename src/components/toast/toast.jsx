import { ToastContainer } from 'react-toastify'
import { successToast } from './toast-helpers'
import 'react-toastify/dist/ReactToastify.css'

export const CustomToast = ({message})=>{
    const notify = () =>{
        successToast("I am Clicked")
    } 
    return(
        <>
            <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer autoClose={2000}/>
      </div>
        </>
    )
}