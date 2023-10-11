import React, { useState, useEffect } from "react";
import FirstPageLook from "../FirstPageLook"
import UserService from "../services/user.service";


const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div>
    <FirstPageLook/>
    </div>
  );
};

export default Home;
