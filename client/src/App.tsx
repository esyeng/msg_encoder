import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import { ColumnContainer } from './styled-components'
import ModeToggle from './components/ModeToggle'
import { useState } from 'react'


function App() {
    const [mode, setMode] = useState<string>('encode')
    console.log(mode);
    return (
        <>
            <ColumnContainer>
                <Header />
                <ModeToggle optionA='encode'optionB='decode' selectedOption={setMode} />
                <Card action={mode} />
            </ColumnContainer>
        </>
    )
}


    export default App;
