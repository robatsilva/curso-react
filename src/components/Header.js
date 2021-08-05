import { Button } from "@material-ui/core";

function Header(){
    return (        <header className='header'>
    <div className='toolbar'>
        <div className=''>
            <span>curso react</span>
        </div>
        <div className=''>
            <Button color="primary" variant="contained">Novo Post</Button>
            <span>img1</span>
            <span>img2</span>
        </div>
    </div>
</header>);
}

export default Header;