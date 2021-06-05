import "../styles/App.css";

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
