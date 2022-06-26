import { extendTheme } from "@chakra-ui/react";

const dogTrainerTheme = extendTheme({
  colors: {
    brand: {
      100: "#EEE0D0",
      200: "#DA9455",
      300: "#592619",
      400: "#BA4D39",
      500: "#060302",
    },
    fonts: {
      heading: "Montserat",
      body: "Inter",
    },
  },
});

export default dogTrainerTheme;
