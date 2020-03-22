import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  outerWrapper: {
    display: "flex",
    height: 450,
    maxWidth: "100%",
    "@media (max-width: 768px)": {
      height: "100%",
      flex: 1,
      width: "100%"
    }
  },
  chatWrapper: {
    width: 420,
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 768px)": {
      width: "100%"
    }
  }
});
