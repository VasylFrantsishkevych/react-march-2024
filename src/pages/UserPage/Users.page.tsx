import { useEffect } from "react";

import "./User.page.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { userActions } from "../../redux/slices/user.slice";
import { User } from "../../components";

const UsersPage = () => {
  let {
    userSlice: { users, isLoaded },
  } = useAppSelector((state) => state);

  let dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.loadUsers());
  }, []);

  return (
    <div>
      {!isLoaded && <div>Loading in process....</div>}

      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export { UsersPage };
