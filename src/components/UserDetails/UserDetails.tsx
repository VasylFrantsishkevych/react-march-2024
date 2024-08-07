import { FC } from "react";

import { IUser } from "../../models";
import "./UserDetails.css";
import { useNavigate } from "react-router-dom";

interface IProps {
  user: IUser | null;
}

const UserDetails: FC<IProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className={"user-details-card"}>
      <h2>
        {user?.name} - {user?.username}
      </h2>
      <p>
        <span>ID:</span>
        {user?.id}
      </p>
      <p>
        <span>Стать:</span>
        {user?.website}
      </p>
      <p>
        <span>Email:</span>
        {user?.email}
      </p>
      <p>
        <span>Телефон:</span>
        {user?.phone}
      </p>
      <button onClick={() => navigate(`/users/${user?.id}/posts`)}>Posts Current User</button>
    </div>
  );
};

export { UserDetails };