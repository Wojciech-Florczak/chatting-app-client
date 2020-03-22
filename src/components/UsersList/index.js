import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Paper,
  Typography,
  Divider
} from "@material-ui/core";
import { useStyles } from "./styles";

export default function UsersList({ users }) {
  const classes = useStyles();

  return (
    <Paper square className={classes.wrapper}>
      <Typography variant="h6" className={classes.title}>
        Users in this room
      </Typography>
      <Divider />
      <List className={classes.list}>
        {users.map(user => {
          return (
            <ListItem key={user.id}>
              <ListItemAvatar>
                <Avatar
                  alt={`${user.name} avatar`}
                  src={`https://robohash.org/${user.name}?set=set4`}
                />
              </ListItemAvatar>
              <ListItemText>{user.name}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
}
