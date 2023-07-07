import React, { useEffect } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";


export default function App() {
  useEffect(() => {
    alanBtn({
      key: '50d057b75dddf67318672098068a95052e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'testCommand') {
          // Call the client code that will react to the received command
          alert('The command is received')
        }
      }
    });
  }, []);

  return (
    <div>
      <h1>
        Alan AI Project
      </h1>
    </div>
  )
}
