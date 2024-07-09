import { FC } from "react";

import { IUser } from "../../models";
import "./User.css";

interface IProps {
  user: IUser;
}

const User: FC<IProps> = ({ user }) => {
  return (
    <div className={"user-card"}>
      <h2>
        {user.name} - {user.username}
      </h2>
      <p>
        <span>ID:</span>
        {user.id}
      </p>
      <p>
        <span>Стать:</span>
        {user.website}
      </p>
      <p>
        <span>Email:</span>
        {user.email}
      </p>
      <p>
        <span>Телефон:</span>
        {user.phone}
      </p>
    </div>
  );
};

export { User };
