import React, { useState } from "react";
import "./styles.css";

const BooksDB = {
  SelfGrowth: [
    {
      name: "Think and Grow Rich",
      description: "This book explains how to convert dream into reality",
      rating: "4.9/5"
    },
    {
      name: "Thinking Fast and Slow",
      description:
        "This book explains our subconsious mind and how can we benifit of it.",
      rating: "4.7/5"
    },
    {
      name: "Man’s Search for Meaning",
      description: "This book helps to find a solution to depressed feelings",
      rating: "4.6/5"
    }
  ],
  Business: [
    {
      name: "Rich Dad Poor Dad",
      description: "This book explains how to be financialy free",
      rating: "5/5"
    },
    {
      name: "Zero to One",
      description:
        "This book is related to strategy for making your startup a success",
      rating: "4.8/5"
    },
    {
      name: "The Lean StartUp",
      description:
        "This book explains how to drive a startup, how to steer and when to persevere",
      rating: "4.8/5"
    }
  ],
  StockMarket: [
    {
      name: "The Intelligent Investor",
      description: "This book explains long term investing ",
      rating: "5/5"
    },
    {
      name: "One up on wall street",
      description:
        "This book is an introduction to investing and development of an investor mind ",
      rating: "4.8/5"
    },
    {
      name: "Psychology of Money",
      description:
        "This book explains how to have a better relationship with money and to make smarter financial decisions ",
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
              <small className="description">{book.description}</small>
              <p className="rating">{book.rating}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

