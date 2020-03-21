import React from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useStyles } from "./styles";

export default function Input({ message, setMessage, sendMessage }) {
  const classes = useStyles();

  return (
    <form className={classes.form} autoComplete="off">
      <TextField
        autoFocus
        id="message-input"
        placeholder="Type a message..."
        value={message}
        className={classes.input}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={e => e.key === "Enter" && sendMessage(e)}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        onClick={e => sendMessage(e)}
      >
        Send
      </Button>
    </form>
  );
}

Input.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
  sendMessage: PropTypes.func
};
