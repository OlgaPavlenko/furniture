import { FunctionComponent } from "react";
import { useStyle } from "./styles";

export const Search: FunctionComponent = () => {
  const classes = useStyle();
  const search = require("assets/icons/icon.svg").default as string;
  return (
    <div className={classes.searchWrap}>
      <button>
        <img src={search} alt="search" />
      </button>
      <input
        type="search"
        className={classes.searchInput}
        name="productSearch"
        placeholder="What are you looking for?"
      />
    </div>
  );
};
