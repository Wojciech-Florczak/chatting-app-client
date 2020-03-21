import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import PropTypes from "prop-types";
import Message from "./Message";
import { Divider, List } from "@material-ui/core";
import { useStyles } from "./styles";

export default function Messages({ messages, name }) {
  const classes = useStyles();
  return (
    <>
      <ScrollToBottom className={classes.scroller}>
        <List className={classes.wrapper}>
          {messages.map((message, i) => {
            return (
                <Message message={message} name={name} key={i}/>
            );
          })}
        </List>
      </ScrollToBottom>
      <Divider />
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array,
  name: PropTypes.string
};
