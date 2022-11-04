import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  body {
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #fff;
    font-family: sans-serif;
  }
`;

const borderColor = `#ebebfa`;

export const Table = styled.table`
  border-radius: 8px;
  border: none;
  border-spacing: 0;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: #fafbfc;
`;

export const HeadCell = styled.th`
  padding: 10px;
  color: #565693;
  font-size: 18px;
  font-weight: 700;
`;

export const TableRow = styled.tr`
  border: none;
  &:nth-child(2n) {
    background-color: rgb(250, 250, 250);
  }
  &:hover {
    cursor: pointer;
    background-color: rgb(150 46 255 / 15%);
  }
`;

export const Cell = styled.td`
  padding: 1em;
  border: 1px solid ${borderColor};
`;

export const FullWidthCell = styled(Cell).attrs({
  colSpan: "100%",
})``;

export const TextArea = styled.textarea`
  padding: 1em;
  width: 100%;
  display: block;
  box-sizing: border-box;
  resize: vertical;
  border: 1px solid rgb(220, 220, 220);
`;

export const Content = styled.div`
  padding: 1em;
`;
