import React, { useState } from 'react'
import luvnotesicon from './assets/luvnotesicon.svg'
import { HeaderStyles, Image, RowContainer, StyledButton, Title } from '../styled-components'
import { API_URL } from '../constants'

const Header: React.FC = () => {
    return (
        <HeaderStyles>
            <RowContainer>
                <StyledButton>
                    <Image src={luvnotesicon} className="logo" alt="app logo" />
                </StyledButton>

                <Title>nwxpqvgu</Title>
            </RowContainer>
        </HeaderStyles>
    )

}

export default Header;
