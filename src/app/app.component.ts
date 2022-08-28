import { Component, NgZone, OnInit  } from '@angular/core';
import { defaultIcon, doneIcon } from 'src/Shared/constant/constant';
import { category } from 'src/Shared/enums/category.enum';
import { Tab } from 'src/Shared/interfaces/tab.interface';
import { TabsService } from 'src/Shared/services/tabs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Job Apply Management';
  category = category;
  defaultIcon = defaultIcon;
  doneIcon = doneIcon;
  tabsList: Tab[] = [];
  constructor(
    private tabsService: TabsService
  ){}

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

  fullPage(): void{
    chrome.runtime.openOptionsPage();
  }
}

