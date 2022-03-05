import './App.scss';
import Header from "./componets/header/Header";
import image from "./assets/images/world_map.png"

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                <img src={image} alt="world" style={{width:"85%"}}/>
            </div>

        </div>
    );
}

export default App;
