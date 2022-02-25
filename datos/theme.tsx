import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    uno: "#0a9396",
    dos: "#e9d8a6",
    tres: "#9b2226",
  },
  negro: {
    alto: "#424242",
    medio: "#616161",
    bajo: "#e0e0e0",
  },
};

export const themeJaime = extendTheme({ colors });
