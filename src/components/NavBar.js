import { Button, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275
    },
    button: {
        width: '100%'
    }
}))
function NavBar() {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Gratis</Button>
        </Paper>
    )
}

export default NavBar;