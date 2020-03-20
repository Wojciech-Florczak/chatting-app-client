import React from "react";
import PropTypes from "prop-types";
import ReactEmoji from "react-emoji";

export default function Message({ message, name }) {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div>
      <p>{trimmedName}</p>
      <div>
        <p>{ReactEmoji.emojify(message.text)}</p>
      </div>
    </div>
  ) : (
    <div>
      <p>{message.user} (not you)</p>
      <div>
        <p>{ReactEmoji.emojify(message.text)}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.object,
  name: PropTypes.string
};
