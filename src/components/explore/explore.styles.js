import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Montserrat',
    //DESKTOP
    // paddingTop: 70,
    // paddingLeft: 70,
    // width: '80vh',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#bf360c',
  },
  colorTextNASA: {
    color: '#002171',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: '8vh',
  },
  goDown: {
    color: '#bf360c',
    fontSize: '4rem',
  },
  pageTitle: {

    //MOBILE
    fontSize: "4em",
    color: "#212121"

    //DESKTOP
    // width: "80vw",
    // fontSize: "8em",
    // color: "#212121"
  },

  pageSubTitle: {
    color: "grey"
  }
}));
