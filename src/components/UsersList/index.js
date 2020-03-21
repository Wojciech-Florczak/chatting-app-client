import React from "react";

export default function UsersList({ users }) {
  return (
    <div>
      <ul>
        Users in this room:
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
