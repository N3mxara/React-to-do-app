import { useState, useEffect } from "react";

function Hooks() {
  const [BodyText, setBodyText] = useState("Users");
  const [first, setfirst] = useState(0);

  useEffect(() => {
    console.log("Use effect is Working");},[]);

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        margin: "200px",
      }}
    >
      <div>
        <button
          onClick={() => {
            setBodyText("Users");
            setfirst(first + 1);
          }}
        >
          User
        </button>
        <button
          onClick={() => {
            setBodyText("Posts");
            setfirst(first + 1);
          }}
        >
          Post
        </button>
        <button
          onClick={() => {
            setBodyText("AboutUS");
            setfirst(first + 1);
          }}
        >
          About us
        </button>
      </div>
      <h1>{BodyText}</h1>
      <button
        onClick={() => {
          setfirst(first + 1);
        }}
      >
        Add Count : {first}
      </button>
      <button
        onClick={() => {
          setfirst(first - 1);
          if (first <= 0) {
            setfirst((0));
          } else if (isNaN(first)) {
            setfirst(0);
          }
        }}
      >
        Remove Count : {first}
      </button>

      <h2>Count : {first}</h2>
    </div>
  );
}

export default Hooks;
