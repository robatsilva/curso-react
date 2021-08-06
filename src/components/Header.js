import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  SvgIcon,
  Avatar,
} from "@material-ui/core";
import { Bell } from "react-feather";

const useStyles = makeStyles({
  root: {},
  appBar: {
    boxShadow: "none",
  },
  img: {
    maxHeight: 55,
  },
  grow: {
      flexGrow: 1
  },
  userSection: {
      display: 'flex',
      alignItems: 'center'
  },
  button: {
      marginRight: 10
  },
  bell: {
      marginRight: 10
  }
});
function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={classes.img}></img>
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button color="primary" variant="contained" className={classes.button}>
            Novo Post
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Avatar" src="/"></Avatar>
        </div>
        {/* <div className="">
          <span>curso react</span>
        </div>
        <div className="">

          <span>img1</span>
          <span>img2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
