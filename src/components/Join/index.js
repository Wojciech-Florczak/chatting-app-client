import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.innerWrapper}>
        <h1 className={classes.heading}>Join</h1>
        <div>
          <input
            placeholder="Name"
            className={classes.input}
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className={classes.input}
            type="text"
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={e => (!name || !room) && e.preventDefault()}
        >
          <button className={classes.button}>Sign In</button>
        </Link>
      </div>
    </div>
  );
}
