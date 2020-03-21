import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  form: {
    display: "flex"
  },
  input: {
    flex: 1,
    "& div": {
      flex: 1,
      "& input": {
        paddingLeft: 5
      }
    }
  }
});
