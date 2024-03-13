import { CardGame } from "./CardGame";
import "./CardGame.css";
import { Footer } from "./Footer";

export default function App() {
  return (
    <div>
      <h1> Welcome to Play Your Cards Right! </h1>
      <CardGame />
      <p>
        Learn how to play the game with these unlucky folk{" "}
        <a
          href="hhttps://www.youtube.com/watch?v=a1MDqJJoGZg"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>

      <Footer />
    </div>
  );
}
