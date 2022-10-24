import styled from "styled-components";

export const CircularProgress = styled.div`
    position: relative;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
        content: '';
        position: absolute;
        height: 50px;
        width: 50px;
        background-color: RGB(66, 36, 109);
        border-radius: 50%;
    }
`

export const PorgressValue = styled.span`
    position: relative;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.color};
`