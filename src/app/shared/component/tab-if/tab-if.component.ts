import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-if',
  templateUrl: './tab-if.component.html',
  styleUrls: ['./tab-if.component.scss']
})
export class TabIfComponent implements OnInit {
  selectedFrameWork :string ='angular'
  constructor() { }

  ngOnInit(): void {
  }

}
