import React, { useState } from 'react';
import { CardStyles, StyledButton } from '../styled-components';
import TypedMessage from './TypedMessage';
import { sendMessage } from '../utils/encoder';
import styled from 'styled-components';

interface CardProps {
    action: string;
}


const Card: React.FC<CardProps> = ({action}) => {
    const [message, setMessage] = useState<string>('');
    const [typedMessage, setTypedMessage] = useState<string>('');
    const [rerender, setRerender] = useState<boolean>(false); 
    const [msgKey, setMsgKey] = useState<string>('');

    const handleSend = async () => {
        setRerender(!rerender);
        try {
            const newMessage = await sendMessage({
                message: message,
                number: parseInt(msgKey),
                action: action
            });
            if (newMessage && newMessage.result) {
                setTypedMessage(newMessage.result);
                return;
            }
            // setTypedMessage(newMessage.result);
        } catch (err) {
            console.log(err);
        }
    };

    const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }

    const handleNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^-?[0-9]\d*$/;
        if (regex.test(event.target.value) || event.target.value === '') {
            setMsgKey(event.target.value);
        }
    };
    
    const handleClear = () => {
        setMessage('');
        setTypedMessage('');
        setRerender(!rerender);
        setMsgKey('');
    }

    return (
        <CardStyles className="md:container md:mx-auto flex flex-col justify-center align-middle">
            <Container>
                <InputContainer>
                <Input
                    type='text'
                    placeholder="Enter Message Here."
                    value={message}
                    onChange={handleMsgChange}
                />
                <Input
                    style={{appearance: 'none', MozAppearance: 'textfield'}}
                    type='text'
                    value={msgKey}
                    onChange={handleNumChange}
                    min='0'
                    placeholder="The Number's the Key."
                />
                </InputContainer>
                <ClearIcon onClick={handleClear}>-</ClearIcon>
            </Container>
            <StyledButton onClick={handleSend}>Send</StyledButton>
            {rerender && typedMessage ? <TypedMessage message={typedMessage} className="text-black text-lg" /> : <></>}
        </CardStyles>
    );
};

export default Card;


const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

const Input = styled.input`
    appearance: none;
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
    margin: 15px;
    padding-bottom: 7px;
    cursor: pointer;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: #b6aa956f;

    &:hover {
        background-color: #990033;
    }

    &:active {
        background-color: #990033;
    }
    `;