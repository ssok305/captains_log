import React from "react";

function Index({ logs }) {
  return (
    <div>
      <h1>Logs</h1>
      <ul>
        {logs.map((log) => (
          <li key={log._id}>
            {log.title}
            <form action={`/logs/${log._id}`} method="POST">
              <input type="hidden" name="_method" value="DELETE" />
              <input type="submit" value="Delete" />
            </form>
          </li>
        ))}
        <br />
        <a href={"/new"}>Create</a>
      </ul>
    </div>
  );
}
export default Index;
