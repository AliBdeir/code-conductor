import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Toolbar from "./components/header/header";
import MainPage from "./pages/main/main-page";

function App() {
    return (
        <div className='flex flex-row w-screen h-screen' style={{ width: "auto" }}>
            <div>
                <Sidebar />
            </div>
            <div className='flex-1 h-full flex flex-col'>
                <Toolbar />
                <MainPage />
            </div>
        </div>
    );
}

export default App;
