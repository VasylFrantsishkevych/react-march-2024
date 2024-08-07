import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { userActions } from "../../redux/slices/user.slice";
import { UserDetails } from "../../components";
import { Outlet, useParams } from "react-router-dom";

const UserPage = () => {
  const {id} = useParams(); 

  const {isLoaded, user} = useAppSelector((state) => state.userSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(userActions.getUser(+id));
  }, []);

  return (
    <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
      {!isLoaded && <div>Loading in process....</div>}
      <UserDetails user={user}/>
      <Outlet/>
    </div>
  );
};

export { UserPage };
