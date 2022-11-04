import { useState } from "react";
import { TabButton, TabControlContainer, TabsContainer } from "../styled";

const Tabs = (props: any) => {
  const { tabs, selected } = props;
  const keys = Object.keys(tabs);
  const [currentTab, setCurrentTab] = useState(selected || keys[0]);

  return (
    <TabsContainer>
      <TabControlContainer>
        {keys.map((label: any) => {
          return (
            <TabButton
              key={label}
              onClick={() => setCurrentTab(label)}
              selected={currentTab === label}
            >
              {label}
            </TabButton>
          );
        })}
      </TabControlContainer>
      {tabs[currentTab]}
    </TabsContainer>
  );
};

export default Tabs;
