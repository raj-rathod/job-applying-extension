import { Component, Input, OnInit } from '@angular/core';
import { defaultIcon, doneIcon, saveIcon } from 'src/Shared/constant/constant';
import { Tab } from 'src/Shared/interfaces/tab.interface';
import { TabsService } from 'src/Shared/services/tabs.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tabsList: Tab[] = [];
  todoList: Tab[] = [];
  defaultIcon = defaultIcon;
  doneIcon = doneIcon;
  saveIcon = saveIcon;
  
  constructor(
    private tabsService: TabsService
  ) { }

  ngOnInit(): void {
    this.getAllCurrentOpenTabs();
  }
  
  getAllCurrentOpenTabs(): void {
    this.tabsService.getCurrentTabs().subscribe(tabs => {
      tabs.forEach(tab => {
       const tabData: Tab = {
         id: null,
         title: tab.title|| '', 
         url: tab.url,
         favIconUrl: tab.favIconUrl,
         windowId: tab.windowId,
         tabIndex: tab.index
        }
        this.tabsList.push(tabData);
      });
    });
  }

  selectTab(tabIndex: number): void {
    chrome.tabs.highlight({'tabs': tabIndex}, function() {});
  }

}
