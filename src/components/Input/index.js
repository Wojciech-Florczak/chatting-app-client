import React from "react";
import PropTypes from "prop-types";

export default function Input({ message, setMessage, sendMessage }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => e.key === "Enter" && sendMessage(e)}
      />
      <button onClick={e => sendMessage(e)}>Send</button>
    </form>
  );
}

Input.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
  sendMessage: PropTypes.func,
};