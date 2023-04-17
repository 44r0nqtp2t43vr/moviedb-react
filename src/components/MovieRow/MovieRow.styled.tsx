import styled from "styled-components";

type RowProps = {
    isGrey: boolean;
};

export const Row = styled.tr<RowProps>`
    height: 50px;
    background-color: ${(props) => (props.isGrey ? "#d3d3d3" : "#ffffff")};
`;

export const CenteredCell = styled.td`
    text-align: center;
`;

export const ButtonCell = styled.td`
    padding: 0 20px 0 20px;
`;

export const Button = styled.button`
    height: 40px;
    width: 100%;
    background-color: #007fff;
    color: #ffffff;
    border: none;
    border-radius: 10px;
`;