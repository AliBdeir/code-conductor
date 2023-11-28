import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Toolbar from "./components/toolbar/toolbar";
import MainPage from "./pages/main/main-page";

function App() {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Toolbar />
            <div className='flex-1 flex flex-row h-full'>
                <div>
                    <Sidebar />
                </div>
                <div className='flex-1 h-full'>
                    <MainPage />
                </div>
            </div>
        </div>

    );
}

export default App;
