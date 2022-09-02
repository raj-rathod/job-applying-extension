import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { expandIcon } from 'src/Shared/constant/constant';
import { category, LinkCategory } from 'src/Shared/enums/category.enum';
import { Tab } from 'src/Shared/interfaces/tab.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Job Apply Management';
  category = category;
  categoryId = LinkCategory;
  innerWidth = 0;
  categoryIndex = -1;
  expandIcon = expandIcon;
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  selectCategory(catIndex: number): void {
    this.categoryIndex = catIndex;
    this.closeCollapse();
  }

  closeCollapse(): void {
    const collapseRef = this.elRef.nativeElement.querySelectorAll(
      '#navbarTogglerDemo02'
    );
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 992) {
      collapseRef[0].className = 'collapse navbar-collapse';
    }
  }

  fullPage(): void {
    chrome.runtime.openOptionsPage();
  }
}
