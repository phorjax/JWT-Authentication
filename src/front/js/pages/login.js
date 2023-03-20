import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  console.log("Your token: " + token);

  const handleClick = () => {
    actions.login(email, password).then(() => {});
  };
  // async function handleClick() {
  //   const opts = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //     }),
  //   };

  //   fetch(
  //     "https://3001-rickrodrigu-jwtpractice-7002lkq0dxx.ws-us90.gitpod.io/api/token",
  //     opts
  //   )
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       } else {
  //         alert("Response was not a code 200.");
  //       }
  //     })
  //     .then((data) => {
  //       sessionStorage.setItem("token", data.access_token);
  //     })
  //     .catch((error) => console.log("There was an error!!!!", error));
  // }

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {token && token != "" && token != undefined ? (
        "You are now logged in with token " + token
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
};
