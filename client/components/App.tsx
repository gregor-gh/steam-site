import "../styles/App.css";
import { useState } from "react"

const [isSignedIn, setIsSignedIn] = useState(false);

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
