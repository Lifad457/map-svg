import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --ff-primary: 'Lemon', sans-serif;
    }
    /* font-size: clamp(2rem, 5vw + .5rem, 3rem);
    font-size: clamp(1rem, 5vw + .5rem, 1.5rem); 
    display: grid;
    gap: min(2rem, 5vw);
    */
`
export default GlobalStyle