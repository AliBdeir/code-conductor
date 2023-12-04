import Block from '../../components/block/block';
import { BlockType } from '../../components/block/types';
import './main-page.css';

function MainPage() {
    return (
        <div id="mainPage" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Block type={BlockType.Expressions} expressionNumber={1} />
            <Block type={BlockType.If} expressionNumber={2} />
            <Block type={BlockType.For} expressionNumber={3} />
            <Block type={BlockType.While} expressionNumber={4} />
        </div >
    )
}

export default MainPage;
