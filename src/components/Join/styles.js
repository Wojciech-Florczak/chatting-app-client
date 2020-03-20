import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  outerWrapper: {
    height: 500,
    width: 800,
    maxWidth: "100%",
    maxHeight: "100%"
  },
  innerWrapper: { height: "100%", display: "flex", justifyContent: "center" },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.75rem"
  },
  heading: { maxWidth: "60%", textAlign: "center" },
  input: { margin: "0.5rem" },
  link: { textDecoration: "none", margin: "0.5rem" }
});
