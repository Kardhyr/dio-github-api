import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    margin: auto;
    margin-top: 16px;
    font-size: 16px;
    max-width: 95vw;
`;
WrapperTabs.tabsRole = "Tabs";

export const WrapperTabList = styled(TabList)`
    display: flex;
    margin: 0;
    padding: 4px;
    list-style-type: none;
`;
WrapperTabList.tabsRole = "TabList";


export const WrapperTab = styled(Tab)`
    margin: 8px;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid #ccc;
    user-select: none;
    cursor: pointer;

        &:focus {
            outline: none;
        }

        &.is-selected {
            box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.25);
        }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    padding: 16px;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
    min-height: 40vh;


        &.is-selected {
            display: block;
        }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
`; 