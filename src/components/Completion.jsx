import {useState} from 'react';
import axios from "axios";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export default function Completion() {
  // eslint-disable-next-line no-empty-pattern

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await axios.post("https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "Can you always add Dear maarten at the beginning of the sentence."
            },
            {role: "user", content: prompt}
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        });

    const output = result.data.choices[0].message.content;
    console.log(result);
    setResponse(output);
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={prompt}
                 onChange={(e) => setPrompt(e.target.value)}/>
          <button type="submit" value="Submit">Submit</button>
        </form>
        {response && (
            <div>
              <p>{response}</p>
            </div>
        )}
      </div>
  );
}
