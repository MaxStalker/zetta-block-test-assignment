import styled from "styled-components";

export const Table = styled.table`
  border-radius: 2px;
  border: none;
  border-spacing: 0;
  overflow: hidden;
`;

export const TableRow = styled.tr`
  border: none;
  background-color: rgb(235, 235, 235);
  &:nth-child(2n) {
    background-color: rgb(250, 250, 250);
  }
  &:hover {
    cursor: pointer;
    background-color: pink;
  }
`;

export const Cell = styled.td`
  padding: 1em;
  border: none;
`;

export const FullWidthCell = styled(Cell).attrs({
  colspan: "100%",
});

export const TextArea = styled.textarea`
  padding: 1em;
  width: 100%;
  display: block;
  box-sizing: border-box;
  resize: vertical;
  border: 1px solid rgb(220,220,220)
`;
