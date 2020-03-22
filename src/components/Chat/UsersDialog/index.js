import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";

export default function UsersDialog({ open, setOpen, users }) {
  return (
    <Dialog scroll="paper" open={open}>
      <DialogTitle>Users in this room</DialogTitle>
      <DialogContent>
        <List>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}


UsersDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  users: PropTypes.array,
};
