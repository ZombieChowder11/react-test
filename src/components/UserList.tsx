import { useEffect, useState } from "react";
import Card from "./Card";
import { User } from "./userType";

const UserList = () => {
  const [users, setUsers] = useState<User[]>();
  const [callErr, setCallError] = useState<Error>();

  const getUsers = async function () {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await resp.json();
      setUsers(result);
    } catch (err) {
      setCallError(new Error("Err.users/:err:" + err));
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  const deleteUserFn = (id: string) => {
    const userFiltered = users?.filter((item) => item.id !== id);
    setUsers(userFiltered);
  };

  return (
    <>
      {callErr && <>Error By Calling Service: {callErr} </>}
      {users &&
        users.map((user) => {
          return <Card user={user} deleteUserFn={deleteUserFn} />;
        })}
    </>
  );
};

export default UserList;
