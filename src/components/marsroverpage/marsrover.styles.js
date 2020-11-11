import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: '100vh'
    },
    pag: {
        margin: '200px',
        justifyContent: "center",
        display: "inline-flex",
        alignSelf: 'center',
        padding: "10px",
        backgroundColor: 'red'
    }
}))
