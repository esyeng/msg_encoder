import React, { useState } from 'react';
import { CardStyles, StyledButton } from '../styled-components';
import TypedMessage from './TypedMessage';
import styled from 'styled-components';

const Card: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [typedMessage, setTypedMessage] = useState<string>('');
    const [rerender, setRerender] = useState<boolean>(false); 
    const handlePrint = () => {
        setTypedMessage(message);
        setRerender(!rerender);
    };

    const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    const handleClear = () => {
        setMessage('');
        setTypedMessage('');
    }

    return (
        <CardStyles className="md:container md:mx-auto flex flex-col justify-center align-middle">
            <Container>
                <Text
                    placeholder="Enter message here."
                    value={message}
                    onChange={handleMsgChange}
                />
                <ClearIcon onClick={handleClear}>X</ClearIcon>
            </Container>
            <StyledButton onClick={handlePrint}>Send</StyledButton>
            {rerender && typedMessage ? <TypedMessage message={typedMessage} className="text-black text-lg" /> : <></>}
        </CardStyles>
    );
};

export default Card;


const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
`;

const Text = styled.input`
    display: flex;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 14px;
    height: 4rem;
    cursor: underline;
    border-radius: 0.5rem;
    background-color: #b6aa956f;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    `;

const ClearIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    color: #990033ff;
    `;