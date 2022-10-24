import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`

export const Image = styled.img`
    width: 264px;
    border-radius: 4px;
`

export const Title = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    max-width: 264px;
    margin-bottom: 4px;
`

export const DateField = styled.p`
    margin: 0;
    color: #646464;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
`