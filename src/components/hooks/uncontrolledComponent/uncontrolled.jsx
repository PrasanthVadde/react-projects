import axios from "axios";
import { useState, useRef } from "react";
// import { MdDeleteForever } from "react-icons/md";
import Table from "react-bootstrap/Table";

export const UncontrolledComponent = () => {
  const usernameRef = useRef("");
  const passswordRef = useRef("");

  const [formErrors, setFormErrors] = useState({});
  const [userData, setUserData] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    const usernameEntered = usernameRef.current.value;
    const passwordEntered = passswordRef.current.value;

    const formErrors = validation(usernameEntered, passwordEntered);
    if (Object.keys(formErrors).length > 0) {
      //error handling
      setFormErrors(formErrors);
    } else {
      loginApi(usernameEntered, passwordEntered);
    }


  };

  const validation = (username, password) => {
    const formError = {};

    if (!username) {
      formError.usernameError = "Please Enter User Name";
    } else if (username.length > 20) {
      formError.usernameError = "User Name length should not be more than 20";
    }

    if (!password) {
      formError.passwordError = "Please Enter User Name";
    } else if (password.length > 20) {
      formError.passwordError = "User Name length should not be more than 20";
    }

    return formError;
  };

  const loginApi = async (username, password) => {
    try {
      const {data} =await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });
      setUserData(data)
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="userName">User name:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            ref={usernameRef}
          />
          <span>{formErrors?.usernameError}</span>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            ref={passswordRef}
          />
          <span>{formErrors?.passwordError}</span>
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>

      <Table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {/* {userData.map((eachPerson) => {
            return (
              <tr key={eachPerson.id}>
                <td>{eachPerson.name}</td>
                <td></td>
                <td>
                  <MdDeleteForever />
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </Table>
    </>
  );
};
