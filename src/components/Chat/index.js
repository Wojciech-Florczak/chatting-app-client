import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";
import UsersList from "../UsersList";
import { useStyles } from "./styles";
import { Paper } from "@material-ui/core";
import UsersDialog from "./UsersDialog";

let socket;

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const ENDPOINT = "https://chatting-for-cats.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [messages]);

  const sendMessage = e => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className={classes.outerWrapper}>
      <UsersList users={users} />
      <Paper square className={classes.chatWrapper}>
        <InfoBar room={room} setOpen={setOpen} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Paper>
      <UsersDialog open={open} setOpen={setOpen} users={users} />
    </div>
  );
}
