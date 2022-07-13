import React from "react";

export const Greet = (props) => {
  return (
    <>{console.log(props)}
      <p>Hello: {props.name}, Hero Name: {props.heroName} {props.name}</p>
      {props.children}
    </>
  );
};
