import theme from "../../theme";

const styles = {
  logo: {
    width: "48px",
    height: "48px",
    marginRight: "32px",
  },
  link: {
    color: theme.palette.white,
    marginRight: "16px",
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  verticalBar: {
    borderLeft: "2px solid white",
    height: "24px",
    marginLeft: "16px",
    marginRight: "16px",
  },
  moreBtn: {
    color: theme.palette.white,
  },
};

export default styles;
