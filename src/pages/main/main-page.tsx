import BlockTreeComponent from '../../components/block-tree/block-tree';
import './main-page.css';

function MainPage() {
    return (
        <div className='w-full pt-4 overflow-auto' style={{ height: 'calc(100vh - 64px)' }}>
            <BlockTreeComponent />
        </div>
    )
}

export default MainPage;
