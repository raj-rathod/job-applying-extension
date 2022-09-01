import { Component, OnInit } from '@angular/core';
import { actionIcon, defaultIcon } from 'src/Shared/constant/constant';
import { Actions, actions } from 'src/Shared/enums/action.enum';
import { LinkCategory } from 'src/Shared/enums/category.enum';
import { Tab } from 'src/Shared/interfaces/tab.interface';
import { TabsService } from 'src/Shared/services/tabs.service';

@Component({
  selector: 'app-resume-link',
  templateUrl: './resume-link.component.html',
  styleUrls: ['./resume-link.component.css']
})
export class ResumeLinkComponent implements OnInit {
  defaultIcon = defaultIcon;
  actionIcon = actionIcon;
  actionsList = actions;
  savedTabs: Tab[] = [];
  resumeList: Tab[] = [];
  constructor(
    private tabsService: TabsService
  ) { }

  ngOnInit(): void {
    this.getAllSavedtabsFromStorage();
  }

  getAllSavedtabsFromStorage(): void {
    this.tabsService.getAllSavedtabsFromStorage().subscribe((tabs) => {
      this.savedTabs = tabs;
      this.getAllStudyMaterialLinks(tabs);
    });
  }

  setAllTabsInStorage(tabs:Tab[]): void {
    this.tabsService.setAllTabsInStorage(tabs).subscribe(res=> {
      this.getAllSavedtabsFromStorage();
    });
  }

  getAllStudyMaterialLinks(allSavedLinks: Tab[]): void {
    this.resumeList = allSavedLinks.filter(link=> link.categoryId === LinkCategory.Resume_link);
  }

  todoAction(actionIndex: number, linkIndex: number): void {
    const index = this.savedTabs.findIndex(saveTab => saveTab == this.resumeList[linkIndex]);
    if(actionIndex === Actions.todo){
      this.savedTabs[index].todo = true;
    }
    if(actionIndex === Actions.delete){
      this.savedTabs.splice(index, 1);
    }
    this.setAllTabsInStorage(this.savedTabs);
  }
}
