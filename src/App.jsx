import './App.css'
import Completion from "./components/Completion.jsx";

function App() {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  console.log(apiKey);
  return (
      <>
        <Completion/>
      </>
  )

}

export default App
