import Tab = chrome.tabs.Tab;

export const getCurrentTabs = async(): Promise<Tab[]> => {
    const tabs = await  chrome.tabs.query({},); 
    return tabs;   
}