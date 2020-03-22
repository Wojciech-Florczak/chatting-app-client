import React from "react";
import PropTypes from "prop-types";
import ReactEmoji from "react-emoji";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";
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
      <ListItemText
        className={classes.adminText}
        secondary={ReactEmoji.emojify(message.text)}
      />
    </ListItem>
  );

  const userMessage = (
    <ListItem>
      <ListItemText
        primary={
          <Typography className={classes.name} component="p" variant="caption">
            {trimmedName}
          </Typography>
        }
        secondary={
          <Typography component="p" variant="body2">
            {ReactEmoji.emojify(message.text)}
          </Typography>
        }
        className={classes.userText}
      />
      <ListItemAvatar className={classes.userAvatar}>
        <Avatar
          alt={`${message.user} avatar`}
          src={`https://robohash.org/${message.user}?set=set4`}
        />
      </ListItemAvatar>
    </ListItem>
  );

  const strangerMessage = (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          alt={`${message.user} avatar`}
          src={`https://robohash.org/${message.user}?set=set4`}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography className={classes.name} component="p" variant="caption">
            {message.user}
          </Typography>
        }
        secondary={
          <Typography component="p" variant="body2">
            {ReactEmoji.emojify(message.text)}
          </Typography>
        }
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
