import styled from "styled-components";

type ButtonProps = {
    isActive: boolean;
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    height: 97vh;
`;

export const Title = styled.h1`
    font-family: sans-serif;
`;

export const Table = styled.table`
    font-family: sans-serif;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #d3d3d3;
`;


export const Header = styled.tr`
    height: 36px;
    background-color: #d3d3d3;
`;

export const HeaderCell = styled.th`
    border: none;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 28px;
`;

export const Button = styled.button<ButtonProps>`
    height: 40px;
    width: 40px;
    border: 1px solid grey;
    background-color: ${(props) => (props.isActive ? "#007fff" : "#ffffff")};
    color: ${(props) => (props.isActive ? "#ffffff" : "#204a87")};
`;