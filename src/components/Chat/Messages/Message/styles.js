import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  avatar: {
    width: "2.6rem !important",
    height: "auto !important"
  },
  userText: {
    textAlign: "right",
    overflowWrap: "break-word"
  },
  strangerText: {
    overflowWrap: "break-word"
  },
  adminText: {
    textAlign: "center"
  },
  userAvatar: {
    marginLeft: 10
  }
});
