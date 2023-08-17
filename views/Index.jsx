import React from "react";

function Index({ logs }) {
  return (
    <div>
      <h1>Logs</h1>
      <ul>
        {logs.map((log, index) => {
          <li key={index}>{log.title}</li>;
        })}
        <a href={"/new"}>Create</a>
      </ul>
    </div>
  );
}
export default Index;
