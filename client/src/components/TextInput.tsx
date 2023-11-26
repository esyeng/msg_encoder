import React from 'react';
import styled from 'styled-components';

const TextInput = () => {
    return (
        <Text>
        </Text>
    )
}

export default TextInput;

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
    /* margin: 0 auto; */
`;
