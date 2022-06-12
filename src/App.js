import { useState } from "react";
import { data } from "./data";

function App() {
  const [index, setIndex] = useState(0);

  async function newQuote() {
    const x = await Math.floor(Math.random() * data.length);
    setIndex(x);
  }

  return (
    <section className="fullpage">
      <div id="quote-box">
        <div id="text">{data[index].text}</div>
        <div id="author"> - {data[index].author}</div>
        <div className="bottondiv">
          <a
            id="tweet-quote"
            href={`https://www.twitter.com/intent/tweet?text=${encodeURI(
              data[index].text
            )}%0A-${encodeURI(data[index].author)}`}
          >
            Share on Twitter
          </a>
          <button id="new-quote" onClick={newQuote}>
            New quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
