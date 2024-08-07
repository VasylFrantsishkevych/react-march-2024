import { FC } from "react";

import { IUser } from "../../models";
import "./User.css";
import { useNavigate } from "react-router-dom";

interface IProps {
  user: IUser;
}

const User: FC<IProps> = ({ user }) => {

  const navigate = useNavigate();

  return (
    <div className={"user-card"}>
      <h2>
        {user.name}
      </h2>
      <div className={'buttons'}>
        <button onClick={() => navigate(`/users/${user.id}`)}>User Details</button>
      </div>
    </div>
  );
};

export { User };