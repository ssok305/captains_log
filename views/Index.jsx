import React from "react";

function Index({ logs }) {
  return (
    <div>
      <h1>Logs</h1>
      <ul>
        {logs.map((log, index) => (
          <form action={`/logs?_method=DELETE`} method="POST">
            <li key={index}>{log.title}</li>
            <button>Delete</button>
          </form>
        ))}
        <br />
        <a href={"/new"}>Create</a>
      </ul>
    </div>
  );
}
export default Index;
