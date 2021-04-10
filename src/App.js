
import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😁": "Daant Khishorna",
  "😀": "Muskan Ki Chamkan",
  "🙁": "Sad",
  "😋": "Yummy",
  "🙃": "Ajeeb Smile",
  "😂": "Hahahha..",
  "😚": "Chummi"
};
export default function App() {
  var emojiInDB = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Iska answer to nhi pata mujhe!😅";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome Inshaan</h1>
      <input onChange={emojiInputHandler} placeholder="Yahan emoji Daalo" style={{ fontSize: "4vh", padding: "3px" }} />
      <div style={{ fontSize: "8vh", padding: "3px" }}>{meaning}</div>
      <h2>Isme se ek chuno:</h2>
      {emojiInDB.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "8vh", padding: "3px", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}