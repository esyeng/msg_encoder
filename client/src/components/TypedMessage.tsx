import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TypedMessageProps {
    message: string;
    className?: string;
}

const TypedMessage: React.FC<TypedMessageProps> = ({ message, className }) => {
    const typingDelay = 40; // Delay between each character in milliseconds

    const [displayedMessage, setDisplayedMessage] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedMessage(prev => prev ? prev + message[index - 1] : message[index]);
            index++;

            if (index === message.length) {
                clearInterval(intervalId);
            }
        }, typingDelay);

        // Cleanup interval on component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [message, typingDelay]);

    return (
        <Container>
            <Text className={className}>{displayedMessage}</Text>
        </Container>
    );
};

const Container = styled.div`
        padding: 15,
        marginBottom: 0,
        marginTop: 30,
        alignSelf: 'flex-start',
        flex: 1,
        borderRadius: 10
`;

const Text = styled.text`
        fontSize: 18,
        color: '#000'
`;

export default TypedMessage;