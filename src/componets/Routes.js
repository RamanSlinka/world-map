import {Route, Routes} from 'react-router-dom';
import Main from "./main/Main";
import Paris from "./sities/Paris";
import NewYork from "./sities/NewYork";
import Tokio from "./sities/Tokio";
import Brasilia from "./sities/Brasilia";
import Sydney from "./sities/Sydney";

export const PATH = {
    HOME: '/',
    PARIS: '/paris',
    NEW_YORK: '/new-york',
    TOKIO: '/tokio',
    BRASILIA: '/brasilia',
    SYDNEY: '/sydney',
}


const RoutesPage = () => {
    return (
        <Routes>
            <Route path={PATH.HOME} element={<Main/>}/>
            <Route path={PATH.PARIS} element={<Paris/>}/>
            <Route path={PATH.NEW_YORK} element={<NewYork/>}/>
            <Route path={PATH.TOKIO} element={<Tokio/>}/>
            <Route path={PATH.BRASILIA} element={<Brasilia/>}/>
            <Route path={PATH.SYDNEY} element={<Sydney/>}/>

        </Routes>
    );
}

export default RoutesPage;