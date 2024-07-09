import { useEffect, useState } from "react";

import { IUser } from "../../models";
import { userService } from "../../services";
import { User } from "../../components";

import "./UserPage.css";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    userService.getAll().then((users) => setUsers([...users]));
  }, []);

  return (
    <div className={"users-container"}>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export { UsersPage };
