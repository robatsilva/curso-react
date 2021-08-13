import { Box, Container, makeStyles } from '@material-ui/core';
import Feed from '../../components/Feed';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
// import './style.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24
    },
    toolbar: {
        minHeight: 64

    }
})
function Home(){
    const classes = useStyles();
    return <div className={classes.root}>
        <Header />
        <div className={classes.toolbar}></div>
        <main className={classes.main} >
            <Container maxWidth="lg">
                <Box display="flex">
                    <NavBar />
                    <Feed />
                </Box>
            </Container>
        </main>
    </div>
}

export default Home;