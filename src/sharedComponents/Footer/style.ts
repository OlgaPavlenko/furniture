import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  footer: {
    backgroundColor: "#15166d",
    padding: "65px 25px 21px 25px",
  },

  container: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    paddingBottom: "19px",
    fontSize: "14px",
  },

  copyrite: {
    paddingTop: "18px",
    color: "rgb(212, 211, 211)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center",
  },

  footerContact: {
    lineHeight: 1.71,
  },

  footerContactItem: {
    marginBottom: "10px",

    "&:firstChild .footerColor": {
      color: "#ffffff",
    },
  },

  footerColor: {
    color: "rgb(212, 211, 211)",
  },

  footerSocials: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
  },

  footerSocialsLabel: {
    fontWeight: 700,
    lineHeight: "1.14",
    letterSpacing: "0.03em",
    color: "#ffffff",
    textTransform: "uppercase",
  },

  socialLinks: {
    display: "inherit",
    columnGap: "15px",
  },

  socialLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(233, 230, 230)",
    borderRadius: "50%",
    width: "44px",
    height: "44px",

    "&:hover": {
      backgroundColor: "rgb(89, 0, 255)",
    },
  },

  iconNetwork: {
    fill: "inherit",
    width: "20px",
    height: "20px",
  },
}));
