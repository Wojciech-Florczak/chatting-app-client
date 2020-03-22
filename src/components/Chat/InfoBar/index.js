import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ChatIcon from "@material-ui/icons/Chat";
import PeopleIcon from "@material-ui/icons/People";
import { useStyles } from "./styles";

export default function InfoBar({ room, setOpen }) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <ChatIcon edge="start" />
        <Typography variant="h6" className={classes.title}>
          {room}
        </Typography>
        <IconButton
          onClick={() => setOpen(true)}
          className={classes.peopleButtonWrapper}
        >
          <PeopleIcon className={classes.peopleButton} />
        </IconButton>
        <a href="/" className={classes.closeButton}>
          <CloseIcon />
        </a>
      </Toolbar>
    </AppBar>
  );
}

InfoBar.propTypes = {
  room: PropTypes.string
};
