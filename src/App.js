import './App.scss';
import Header from "./componets/header/Header";
import RoutesPage from "./componets/Routes";

function App() {
    return (
        <div className="App">
        <div className=" container ">
            <Header/>
            <RoutesPage/>
        </div>
        </div>
    );
}

export default App;
