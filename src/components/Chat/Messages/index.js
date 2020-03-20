import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import PropTypes from "prop-types";
import Message from "./Message";

export default function Messages({ messages, name }) {
  return (
    <ScrollToBottom>
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        );
      })}
    </ScrollToBottom>
  );
}

Messages.propTypes = {
  messages: PropTypes.array,
  name: PropTypes.string
};
