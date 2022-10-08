import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme['gray-600']};
        color: ${(props) => props.theme['gray-100']}
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 140%;
    }
`
