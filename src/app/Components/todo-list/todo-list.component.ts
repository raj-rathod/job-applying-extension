import { Component, Input, OnInit } from '@angular/core';
import { defaultIcon, doneIcon, saveIcon } from 'src/Shared/constant/constant';
import { category } from 'src/Shared/enums/category.enum';
import { Tab } from 'src/Shared/interfaces/tab.interface';
import { TabsService } from 'src/Shared/services/tabs.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tabsList: Tab[] = [];
  savedTabs: Tab[] = [];
  todoList: Tab[] = [];
  category = category;
  defaultIcon = defaultIcon;
  doneIcon = doneIcon;
  saveIcon = saveIcon;
  
  constructor(
    private tabsService: TabsService
  ) { }

  ngOnInit(): void {
    this.getAllCurrentOpenTabs();
    this.getAllSavedtabsFromStorage();
  }

  getAllCurrentOpenTabs(): void {
    this.tabsService.getCurrentTabs().subscribe(tabs => {
      tabs.forEach(tab => {
       const tabData: Tab = {
         id: null,
         title: tab.title|| '', 
         url: tab.url||'',
         favIconUrl: tab.favIconUrl,
         windowId: tab.windowId,
         tabIndex: tab.index
        }
        this.tabsList.push(tabData);
      });
    });
  }

  getAllSavedtabsFromStorage(): void {
    this.tabsService.getAllSavedtabsFromStorage().subscribe((tabs) => {
      this.savedTabs = tabs;
    });
  }

  setAllTabsInStorage(tabs:Tab[]): void {
    this.tabsService.setAllTabsInStorage(tabs).subscribe(res=> {
      this.getAllSavedtabsFromStorage();
    });
  }

  isSaved(url:string, savedTabs: Tab[]):boolean {
    const index = savedTabs.findIndex(tab => tab.url === url);
    return index >= 0;
  }

  selectTab(tabIndex: number): void {
    chrome.tabs.highlight({'tabs': tabIndex}, function() {});
  }

  saveTab(tabIndex: number, catIndex: number): void {
    const tab = this.tabsList[tabIndex];
    tab.categoryId = catIndex;
    tab.todo = true;
    this.savedTabs.push(tab);
    this.setAllTabsInStorage(this.savedTabs);
  }

}
