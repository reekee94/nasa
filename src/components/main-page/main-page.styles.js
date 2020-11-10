import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    colorText: {
      color: '#bf360c'
    }
  }
));
