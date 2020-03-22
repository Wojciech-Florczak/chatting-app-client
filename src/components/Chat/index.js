import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const classes = useStyles();

  const ENDPOINT = "https://chatting-for-cats.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
        goBack();
      }
    });
    //eslint-disable-next-line
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

  const goBack = () => {
    history.push("/");
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
