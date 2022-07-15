import styled from "styled-components";

export const Wrapper = styled.div`
    width: 350px;
    height: 150px;
    margin: 16px;
    padding: 16px;
    border: 1px solid navy;
    border-radius: 8px;
`;

export const WrapperTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
    margin: 8px 0;
    color: #2d3748;
    font-size: 16px;
    font-weight: bold;
`;

export const WrapperLink = styled.a`
    color: navy;

    &:hover{
        color: blue;
    }
`;
