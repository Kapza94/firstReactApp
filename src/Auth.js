import React, { useState } from "react";
import Products from "./Products";

export default function Auth(props) {
  return (
    <form
      className="login"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        const passwordVal = e.target.querySelector('input[type = "password"]').value;
        props.handleSubmit(passwordVal);
      }}
    >
      <h1>Please login to view the contents of this super secret page</h1>
      <input type="password" name="password" placeholder="Password"></input>
      <button type="submit">Login</button>
    </form>
  );
}

// export default function Auth(props) {
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <div className="login">
//       <h1>Please login to view the contents of this super secret page</h1>
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={(e) => {
//           console.log(e.target.value, "im input value");
//           setInputValue(e.target.value);
//         }}
//       ></input>
//       <button
//         type="submit"
//         onClick={() => {
//           props.handleSubmit(inputValue);
//         }}
//       >
//         Login
//       </button>
//     </div>
//   );
// }
