import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 20px 0 20px;
    height: 97vh;
`;

export const Title = styled.h2`
    font-family: sans-serif;
    font-weight: 400;
`;

export const Table = styled.table`
    font-family: sans-serif;
    width: 100%;
    border-collapse: collapse;
`;

export const Row = styled.tr`
    height: 50px;
`;

export const Header = styled.tr`
    text-align: left;
`;

export const ButtonWrapper = styled.div`
    padding: 8px 0 8px 0;
`;

export const Button = styled.button`
    height: 28px;
    width: 180px;
    background-color: #007fff;
    color: #ffffff;
    font-size: 16px;
    border: none;
    border-radius: 4px;
`;