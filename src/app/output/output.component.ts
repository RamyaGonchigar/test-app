import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../app.headerService';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setTitle("Output");
    
  }

}
