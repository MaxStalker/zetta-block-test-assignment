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
  margin-bottom: 1em;
`;

export const TableHeader = styled.thead`
  background-color: #ededf7;
`;

export const TableBody = styled.tbody``;

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
  margin-bottom: 20px;
`;

export const Content = styled.div``;

export const TabsContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
`;
export const Title = styled.h2`
  text-align: center;
  color: #362aef;
  font-size: 40px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 5em;
`;

export const TabControlContainer = styled.div`
  border-radius: 40px;
  background-color: rgb(220, 220, 220);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.1);
  display: grid;
  padding: 4px;
  box-sizing: border-box;
  max-width: 500px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  margin-bottom: 1em;
`;

interface TabButtonProps {
  selected: boolean;
}
export const TabButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  padding: 0.75em;
  border-radius: 36px;
  border: none;
  text-transform: capitalize;
  font-weight: bold;
  background-color: ${(props: TabButtonProps) =>
    props.selected ? "#9190a5" : "transparent"};
  color: ${(props: TabButtonProps) => (props.selected ? "white" : "#9190a5")};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ gap = "10px" }) => gap};
  justify-content: ${({ justify = "center" }) => justify};
  width: 100%;
`;

export const SmallButton = styled.button`
  border: none;
  font-size: 16px;
  padding: 0.5em 0.75em;
  border-radius: 4px;
  flex: 0 0 auto;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bold;
  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

export const SmallGreyButton = styled(SmallButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  line-height: 1.25;
  color: #333;
  background-color: rgb(230, 230, 230);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.1);
`;

export const Filter = styled.input.attrs({
  type: "text",
})`
  display: block;
  font-size: 18px;
  border-radius: 4px;
  padding: 0.75em 1em;
  margin-bottom: 1em;
  width: 100%;
  text-align: center;
  border: 0;
  box-sizing: border-box;
  color: #362aef;
  font-weight: bold;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.1);

  ::placeholder{
    color: rgb(220, 220, 220);
  }
`;
