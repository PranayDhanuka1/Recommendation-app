import React, { useState } from "react";
import "./styles.css";

const BooksDB = {
  SelfGrowth: [
    {
      name: "Think and Grow Rich",
      rating: "4.9/5"
    },
    {
      name: "Thinking Fast and Slow",
      rating: "4.7/5"
    },
    {
      name: "Man’s Search for Meaning",
      rating: "4.6/5"
    }
  ],
  Business: [
    {
      name: "Rich Dad Poor Dad",
      rating: "5/5"
    },
    {
      name: "Zero to One",
      rating: "4.8/5"
    },
    {
      name: "The Lean StartUp",
      rating: "4.8/5"
    }
  ],
  StockMarket: [
    {
      name: "The Intelligent Investor",
      rating: "5/5"
    },
    {
      name: "One up on wall street",
      rating: "4.8/5"
    }
  ]
};

export default function App() {
  const [genere, setGenere] = useState("Business");

  function selectedGenereHandler(genere) {
    setGenere(genere);
  }

  return (
    <div className="App">
      <header>
        <h1>
          <span role="img" aria-label="icon">
            📖
          </span>{" "}
          Books
        </h1>
        <small>Some of the Bestsellers which I love❤️</small>
      </header>
      <main>
        {Object.keys(BooksDB).map((genere) => (
          <button onClick={() => selectedGenereHandler(genere)}>
            {genere}
          </button>
        ))}
      </main>
      <hr />
      <section>
        <ul className="booklist">
          {BooksDB[genere].map((book, index) => (
            <li key={index} className="booklist-item">
              <p className="name">{book.name}</p>
              <p className="rating">{book.rating}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
