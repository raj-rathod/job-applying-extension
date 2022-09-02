import { Injectable } from '@angular/core';
import defaultTab = chrome.tabs.Tab;
import {
  getCurrentTabs,
  getAllSavedtabsFromStorage,
  setAllTabsInStorage,
} from '../../Utils/tabs.utils';
import { from, Observable } from 'rxjs';
import { Tab } from '../interfaces/tab.interface';
@Injectable({
  providedIn: 'root',
})
export class TabsService {
  getCurrentTabs(): Observable<defaultTab[]> {
    return from(getCurrentTabs());
  }

  getAllSavedtabsFromStorage(): Observable<Tab[]> {
    return from(getAllSavedtabsFromStorage());
  }

  setAllTabsInStorage(tabs: Tab[]): Observable<void> {
    return from(setAllTabsInStorage(tabs));
  }
}
