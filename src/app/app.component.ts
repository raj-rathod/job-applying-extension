import { Component, NgZone, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Job Apply Management';
  constructor(
    private zone: NgZone
  ){

  }
  ngOnInit(): void {
    this.zone.run(() => {
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log("\n/////////////////////\n");
        
        tabs.forEach((tab) => {
          console.log(tab.url);
          
          
        });
        
      });
    });

    
  };
}

