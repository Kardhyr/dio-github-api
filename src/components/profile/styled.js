import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 8px 0;
`;

export const WrapperInfosUser = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;
    margin-top: 8px;

    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    a {
        font-size: 18px;
        color: navy;
        font-weight: bold;
    }
    
    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin-right: 8px;
        text-align: center;
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

    h3 {
        margin-right: 8px;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
    margin-top: 12px;
`;

