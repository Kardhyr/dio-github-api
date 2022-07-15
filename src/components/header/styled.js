import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
    }

    button {
        background-color: #225ed899;
        padding: 8px 16px;
        margin: 0 16px;
        box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.75);
        border-radius: 5px;
        text-transform: uppercase;
        
        &:active {
            background-color: #225ea8ff;
            box-shadow: inset -1px -1px 2px 0px rgba(0,0,0,0.75);
        }
        
        span {
            color: #fff;
            font-weight: bold;
        }
    }
    `;
    