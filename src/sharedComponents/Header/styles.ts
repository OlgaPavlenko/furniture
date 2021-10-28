import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  header: {
    padding: "15px   25px 15px 25px",
    borderBottom: "1px solid #dfdfdf",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    flexShrink: 0,
    display: "block",
  },

  logoLink: {
    textDecoration: "underline",
    fontWeight: 400,
    color: "#484848",
  },
  // localize: {
  //   display: "flex",
  // },

 
}));
