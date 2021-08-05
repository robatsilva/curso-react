import { makeStyles } from '@material-ui/core';
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
        display: 'flex',
        width: '1200px',
        margin: '0 auto',
    }
})
function Home(){
    const classes = useStyles();
    return <div className={classes.root}>
        <Header />
        <div className="toolbar"></div>
        <main className={classes.main} >
            <NavBar />
            <Feed />
        </main>
    </div>
}

export default Home;