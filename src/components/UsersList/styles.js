import { createUseStyles } from "react-jss";
export const useStyles = createUseStyles({
  title: {
    padding: 20
  },
  wrapper: {
    backgroundColor: "#d5d5d5 !important",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 768px)": {
      display: "none"
    }
  },
  list: {
    overflow: "auto",
    flex: 1
  }
});
