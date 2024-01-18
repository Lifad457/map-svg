import styled from "styled-components";

export const StyledMap = styled.svg`
    display: block;
    position: absolute;
    top: -25.9rem;
    left: 4rem;
    margin-left: .5rem;
    rotate: -9deg;

    #outlines {
        stroke: chocolate;
    }
    .state {
        fill: #e4b4b4;
    }
`
export const StyledMapContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 700px;
    height: 600px;
    background: rgb(14,33,204);
    background: linear-gradient(45deg, rgba(14,33,204,1) 60%, rgba(228,180,180,1) 100%);
    font-family: var(--ff-primary);
    margin: 3rem;
    overflow: hidden;

    /* .sf-la {
        position: absolute;
        top: 10rem;
        left: 10rem;
        width: 20rem;
        height: 20rem;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        border: 2px solid red;
        border-right: 0;
        border-top: 0;
        border-style: dashed;
    } */

    .LA {
        color: red;
        position: absolute;
        top: 31rem;
        left: 14rem;
        font-size: clamp(1rem, 5vw + .5rem, 1.5rem);
        z-index: 1;
    }

    .LA p {
        translate: -3rem;
        font-size: clamp(1rem, 5vw + .5rem, 1.5rem);
        line-height: 1.9rem;
        text-align: center;
        text-shadow: .1rem .1rem 2px white;
    }
`