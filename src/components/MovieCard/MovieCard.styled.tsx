import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 8px;
    border-radius: 10px;
    padding: 20px;
    margin: 0px 12px 0px 12px;
    box-shadow: 0 4px 24px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const TextWrapper = styled.div`
    display: flex;
    width: 90px;
`;

export const TextWrapperMid = styled.div`
    display: flex;
    width: 100px;
`;

export const TextWrapperBig = styled.div`
    display: flex;
    width: 150px;
`;