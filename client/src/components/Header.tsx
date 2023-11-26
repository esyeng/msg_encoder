import React, { useEffect, useState } from 'react'
import luvnotesicon from '../assets/luvnotesicon.svg'
import { HeaderStyles, Image, RowContainer, StyledButton, Title } from '../styled-components'
import { sendMessage } from '../utils/encoder'

const Header: React.FC = () => {
    const [decoded, setDecoded] = useState<boolean>(false);
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
        const action = decoded ? 'encode' : 'decode';
        setDecoded(prev => !prev);
        const newMessage = await sendMessage({
            message: title,
            number: 2,
            action: action
        })
        console.log('new msg for us!', newMessage);
        setTitle(newMessage.result);
    }
    return (
        <HeaderStyles>
            <RowContainer>
                <StyledButton onClick={handleClick}>
                    <Image src={luvnotesicon} className="logo" alt="app logo" />
                </StyledButton>
                <Title>{title}</Title>
            </RowContainer>
        </HeaderStyles>
    )

}

export default Header;
