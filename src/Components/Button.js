import React, { useState } from "react";
import  useLongPress  from "../Assets/ButtonLongPress";

export const ButtonComp = () => {
  const [changeFace, setChangeFace] = useState([]);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const UseLongPress = useLongPress(onLongPress, onClick, defaultOptions);

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  return (
    <div className="faceChanger">
      {/* button when clicked pops alert returning a string msg  */}
      <button
        value={changeFace}
        onClick={(e) => {
          setChangeFace(alert("Button Pressed"));
        }}
      >
        ChangeFace
      </button>
      <div className="inputBox">
        {/* Input Box for seeing entered text  */}
        <input
          type="text"
          placeholder="Enter text.."
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        >
          {/* {console.log(e.target.value)} */}
        </input>
        <div className="password">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
            {/* {console.log(e.target.value)} */}
          </input>
          <p>{userName}</p>
          <p>{showPassword ? password : "*".repeat(password.length)}</p>
          <p>
            {/* if showpassword is true then we display SHOW else we display Not show */}
            <button
              {...useLongPress}
              onMouseDown={(e) => setShowPassword(!showPassword)}
            >
              Show / Hide password
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
