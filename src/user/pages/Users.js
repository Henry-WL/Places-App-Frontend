import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTa7qZPbtIURvy-WJDIatiBM7NqFNHNKIwu9wJAkX7Xw5OeFupf9wFXdnuk9QMLyQ8AXDx7CPr8Tbj_zJqT8a_h4pm_EXfTneEFqji-AA",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
