import './App.css';
import React, { useState, useEffect } from "react";
import { FiTwitter } from "react-icons/fi"

function App() {
  const [quote, setQuote] = useState("");
  let twitterUrl = "https://www.twitter.com";

  const fetchData = () => {
    fetch("https://api.kanye.rest/")
      .then((response) => {
        if (response.status === 200 || response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error status: ${response.status}`);
        }
      })
      .then((json) => {
        setQuote(json["quote"])
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleClick = () => {
    fetchData();
  }

  return (
    <div id="quote-box">
      <div id="quote">
        {quote}
      </div>
      <div id="author">
        by Kanye West
      </div>
      <button id="new-quote" onClick={handleClick}>
        New Quote
      </button>
      <a href={twitterUrl}>
        <FiTwitter style={{textDecoration: "none",}}/>
      </a>
    </div>
  );
}

export default App;
