import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Users = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const request = async () => {

      try {

        const responseData = await sendRequest('http://localhost:5001/api/users', "GET", null, {})
    
        console.log(responseData)
  
        setLoadedUsers(responseData.users)
      } catch(err) {
        console.log(err)
      }

    }

    request()
    


    // const sendRequest = async () => {
    //   setIsLoading(true);
    //   try {
    //     const response = await fetch("http://localhost:5001/api/users");

    //     const responseData = await response.json();

    //     if (!response.ok) {
    //       throw new Error(responseData.message);
    //     }
    //     setLoadedUsers(responseData.users);
    //   } catch (err) {
    //     setError(err.message);
    //   }
    //   setIsLoading(false);
    // };
    // sendRequest();
  }, []);

  const errorHandler = () => {
    clearError();
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Users;
