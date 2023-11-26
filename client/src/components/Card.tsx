import React, { useState } from 'react'
import { CardStyles } from '../styled-components'
import TextInput from './TextInput'

const Card: React.FC = () => {
    const [count, setCount] = useState(0)

    return (
        <CardStyles className="md:container md:mx-auto">
            <TextInput/>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </CardStyles>
    )
}

export default Card;
