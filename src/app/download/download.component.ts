import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../app.headerService';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setTitle("Download");
    
  }

  download(){
     alert("Not Created Rest API")
  }

}
