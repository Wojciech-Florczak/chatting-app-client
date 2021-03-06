import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, TextField, Button, Grid } from "@material-ui/core/";
import LaunchIcon from "@material-ui/icons/Launch";
import { useStyles } from "./styles";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const classes = useStyles();

  return (
    <Grid container className={classes.outerWrapper}>
      <Grid item sm={6} xs={12}>
        <Paper className={classes.innerWrapper}>
          <div className={classes.contentWrapper}>
            <h1 className={classes.heading}>
              Type your name and name of the room you want to join.
            </h1>
            <form autoComplete="off">
              <div className={classes.input}>
                <TextField
                  id="input-name"
                  label="Name"
                  variant="outlined"
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className={classes.input}>
                <TextField
                  id="input-room"
                  label="Room"
                  variant="outlined"
                  onChange={e => setRoom(e.target.value)}
                />
              </div>
            </form>
            <Link
              to={`/chat?name=${name}&room=${room}`}
              onClick={e => (!name || !room) && e.preventDefault()}
              className={classes.link}
            >
              <Button
                variant="contained"
                color="primary"
                endIcon={<LaunchIcon />}
              >
                Sign In
              </Button>
            </Link>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
