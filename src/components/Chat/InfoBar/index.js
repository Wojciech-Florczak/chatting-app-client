import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";
import ChatIcon from "@material-ui/icons/Chat";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export default function InfoBar({ room }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <ChatIcon edge="start" />
          <Typography variant="h6" className={classes.title}>
            {room}
          </Typography>
          <a href="/" className={classes.closeButton}>
            <CloseIcon />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}

InfoBar.propTypes = {
  room: PropTypes.string
};
