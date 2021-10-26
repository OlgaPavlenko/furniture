import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  navigation: {
    display: "flex",
    flexDirection: "row",
    columnGap: "20px",
  },
  navigationItem: {
    fontWeight: 700,
  },

  navigationItemLink: {
    color: "#15166d",

    "&:hover": {
      color: "#111",
      textDecoration: "underline",
    },
  },
}));
