import { toast } from 'react-toastify'


export const successToast =(notification)=>{
    toast.success(notification, {
        position: "top-center"
      });
}

export const errorToast =(message)=>{
    toast.success(message, {
        position: "top-center"
      });
}

