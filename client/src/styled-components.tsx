import styled from 'styled-components';
export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    margin: 0 auto;
    flex: 1;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    margin: 0 auto;
`;

export const CardStyles = styled.div`
    background-color: #fed99bff;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 1rem;
    flex-basis: 100%;
`
export const HeaderStyles = styled.div`
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    background-color: #fed99bff;
    flex-basis: 100%;
`
export const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    font-family: 'ADLaMDisplay-Regular', sans-serif;
    color: #37392eff;
`
export const StyledButton = styled.button`
    display: flex;
    background-color: #e55934ff;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 10px;
    flex-basis: 1;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    &:focus {
        outline: none;
    }
    `;

export const Image = styled.img`
        height: 2rem;
        width: 4rem;
    margin-right: 5px;

    `
