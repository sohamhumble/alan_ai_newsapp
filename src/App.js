import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

export default function App() {
  useEffect(() => {
    alanBtn({
      key: "50d057b75dddf67318672098068a95052e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({command, articles}) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI Project</h1>
    </div>
  );
}
