import { Injectable } from '@angular/core';
import Tab = chrome.tabs.Tab;
import {
    getCurrentTabs
} from '../../Utils/tabs.utils';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TabsService {
   getCurrentTabs():Observable<Tab[]>{
    return from(getCurrentTabs());
   }
}