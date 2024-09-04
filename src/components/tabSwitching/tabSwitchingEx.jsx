import  { useState } from "react";

export const TabSwitchingExample = () => {
  const [currentTab, setCurrentTab] = useState();

  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      content: "Lorem ",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      content: "Lorem Lorem",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      content: "Lorem Lorem Lorem",
    },
  ];

  const tabHandler = (id) => {
    setCurrentTab(id);
  };

  return (
    <>
      <div className="container">
        <div className="tab">
          {tabs.map((each, ind) => {
            return (
              <button
                key={ind}
                id={each.id}
                onClick={() => tabHandler(each.id)}
                disabled={currentTab === each.id}
              >
                {each.tabTitle}
              </button>
            );
          })}
        </div>

        <div className="content">
          {tabs.map((tab) => (
            <>{currentTab === tab.id && <p>{tab.content}</p>}</>
          ))}
        </div>
      </div>
    </>
  );
};
