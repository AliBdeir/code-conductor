import ExpressionBlock from '../../components/blocks/expression';
import ForLoopBlock from '../../components/blocks/for-loop';
import IfStatementBlock from '../../components/blocks/if-statement';
import WhileLoopBlock from '../../components/blocks/while-loop';
import './main-page.css';

function MainPage() {
    return (
        <div id="mainPage" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ExpressionBlock />
            <ForLoopBlock />
            <IfStatementBlock />
            <WhileLoopBlock />
        </div >
    )
}

export default MainPage;
