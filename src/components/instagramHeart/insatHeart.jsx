import { useState } from "react";
import Heart from "react-animated-heart";

export const InstagramHeart = ()=>{
    const [isClick, setClick] = useState(false);
    return (
      <div className="App">
        <Heart isClick={isClick} onClick={() => setClick(!isClick)}  style={{width:"100px",border:"2px solid",height:"100px"}} />
      </div>
    );
}