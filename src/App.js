import './App.scss';
import Header from "./componets/header/Header";
import RoutesPage from "./componets/Routes";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className=" container ">

            <RoutesPage/>
        </div>
        </div>
    );
}

export default App;
