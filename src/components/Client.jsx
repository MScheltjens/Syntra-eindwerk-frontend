import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useGetClientQuery } from "../store/api/apiSlice";
import { store } from "../store";
import { useSelector } from "react-redux";

const Client = () => {
  const { user } = useSelector((s) => s.user);
  const { clientId } = useParams();
  const {
    data: client,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetClientQuery(clientId);

  return (
    <>
      {client && (
        <div>
          <h3>{client.firstName}</h3>
          <ul>
            {client.dogs.map((dog) => (
              <li key={dog.id}>
                <Link to={"/dashboard/dogs/" + dog.id}>
                  <h4>{dog.name}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Client;
