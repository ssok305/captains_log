import React from "react";

function Show({ log }) {
  return (
    <div>
      <p>Title: {log.title}</p>
      <br />
      <p>Entry: {log.entry}</p>
      <br />
      <p>{log.shipIsBroken ? "Ship Broken" : "Ship NOT Broken"}</p>
      <br />
      <a href="/logs">Back</a>
    </div>
  );
}

export default Show;
