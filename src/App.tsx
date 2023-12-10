import { ToastContainer } from 'react-toastify';
import Toolbar from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import MainPage from './pages/main/main-page';
import { layoutActions } from './redux/slices/layout-slice';
import { useAppDispatch, useAppSelector } from './redux/store';

export default function App() {
    const sidebarOpen = useAppSelector(x => x.layout.showSidebar);
    const dispatch = useAppDispatch();
    return (
        <div className='h-screen w-screen'>
            <div className='flex flex-row w-full gap-0'>
                <Sidebar open={sidebarOpen} toggleDrawer={() => dispatch(layoutActions.toggleSidebar())} />
                <div className='flex flex-col flex-grow'>
                    <Toolbar />
                    <MainPage />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}