import "../styles/App.css";
import { useEffect } from "react";
import axios from "axios"

const test = async () => {
  window.location.href="/api/auth"
}


const App = (): JSX.Element => (
  <>
    <h1>React TypeScript Webpack Starter Template {process.env.name}</h1>
    <button onClick={test}>test</button>
  </>
);

export default App;
