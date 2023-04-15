import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8px;
    border-radius: 10px;
    padding: 16px 20px 16px 20px;
    margin: 0px 12px 0px 12px;
    box-shadow: 0 4px 24px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const TextWrapper = styled.div`
    display: flex;
    border: 1px solid black;
    width: 90px;
`;

export const TextWrapperMid = styled.div`
    display: flex;
    width: 100px;
    border: 1px solid black;
`;

export const TextWrapperBig = styled.div`
    display: flex;
    width: 250px;
    border: 1px solid black;
`;