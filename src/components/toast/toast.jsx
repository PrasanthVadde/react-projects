import { ToastContainer } from "react-toastify";
import { successToast } from "./toast-helpers";
import "react-toastify/dist/ReactToastify.css";

export const CustomToast = ({ notification }) => {
  const notify = () => {
    successToast(notification);
  };
  const style ={
    border: "none",
    borderRadius: "8px",
    backgroundColor: "lightgreen",
    color: "white",
    height: "40px",
  }
  return (
    <>
      <div>
        <button onClick={notify} style={style}>Notify</button>
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};
