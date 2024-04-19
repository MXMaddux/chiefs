const styles = {
  button: (theme) => ({
    width: "8.125rem",
    height: "3rem",
    backgroundColor: theme.palette.white,
    color: theme.palette.black,
    borderRadius: 0,
    borderBottom: `1px solid ${theme.palette.black}`,
    // "&:hover": {
    //   backgroundColor: theme.palette.white,
    //   color: theme.palette.red,
    //   border: `1px solid ${theme.palette.red}`,
    //   borderBottom: `2px solid ${theme.palette.red}`,
    // },
  }),
  activeButton: (theme) => ({
    backgroundColor: theme.palette.white,
    color: theme.palette.red,
    border: `1px solid ${theme.palette.red}`,
    borderBottom: `2px solid ${theme.palette.red}`,
  }),
  moreNewsBtn: (theme) => ({
    color: theme.palette.red,
  }),
  routerLink: (theme) => ({
    textDecoration: "none",
    color: theme.palette.black,
    "&:hover": {
      cursor: "pointer",
    },
  }),
};

export default styles;
