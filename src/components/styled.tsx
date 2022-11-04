import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  body {
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #fafaff;
    font-family: sans-serif;
  }
`;

export const Table = styled.table`
  border: 1px solid #cfcfde;
  border-spacing: 0;
  background-color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
`;

export const TableHeader = styled.thead`
  background-color: #ededf7;
`;

export const TableBody = styled.tbody``

export const HeadCell = styled.th`
  padding: 10px;
  color: #565693;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid #cfcfde;
  text-align: left;
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
  border: 1px solid #ebebfa;
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

export const Content = styled.div``;

export const TabsContainer = styled.div`
  margin-bottom: 20px;
`;
