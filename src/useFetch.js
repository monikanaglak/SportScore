import { useState, useEffect } from "react";
import { User } from "./utils/User_data";

//custom hook
export function useFetch(cb) {
  const [data, setData] = useState();
  useEffect(() => {
    // tu wywołujemy otrzymaną funkcję i ustawiamy dane
    cb().then(setData);
  }, []);

  return data;
}
/*export const useFetch = (url) => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.data);
  };
  useEffect(() => {
    getUsers();
  }, [url]);
  return { users };
};*/
//custom Hook
//pass to the function url we need, like this we can re use it for differents fetch
