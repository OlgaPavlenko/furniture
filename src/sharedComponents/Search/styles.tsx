import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  searchWrap: {
    display: "flex",
    minWidth: "250px",
    borderRadius: "25px",
    border: "1px solid #15166d",
    padding: "5px 8px",

    "&:hover": {
      borderColor: "rgb(233, 230, 230)",
      backgroundColor: "rgb(212, 211, 211)",
    },
  },

  searchInput: {
    width: "100%",
    backgroundColor: "unset",

    "&::-webkit-search-cancel-button": {
      height: "8px",
      width: "8px",
      paddingRight: "10px",
      paddingBottom: "10px",
      backgroundImage: "url('/assets/icons/cross.svg')",
      backgroundSize: "95%",
      backgroundRepeat: "no-repeat",

      "&:hover": {
        backgroundColor: "rgb(212, 211, 211)",
        borderRadius: "50%",
      },
    },
  },
}));
