import { Box, Flex, Heading } from "@chakra-ui/react";
import { store } from "../store";
import { useGetDogsQuery } from "../store/api/apiSlice";
import CloudinaryImg from "./cloudinarySDK/CloudinarySDK";

const MobileAppExample = () => {
  const user = store.getState().user;
  const { data, isLoading, isSuccess, isError, error } = useGetDogsQuery(
    user.id
  );

  return <>{data && <h1>{data.name}</h1>}</>;
};

export default MobileAppExample;
