import { useState } from "react";
import { Home } from "./home";
import { Profile } from "./profile";
import { About } from "./About";

export const TabSwitching = () => {
    const [toggle, setToggle] = useState("home");

    const toggleHandler = (value) => {
        setToggle(value);
    };

    return (
        <>
            <div>
                <button onClick={() => toggleHandler("home")}>Home</button>
                <button onClick={() => toggleHandler("about")}>About</button>
                <button onClick={() => toggleHandler("profile")}>Profile</button>
            </div>
            <div>
                {toggle === "home" && <Home/>}
                {toggle === "about" && <About/>}
                {toggle === "profile" && <Profile/>}
            </div>
        </>
    );
};
