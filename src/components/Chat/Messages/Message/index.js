import React from "react";
import PropTypes from "prop-types";
import ReactEmoji from "react-emoji";
import {
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useStyles } from "./styles";

export default function Message({ message, name }) {
  const classes = useStyles();
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const systemMessage = (
    <ListItem>
      <ListItemText className={classes.adminText} secondary={ReactEmoji.emojify(message.text)} />
    </ListItem>
  );

  const userMessage = (
    <ListItem>
      <ListItemText
        primary={trimmedName}
        secondary={ReactEmoji.emojify(message.text)}
        className={classes.userText}
      />
      <ListItemAvatar className={classes.userAvatar}>
        <AccountCircleIcon className={classes.avatar} />
      </ListItemAvatar>
    </ListItem>
  );

  const strangerMessage = (
    <ListItem>
      <ListItemAvatar>
        <AccountCircleIcon className={classes.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={`${message.user} (not you)`}
        secondary={ReactEmoji.emojify(message.text)}
        className={classes.strangerText}
      />
    </ListItem>
  );

  return message.user === "admin"
    ? systemMessage
    : isSentByCurrentUser
    ? userMessage
    : strangerMessage;
}
Message.propTypes = {
  message: PropTypes.object,
  name: PropTypes.string
};
