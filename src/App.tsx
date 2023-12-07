import Toolbar from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import MainPage from './pages/main/main-page';

export default function App() {
    return (
        <div className='h-screen w-screen'>
            <div className='flex flex-row w-full'>
                <Sidebar open toggleDrawer={() => alert('')} />
                <div className='flex flex-col flex-grow'>
                    <Toolbar />
                    <MainPage />
                </div>
            </div>
        </div>
    );
}