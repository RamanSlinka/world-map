import {Route, Routes} from 'react-router-dom';
import Main from "./main/Main";
import Paris from "./sities/Paris";

export const PATH = {
    HOME: '/',
    PARIS: '/paris',
}


const RoutesPage = () => {
    return (
        <Routes>
            <Route path={PATH.HOME} element={<Main/>}/>
            <Route path={PATH.PARIS} element={<Paris/>}/>

        </Routes>
    );
}

export default RoutesPage;