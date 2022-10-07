import styled from 'styled-components'

export const NewTaskConainer = styled.div`
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 736px;
  height: 54px;
  left: calc(50% - 736px / 2);
  top: 173px;
`
export const NewTaskInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 638px;
  height: 54px;

  background: ${(props) => props.theme['gray-500']};

  border: 1px solid ${(props) => props.theme['gray-700']};
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;
`
