import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: absolute;
  height: 200px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: ${(props) => props.theme['gray-700']};
`
