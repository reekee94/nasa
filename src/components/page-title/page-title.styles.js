import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '30vh',
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
  container: {
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: '4.5rem',
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
    color: "grey",
    fontSize: "1.2rem"
  }
}));
