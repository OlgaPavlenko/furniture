import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  header: {
    padding: "0 25px 15px 25px",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #dfdfdf",
  },

  logo: {
    width: "40px",
    flexShrink: 0,
    display: "block",
  },

  logoLink: {
    textDecoration: "underline",
    fontWeight: 400,
    color: "#484848",
  },

  localizeButtons: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "50px",
  },
  logoImg: {
    width: "40px",
  },
}));
