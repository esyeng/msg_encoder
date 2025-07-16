import React, { useEffect, useState } from 'react'
import luvnotesicon from '../assets/luvnotesicon.svg'
import { HeaderStyles, RowContainer, Title } from '../styled-components'
import { sendMessage } from '../utils/encoder'
import styled from 'styled-components';

const Header: React.FC = () => {
    const [title, setTitle] = useState<string>("nwxpqvgu");

    useEffect(() => {
        const encodeTitle = async () => {
            const newMessage = await sendMessage({
                message: 'luvnotes',
                number: Math.max(2),
                action: 'encode'
            })
            await newMessage;
            return newMessage.result;
        }
        encodeTitle();
    }, [])

    const handleClick = async () => {        
        setTitle(title === "luvnotes" ? "nwxpqvgu" : "luvnotes");
    }
    return (
        <HeaderStyles>
            <RowContainer>
                <IconButton onClick={handleClick}>
                    <img src={luvnotesicon} className="logo" alt="app logo" />
                </IconButton>
                <TxtContainer>
                    <Title>{title}</Title>
                </TxtContainer>
            </RowContainer>
        </HeaderStyles>
    )

}

export default Header;

const TxtContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

export const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    outline: none;
    padding: 10px;
    margin-right: 10px;
    height: 4rem;
    width: 7rem;

    &:hover {
        background: rgba(108, 26, 26, 0.147);
    }

    &:focus {
        outline: none;
    }
    `;
