import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import { ColumnContainer } from './styled-components'
import ModeToggle from './components/ModeToggle'

function App() {
    return (
        <>
            <ColumnContainer>
                <Header />
                <ModeToggle optionA='encode'optionB='decode' />
                <Card action='encode' />
            </ColumnContainer>
        </>
    )
}


    export default App;
