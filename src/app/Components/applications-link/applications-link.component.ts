import { Component, OnInit } from '@angular/core';
import { actionIcon, defaultIcon } from 'src/Shared/constant/constant';
import { Actions, actions } from 'src/Shared/enums/action.enum';
import { LinkCategory } from 'src/Shared/enums/category.enum';
import { jobStatus, jobStatusTab } from 'src/Shared/enums/job-status.enum';
import { Tab } from 'src/Shared/interfaces/tab.interface';
import { TabsService } from 'src/Shared/services/tabs.service';

@Component({
  selector: 'app-applications-link',
  templateUrl: './applications-link.component.html',
  styleUrls: ['./applications-link.component.css']
})
export class ApplicationsLinkComponent implements OnInit {
  defaultIcon = defaultIcon;
  actionIcon = actionIcon;
  actionsList = actions;
  jobStatusTab = jobStatusTab;
  jobStatus = jobStatus;
  loading = false;
  savedTabs: Tab[] = [];
  applicationsList: Tab[] = [];
  constructor(private tabsService: TabsService) {}

  ngOnInit(): void {
    this.getAllSavedtabsFromStorage();
  }

  getAllSavedtabsFromStorage(): void {
    this.loading = true;
    this.tabsService.getAllSavedtabsFromStorage().subscribe((tabs) => {
      this.savedTabs = tabs;
      this.loading = false;
      this.getAllStudyMaterialLinks(tabs);
    });
  }

  setAllTabsInStorage(tabs: Tab[]): void {
    this.tabsService.setAllTabsInStorage(tabs).subscribe((res) => {
      this.getAllSavedtabsFromStorage();
    });
  }

  getAllStudyMaterialLinks(allSavedLinks: Tab[]): void {
    this.applicationsList = allSavedLinks.filter(
      (link) => link.categoryId === LinkCategory.Application_Link
    );
  }

  todoAction(actionIndex: number, linkIndex: number): void {
    const index = this.savedTabs.findIndex(
      (saveTab) => saveTab == this.applicationsList[linkIndex]
    );
    if (actionIndex === Actions.todo) {
      this.savedTabs[index].todo = true;
    }
    if (actionIndex === Actions.delete) {
      this.savedTabs.splice(index, 1);
    }
    this.setAllTabsInStorage(this.savedTabs);
  }

  setStatus(statusIndex: number, tabIndex: number): void {
    const index = this.savedTabs.findIndex(
      (saveTab) => saveTab == this.applicationsList[tabIndex]
    );
    this.savedTabs[index].status = statusIndex;
    this.setAllTabsInStorage(this.savedTabs);
  }

}
