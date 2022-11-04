import { useState } from "react";
import { TabsContainer } from "../styled";

const Tabs = (props: any) => {
  const { tabs, selected } = props;
  const keys = Object.keys(tabs);
  const [currentTab, setCurrentTab] = useState(selected || keys[0]);

  return (
    <TabsContainer>
      {keys.map((label: any) => {
        return (
          <button key={label} onClick={() => setCurrentTab(label)}>
            {label}
          </button>
        );
      })}
      {tabs[currentTab]}
    </TabsContainer>
  );
};

export default Tabs;
