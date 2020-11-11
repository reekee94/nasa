import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'strech',
        height: '100vh'
    },
    x:{
        justifyContent: "center",
        padding: "10px"
    }
}))
