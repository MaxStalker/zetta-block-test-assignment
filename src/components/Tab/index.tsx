import { useState } from "react";

const TabContainer = (props: any) => {
  const { tabs, selected } = props;
  const keys = Object.keys(tabs);
  const [currentTab, setCurrentTab] = useState(selected);

  return (
    <div>
      <p>{currentTab}</p>
      <div>
        {keys.map((key: any) => {
          return <button onClick={() => setCurrentTab(key)}>{key}</button>;
        })}
        {tabs[currentTab]}
      </div>
    </div>
  );
};

export default TabContainer;
