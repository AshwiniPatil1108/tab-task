import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabIfComponent } from './shared/component/tab-if/tab-if.component';
import { TabForComponent } from './shared/component/tab-for/tab-for.component';
import { TabSwitchComponent } from './shared/component/tab-switch/tab-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabIfComponent,
    TabForComponent,
    TabSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
