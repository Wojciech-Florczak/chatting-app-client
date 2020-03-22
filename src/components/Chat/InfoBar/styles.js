import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  closeButton: {
    color: "white",
    marginLeft: "auto",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "red",
      transform: "scale(1.1)"
    }
  },
  peopleButton: {
    color: "white"
  },
  peopleButtonWrapper: {
    display: "none !important",
    "@media (max-width: 768px)": {
      display: "initial !important"
    }
  },
  title: {
    paddingLeft: 10
  }
});
