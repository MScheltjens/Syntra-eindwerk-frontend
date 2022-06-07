import React from "react";
import axios from "axios";

const Add = () => {
  const handleClick = () => {
    // test WORKS!
    //   let headersList = {
    //     Accept: "*/*",
    //     "Content-Type": "application/json",
    //   };
    //   let bodyContent = JSON.stringify({
    //     name: "Kael",
    //     firstName: "Bart",
    //     email: "bart.kael@kurt.be",
    //     password: "test",
    //     trainer: "/api/trainers/1",
    //     dogs: [
    //       {
    //         name: "appermontje",
    //         birthDate: "1999-06-01T09:43:17.484Z",
    //       },
    //     ],
    //   });
    //   let reqOptions = {
    //     url: "https://127.0.0.1:8000/api/clients",
    //     method: "POST",
    //     headers: headersList,
    //     data: bodyContent,
    //   };
    //   axios.request(reqOptions).then(function (response) {
    //     console.log(response.data);
    //   });
  };

  return (
    <div>
      <button onClick={handleClick}>Add Client/Dog</button>
    </div>
  );
};

export default Add;
