import { All_Saved_Tabs } from "src/Shared/constant/constant";
import { Tab } from "src/Shared/interfaces/tab.interface";
import defaultTab = chrome.tabs.Tab;

export const getCurrentTabs = async(): Promise<defaultTab[]> => {
    const tabs = await  chrome.tabs.query({},); 
    return tabs;   
}

export const getAllSavedtabsFromStorage = async (): Promise<
  Tab[]
> => {
    let allSavedTabs: Tab[] = [];
   await chrome.storage.sync.get(
    All_Saved_Tabs, (items)=>{
       allSavedTabs = items[All_Saved_Tabs];
    }
  );
  return allSavedTabs;
};

export const setAllTabsInStorage = async (
  tabs: Tab[]
): Promise<void> => {
  return chrome.storage.sync.set({ [All_Saved_Tabs]: tabs });
};