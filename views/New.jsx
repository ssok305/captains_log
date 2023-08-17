import React from "react";

function New() {
  return (
    <div>
      <form action="/logs" method="POST">
        <label htmlFor="title">Title: </label>
        <input type="text"></input>
        <br />
        <label htmlFor="entry">Entry: </label>
        <input type="textarea"></input>
        <br />
        <label htmlFor="shipIsBroken">ShipIsBroken: </label>
        <input type="checkbox"></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default New;
