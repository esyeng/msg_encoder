import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: transparent;
  border: none;
  outline: none;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
`

const Button = styled.button`
  flex: 0.5;
`;

const Text = styled.p`
  font-weight: 500;
  text-align: center;
  margin: 0 2px;
  color: ${props => props.selected ? '#fff' : '#000'};
`;

const SelectedView = styled.div<any>`
  background-color: ${props => props.selected ? '#e55934ff' : '#b6aa956f'};
  padding-top: 5px;
  border-radius: 12px;
  min-height: 40px;
  display: flex;
  justify-content: center;
`;


interface ModeToggleProps {
    optionA: string;
    optionB: string;
    selectedOption: (option: string) => void;
    }

const ModeToggle: React.FC<ModeToggleProps> = ({ optionA, optionB, selectedOption }) => {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);

  const handleSelectOption = (option: any, isA: boolean) => { 
    selectedOption(option);
    setA(isA ? true : false);
    setB(isA ? false : true);
  };

  return (
    <Container>
      <ToggleContainer>
        <Button onClick={() => handleSelectOption(optionA, true)}>
          <SelectedView selected={a}>
            <Text selected={a}>{optionA}</Text>
          </SelectedView>
        </Button>
        <Button onClick={() => handleSelectOption(optionB, false)}>
          <SelectedView selected={b}>
            <Text selected={b}>{optionB}</Text>
          </SelectedView>
        </Button>
      </ToggleContainer>
    </Container>
  );
}

export default ModeToggle;