import { useParams } from "react-router-dom";

import { useGetDogExerciseQuery } from "../store/api/apiSlice";

const DogExercise = () => {
  const { dogExId } = useParams();
  const {
    data: dogEx,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDogExerciseQuery(dogExId);
  return <>{JSON.stringify(dogEx)}</>;
};

export default DogExercise;
