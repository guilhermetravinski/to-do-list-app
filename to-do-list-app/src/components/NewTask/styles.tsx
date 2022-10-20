import styled from 'styled-components'

export const NewTaskConainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;

  position: absolute;
  width: 46rem;
  height: 3.375rem;
  left: calc(50% - 736px / 2);
  top: 173px;
`
export const NewTaskInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;

  width: 39.875rem;
  height: 3.375rem;

  background: ${(props) => props.theme['gray-500']};

  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  color: ${(props) => props.theme['gray-300']};

  order: 0;
  flex-grow: 1;

  :focus {
    border: 1px solid ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['gray-100']};
  }
`
export const NewTaskButton = styled.button`
  width: hug;
  height: hug;
  background: ${(props) => props.theme['blue-dark']};
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};
  border: 0;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.5rem;

  font-size: 0.875rem;
  line-height: 140%;

  :hover {
    background: ${(props) => props.theme.blue};
  }
`
