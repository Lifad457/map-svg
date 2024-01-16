import styled from "styled-components";

export const StyledMap = styled.svg`
    display: block;
    position: absolute;
    top: -7%;
    left: 3%;
    width: 120%;
    rotate: -12deg;

    #outlines {
        stroke: none;
    }
    .state {
        fill: rgb(228, 180, 180);
    }
`
export const StyledMapContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 100vh;
    padding-bottom: 100vh;
    vertical-align: middle;
    background-color: bisque;

    .sf-la {
        position: absolute;
        top: 50%;
        left: 10%;
        width: 5%;
        height: 10%;
        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
        border: 2px solid red;
        border-right: 0;
        border-top: 0;
        border-style: dashed;
        z-index: 1;
    }

    .LA {
        color: red;
        position: absolute;
        top: 82.5%;
        left: 26%;
        font-size: 2rem;
    }
    .LA p {
        translate: -3rem;
        line-height: 1.6rem;
        text-align: center;
    }
`