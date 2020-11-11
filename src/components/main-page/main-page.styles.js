import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      boxSizing: 'border-box',
    },
    colorText: {
      color: '#bf360c'
    }
  }
));
