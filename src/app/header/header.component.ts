import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../app.headerService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }
  title:any;
  ngOnInit() {
    this.headerService.title.subscribe(title => {
      this.title = title;
  });
  }

}
