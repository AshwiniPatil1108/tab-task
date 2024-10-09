import { Component, OnInit } from '@angular/core';
import { Itab } from '../../model/tab';

@Component({
  selector: 'app-tab-for',
  templateUrl: './tab-for.component.html',
  styleUrls: ['./tab-for.component.scss']
})
export class TabForComponent implements OnInit {
  selectedFrameWork :string ='angular'
  tabArr:Array<Itab>=[
    {
      tabTitle:'Angular 12',
      frameWorkName :'angular',
      tabContent :`<p class="alert alert-info mb-0">
        <strong>Angular</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Corrupti blanditiis possimus omnis, aliquam voluptate accusamus? Quibusdam ut. 
        </p>`
    },
    {
      tabTitle:'React 19',
      frameWorkName :'react',
      tabContent :`<p class="alert alert-info mb-0">
        <strong>React</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Corrupti blanditiis possimus omnis, aliquam voluptate accusamus? Quibusdam ut. 
        </p>`
    },
    {
      tabTitle:'Vue 20',
      frameWorkName :'vue',
      tabContent :`<p class="alert alert-info mb-0">
        <strong>Vue</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Corrupti blanditiis possimus omnis, aliquam voluptate accusamus? Quibusdam ut. 
      </p>`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(val:string){
    this.selectedFrameWork =val
  }

}
