import React, { useState } from "react";

function Overview(props: { children: React.ReactNode }) {
  const imageUrl = new URL(logo, import.meta.url).href;

  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-500">
      <img src={imageUrl} height="45" alt="" />
      <h1>{props.children}</h1>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Clicks: {count}
      </button>
      <div className="underline text-xs">under</div>
    </div>
  );
}

export default Overview;
