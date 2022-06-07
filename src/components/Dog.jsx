import { useState, useEffect } from "react";
import { useParams, Link, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import CreateDogExercise from "./CreateDogExercise";
import { useGetDogQuery } from "../store/api/apiSlice";

const Dog = () => {
  const { dogId } = useParams();
  const navigate = useNavigate();

  const {
    data: dog,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDogQuery(dogId);

  return (
    <div>
      {dog && (
        <div>
          <h2>{dog.name}</h2>
          {dog.dogExercises.map((ex) => (
            <Link to={`/dashboard/dog_exes/${ex.id}`}>
              <p>{ex.startDate}</p>
              <p>{ex.id}</p>
            </Link>
          ))}
          <Link to={"addExercise"}>
            <button>Add exercise</button>
            <button onClick={() => navigate(-1)}>Close</button>
          </Link>
          <Routes>
            <Route
              path={"addExercise"}
              element={<CreateDogExercise dogName={dog.name} dogId={dog.id} />}
            />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default Dog;
