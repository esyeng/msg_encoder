import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import { ColumnContainer } from './styled-components'

function App() {
    return (
        <>
            <ColumnContainer>
                <Header />
                <Card />
            </ColumnContainer>
        </>
    )
}


    export default App;
