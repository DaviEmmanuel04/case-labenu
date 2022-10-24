import styled from "styled-components";

export const Poster = styled.img`
    height: 574px;
    z-index: 3;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
`

export const GeneralInfos = styled.div`
    color: white;
`
export const MovieTitle = styled.h2`
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    color: white;
`

export const Infos = styled.p`
    margin: 0;
    size: 18px;
`

export const CastTitle = styled.h3`
    font-size: 28px;
    font-weight: 700;
`

export const Cast = styled.div`
    display: flex;
    gap: 16px;
    overflow: scroll;
`

export const Container = styled.div`
    padding: 74px 112px;
`

export const DataMovie = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify};
    gap: ${props => props.gap || 0};
    align-items: ${props => props.align};
`