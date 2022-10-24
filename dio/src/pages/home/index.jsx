import {Link} from 'react-router-dom';
import {Button} from '../../components/button';
import {Header} from '../../components/header'

const Home = () => {
    return (<>
        <Header></Header>
        <Button variant='secondary' title="teste 1"></Button>
        <Button title="teste 2"></Button>
        <Link to="/login">Fazer Login</Link>
    </>)
}

export {Home}