import React from "react";

function New() {
  return (
    <div>
      <form action="/logs" method="POST">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title"></input>
        <br />
        <label htmlFor="entry">Entry: </label>
        <input type="textarea" name="entry"></input>
        <br />
        <label htmlFor="shipIsBroken">Ship Is Broken: </label>
        <input type="checkbox" name="shipIsBroken"></input>
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default New;
